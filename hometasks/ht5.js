// output: [6,7,8,11,23,,5,0,0, 0, 0,0,0,0,0]
const initialArr = [0,6,7,0,8,0,0,11,23,0,0,0,0,5];
// const arr = initialArr.slice()

function moveElsToLeft(arr) {
    let n=arr.length;
    let k=0;
    for (let i = 0; i < n; i++){
        if (arr[i] != 0){
            arr[k++] = arr[i];
        }
    }
    for (let i = k; i < n; i++){
        arr[i] = 0;  
    }
} 
moveElsToLeft(initialArr)
console.log(initialArr)

function collapse(arr){
    // console.log('message', arr)
    for (let i=0; i<arr.length; i++){
        if(arr[i]===arr[i+1]){
            arr[i]=arr[i]*2;
            arr[i+1]=0;
        }
    }
}
collapse(initialArr)
moveElsToLeft(initialArr)
console.log(initialArr)

function moveElsToRight(arr) {
    let n=arr.length;
    let key=n-1;
    for (let i = n-1; i>=0; i--){
        if (arr[i] != 0){
        arr[key--] = arr[i];
        }
    }
    while(key >= 0){
        arr[key--] = 0;  
        // console.log(key)
    }
 } 

moveElsToRight(initialArr);
console.log(initialArr)

function collapseR(arr) {
    for (let i = arr.length-1; i >=0; i--) {
        if (arr[i]===arr[i-1]) {
                arr[i]=arr[i]*2;
                arr[i-1]=0;
        }
            // console.log(initialArr)
    }
}
collapseR(initialArr)
moveElsToRight(initialArr)
console.log(initialArr)

//  function moveElemDoubleArr(arr) {
//      for (let i = 0; i < arr.length; i++){
//          moveElSingleArr(arr[i])
//      }
//  }

//  moveElemDoubleArr(arr)
//  console.log(arr)

// console.log("right", arr.reverse())
console.log("initialArr", initialArr)