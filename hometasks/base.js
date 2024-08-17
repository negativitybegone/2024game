field=[
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
]
for (let i=0; i<field.length; i++){
    for (let j=0; j<field[i].length; j++){
        tileValue=field[i][j]
        tile = document.createElement('div');
        tile.className=`tile tile-${tileValue}`
        tile.innerHTML=tileValue?tileValue: ''
        console.log(tileValue)
        function getRandomElement(field) {
            randomIndex = Math.floor(Math.random() * field[i].length);
            randomElement=randomIndex
            return randomElement
        }
    }
}
randomItem = getRandomElement(field);
console.log(randomItem)

let min = 0;
let max = 15;   
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

