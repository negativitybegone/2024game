let arr = [10,2,46,67,74,46,68,88]

//1. double each elem in arr
for (let i = 0; i < arr.length; i++) {
    arr[i]=arr[i]*2
}
console.log(arr)

//2. sum of elem
let Sum=0
for (let i = 0; i < arr.length; i++) {
    Sum+=arr[i]
}
console.log(Sum)

//3. replace all el by 5
let newEl=5
for (let i = 0; i < arr.length; i++) {
    arr[i]=newEl;
}
console.log(arr)

//4. replace all items by 1
let doubleArr=[
    [2,3,42,5], 
    [3,5,6,9]
]
let newElem=1
for(var i = 0; i < doubleArr.length; i++){
    for(var j = 0; j < doubleArr[i].length; j++){
        doubleArr[i][j]=newElem;;
    }
}
console.log(doubleArr)
