const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("Should return the string yes when passed true",()=>{
    expect(booleanToWord(true)).toBe('Yes')
  })
  it("Should return the string no when passed false", ()=>{
    expect(booleanToWord(false)).toBe("No")
  })

});
