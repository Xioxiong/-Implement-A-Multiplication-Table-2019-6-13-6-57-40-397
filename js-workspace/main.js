


function multiplyTable(firstNumber,secondNumber){
    var output = "";
    var valid = isValid(firstNumber,secondNumber);
    if(!valid){
        return valid;
    }
    var multiplyArray = generateMultiplyArray(firstNumber,secondNumber);
    output = printMultiplyTable(multiplyArray);
    return output;
}

function isValid(firstNumber,secondNumber){
    return firstNumber<secondNumber;
}

function generateMultiplyArray(firstNumber,secondNumber){
    var generateArray = [];
    var times = secondNumber - firstNumber + 1;
    for(let rowIndex = 0 ;rowIndex<times;rowIndex++){
        var row = [];
        for(let colunmIndex = 0;colunmIndex<(rowIndex+1);colunmIndex++){
            var result = (colunmIndex+firstNumber)*(rowIndex+firstNumber);
            var str =  (colunmIndex+firstNumber)+"*"+(rowIndex+firstNumber)+"="+result;
            row.push(str);
        }
        generateArray.push(row);  
    }
    return generateArray;
}


function printMultiplyTable(multiplyArray){
    var output = "";
    for(var i=0;i<multiplyArray.length;i++){
        for(j=0;j<multiplyArray[i].length;j++){
            output = output+multiplyArray[i][j]+" ";
        }
        output += "\n";
    }
    return output;
}

module.exports={
    isValid,
    multiplyTable,
    generateMultiplyArray,
    printMultiplyTable
}

