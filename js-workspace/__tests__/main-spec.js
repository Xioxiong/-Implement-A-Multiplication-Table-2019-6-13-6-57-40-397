const {isValid,generateMultiplyArray,multiplyTable,printMultiplyTable}=require('../main');


it('should generated one expression',()=>{

    //given
    let firstNumber = 2;
    let secondNumber = 3;

    //when
    const oneExpression = isValid(firstNumber,secondNumber);

    //then
    expect(oneExpression).toBe(true);
})

it('should generate array with table items',()=>{
//given
let firstNumber = 2;
let secondNumber = 3;

 //when
 var generateArray = generateMultiplyArray(firstNumber,secondNumber);

 //then
 expect(generateArray[0][0]).toBe("2*2=4");
 expect(generateArray[1][0]).toBe("2*3=6");
 expect(generateArray[1][1]).toBe("3*3=9"); 
})

it ('should print multiply table', () => {
    //given
    const firstNumber = 2;
    const secondNumber = 3;

    //when
    const result = multiplyTable(firstNumber,secondNumber);

    //then
    expect(result).toBe("2*2=4 \n2*3=6 3*3=9 \n");
});

it ('should generate result string', () => {
    //given
    const array = [];
    array[0] = [];
    array[0][0] = "2*2=4";

    //when
    const result = printMultiplyTable(array);

    //then
    expect(result).toBe("2*2=4 \n");
});
