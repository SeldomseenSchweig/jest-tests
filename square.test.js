const {square} = require("./square");


test('square should return the square value of a number', function(){
    const res = square(3)
    expect(res).toEqual(9)
} )