let arrhtfour = [0,6,7,0,8,0,0,11,23,0,0,0,0,5];

// zeros to the front 
 function moveElSingleArr(arrhtfour) {
    let n=arrhtfour.length;
    let nonZeros=n-1;
    for (let i = n-1; i>=0; i--){
        if (arrhtfour[i] != 0){
                arrhtfour[nonZeros--] = arrhtfour[i];
            }
        }
    for (let i = n-1; nonZeros >= 0; i--){
            arrhtfour[nonZeros--] = 0;  
        }
 } 
    moveElSingleArr(arrhtfour);
    console.log(arrhtfour)