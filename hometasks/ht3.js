// output: [6,7,8,11,23,,5,0,0, 0, 0,0,0,0,0]
const arrhtthree = [0,6,7,0,8,0,0,11,23,0,0,0,0,5];

function moveEl(arrhtthree) {
    let n=arr.length;
    let nonZeros=0;
    for (let i = 0; i < n; i++){
        if (arrhtthree[i] != 0){
            arrhtthree[nonZeros++] = arrhtthree[i];
            // if(i!=nonZeros-1){
            //     arr[i]=0
            // }
        }
        // console.log(arr)
    }
    console.log(nonZeros, n)
    for (let i = nonZeros; i < n; i++){
        arrhtthree[i] = 0;  
    }
} 
moveEl(arrhtthree)
console.log(arrhtthree)


