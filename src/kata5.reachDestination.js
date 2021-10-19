const reachDestination = (distance, speed) => {
    let time = distance / speed
    let result = Math.round(time/0.5)*0.5
    return `I should be there in ${result} hours.`
};

module.exports = reachDestination;
