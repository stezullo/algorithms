# Write your MySQL query statement below


SELECT employee_id, IF((MOD(employee_id,2) != 0),IF((name LIKE 'M%'),0,salary),0) as bonus
FROM employees
ORDER BY employee_id ASC
