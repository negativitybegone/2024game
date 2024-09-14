document.addEventListener('DOMContentLoaded', () => {
    console.log (document.getElementById('field'))
    const fieldDOM=document.getElementById('field')
    const field=[
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ]
    
        defineTwo(field)
        defineTwo(field)

        defineField(field, fieldDOM)    

        console.log(field)
});

document.onkeydown=function(event){
    console.log(event.keyCode)
    switch (event.keyCode) {
        case 37:
        
        break;
        case 39:
        
        break;
        case 38:
    
        break;
        case 40:
    
        break;
        default:
        break;
  }
}

function getRandomIndex(value) {
    const randomIndex = Math.ceil(Math.random() * value);
    return randomIndex
}

function defineTwo(field) {
    const randomIndexI = getRandomIndex(field[0].length-1);
    const randomIndexJ = getRandomIndex(field[0].length-1);
    if (field[randomIndexI][randomIndexJ]!=2){
        field[randomIndexI][randomIndexJ]=2
    } else {
        defineTwo()
    } 
    console.log(randomIndexI, randomIndexJ)
}

function defineField(field, fieldDOM){
    for (let i=0; i<field.length; i++){
        for (let j=0; j<field[i].length; j++){
            const tileValue=field[i][j]
            const tile = document.createElement('div');
            tile.className=`tile tile-${tileValue}`
            tile.innerHTML=tileValue ? tileValue.toString() : ''
            fieldDOM.appendChild(tile)
            console.log(tileValue)
        }
    }
}