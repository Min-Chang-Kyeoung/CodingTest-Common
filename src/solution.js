module.exports = function update(prevState, changes) {
    // type here
    let command = checkSetPrefix(changes);
    console.log(command);
    
    if(command !== undefined){
        let key = command[0];
        let value = command[1];
        return setData(prevState, key, value);
    }
};

//set json
function setData(prevState ,key, value){
    prevState[key] = value;
    return prevState;
}

// get need to set key, value
function checkSetPrefix(changes,key){
    if (changes === null){
        return;
    }
    if(changes.hasOwnProperty('$set')){
        return [key[0] , changes.$set];
    }
    key = Object.keys(changes);
    for(var i in changes){
        return checkSetPrefix(changes[i],key);
    }
}
