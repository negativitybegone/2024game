
// output: [6,7,8,11,23,,5,0,0, 0, 0,0,0,0,0]
const initialArr = [0,6,7,0,8,0,0,11,23,0,0,0,0,5];
const arr = initialArr.slice()
// zeros to the front 
 function moveElSingleArr(arr) {
    let n=arr.length;
    let nonZeros=n-1;
    for (let i = n-1; i>=0; i--){
        if (arr[i] != 0){
                arr[nonZeros--] = arr[i];
            }
        }
    for (let i = n-1; nonZeros >= 0; i--){
            arr[nonZeros--] = 0;  
        }
 } 

    moveElSingleArr(arr);
    console.log(arr)

//  function moveElemDoubleArr(arr) {
//      for (let i = 0; i < arr.length; i++){
//          moveElSingleArr(arr[i])
//      }
//  }

//  moveElemDoubleArr(arr)
//  console.log(arr)

// console.log("right", arr.reverse())
console.log("initialArr", initialArr)