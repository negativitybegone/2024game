document.addEventListener('DOMContentLoaded', () => {
    console.log (document.getElementById('field'))
    const fieldDOM=document.getElementById('field')
    const field=[
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ]
    function getRandomIndex(value) {
        const randomIndex = Math.ceil(Math.random() * value);
        return randomIndex
    }
    function defineTwo() {
        const randomIndexI = getRandomIndex(field[0].length-1);
        const randomIndexJ = getRandomIndex(field[0].length-1);
        if (field[randomIndexI][randomIndexJ]!=2) 
        {
            field[randomIndexI][randomIndexJ]=2
        } else {
            defineTwo()
        } 
        console.log(randomIndexI, randomIndexJ)
    }
        defineTwo()
        defineTwo()    

    for (let i=0; i<field.length; i++){
        for (let j=0; j<field[i].length; j++){
            const tileValue=field[i][j]
            const tile = document.createElement('div');
            tile.className=`tile tile-${tileValue}`
            tile.innerHTML=tileValue?tileValue: ''
            fieldDOM.appendChild(tile)
            console.log(tileValue)
        }
    }
});
