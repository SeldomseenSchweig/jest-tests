const {square} = require("./square");

describe('square function', function(){

    test('square should return the square value of a number', function(){
        const res = square(3);
        expect(res).toEqual(9);
    } );
    
    
    test('square should return square negative numbers', function(){
        const num = square(-9);
        expect(num).toEqual(81);
    } );


});
