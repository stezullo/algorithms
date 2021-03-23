// Simple DFS_Visit algorithms

var canVisitAllRooms = function(rooms) {
    const roomsLength = rooms.length;
    if(!rooms || roomsLength === 0) {
        return false;
    }
    else {
        const visited = {};
        let counterObj = { counter: 0};
        DFS_Visit(0, rooms, visited, counterObj);
        return counterObj.counter === roomsLength;
    }
};

const DFS_Visit = (start, rooms, visited, counterObj) => {
    visited[start] = true;
    ++counterObj.counter;
    if(rooms[start].length > 0) {
        rooms[start].forEach((room) => {
            if(visited[room] === undefined) {
                DFS_Visit(room, rooms, visited, counterObj);
            }
        });
    }
