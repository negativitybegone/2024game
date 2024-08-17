document.addEventListener('DOMContentLoaded', () => {
    console.log (document.getElementById('field'))
    const fieldDOM=document.getElementById('field')
    const field=[
        [0,0,0,0],
        [0,1024,0,0],
        [0,0,0,0],
        [0,0,2,0]
    ]
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
    console.log(i,j)
});
