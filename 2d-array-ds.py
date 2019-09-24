#!/bin/python3

import math
import os
import random
import re
import sys

# O(n^2)
def hourglassSum(arr):
    max = -10000
    for i in range(1, len(arr) - 1):
        for j in range(1, len(arr[0]) - 1):
            sum = arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1] + arr[i][j] + arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1] 
            if sum > max:
                max = sum
    return max
                


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr = []

    for _ in range(6):
        arr.append(list(map(int, input().rstrip().split())))

    result = hourglassSum(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
