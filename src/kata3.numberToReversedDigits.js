const numberToReversedDigits = number => {
    let string = number.toString()
    let stringArr = string.split("")
    let numArr = stringArr.map((n)=>{
        return parseInt(n)
    })
    let reversed = numArr.reverse()
    return reversed
};

module.exports = numberToReversedDigits;
