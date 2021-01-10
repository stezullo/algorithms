var ParkingSystem = function(big, medium, small) {
    this._big = big;
    this._medium = medium;
    this._small = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    let canPark = true;
    
    // big
    if(carType === 1 && this._big > 0) {
            --this._big;
    }
    else if(carType === 2 && this._medium > 0) {
        --this._medium;
        
    }
    else if(carType === 3 && this._small > 0) {
        --this._small;
    }
    else {
        canPark = false;
    }
    
    return canPark;
};
