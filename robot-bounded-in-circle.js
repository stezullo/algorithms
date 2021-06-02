/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let coordinatesX = 0, coordinatesY = 0;
    let direction = 0;
    let leftY = -1;
    let rightY = 1;

    instructions.split('').forEach((instruction) => {
        if(instruction.indexOf('G') >= 0) {
            switch(direction) {
                case 0: {
                    coordinatesX++;
                    break;
                };
                case 1: {
                    coordinatesY--;
                    break;
                };
                case 2: {
                    coordinatesX--;
                    break;
                };
                case 3: {
                    coordinatesY++;
                    break;
                };
                default: {
                    break;
                }; 
            }
        }
        else if(instruction.indexOf('L') >= 0) {
            direction++;
            
            if(direction === 4) {
                direction = 0;
            }
        }
        else {
            if(direction === 0) {
                direction = 3;
            }
            else {
                direction--;
            }
        }
    });
    
    return (coordinatesX === 0 && coordinatesY === 0) || direction != 0;
};
