var array = [3,-1,-7,-4,-5,9,10];

for (var i = 0; i<array.length; i++ ){
    var firstNum = array[i];
    for (var j = i+1; j<array.length; j++){
        var secondNum = array[j];
        for (var k = j+1; k<array.length; k++){
            var thirdNum = array[k];
            var sum = firstNum + secondNum + thirdNum;
            if(sum == 0){
                console.log(firstNum+","+secondNum+","+thirdNum);
            }
        }
    }
}