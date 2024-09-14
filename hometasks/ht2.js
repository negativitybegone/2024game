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
        
    }
}
function getRandomIndex(value) {
    const randomIndex = Math.ceil(Math.random() * value);
    return randomIndex
}

function defineTwo() {
    const randomIndexI = getRandomIndex(field[0].length-1);
    const randomIndexJ = getRandomIndex(field[0].length-1);
    field[randomIndexI][randomIndexJ]!=2?field[randomIndexI][randomIndexJ]=2:defineTwo()
    console.log(randomIndexI, randomIndexJ)
    }
    defineTwo()
    defineTwo()   