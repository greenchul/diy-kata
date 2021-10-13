const humanCatDogYears = number => {
    let years = []
    years.push(number)
    let cat = 0
    let dog = 0
    
    if (number === 1){
        cat = 15
        dog = 15
    }
    else if(number === 2){
        cat = 15 + 9
        dog = 15 + 9
    }
    else if(number >2){
        let base = 15+9
        let multiplier = number -2
        let catAddition = multiplier * 4
        let dogAddition = multiplier * 5
        cat = base +  catAddition
        dog = base + dogAddition
    }
    years.push(cat, dog)
    return years
};
    
module.exports = humanCatDogYears;
