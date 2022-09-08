const {square, cube} = require("./square");

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


describe('cube function', function(){

    test('cube should return the cubed value of a number', function(){
        const res = cube(3);
        expect(res).toEqual(27);
        const num = cube(-2);
        expect(num).toEqual(-8);
    } );
    


});


