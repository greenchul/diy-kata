const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", ()=>{
    it("returns an array", ()=>{
        expect(humanCatDogYears()).toEqual(expect.arrayContaining([]))
    })
    it("return an array containing 2 and 24 when passed 2", ()=>{
        expect(humanCatDogYears(2)).toEqual(expect.arrayContaining([2, 24]))
    })
    it("return an array containing 3 and 29 when passed", ()=>{
        expect(humanCatDogYears(3)).toEqual(expect.arrayContaining([3, 29]))
    })
    it("return an array [4, 32, 34] when passed 4", ()=>{
        expect(humanCatDogYears(4)).toEqual([4, 32, 34])
    })
})

// Look Ma, no handlebars!!!
