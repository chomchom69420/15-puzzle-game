nRows = 4;
nCols =4;
var rowBlank, colBlank;
var moves;

var gridArray =  [
    ['','','',''],
    ['','','',''],
    ['','','',''],
    ['','','','']
];

function updateBlank (r,c)
{
    rowBlank=r;
    colBlank=c;
}

function incrementMoves()
{
    moves++;
}

function checkWin ()
{
    let count=1;
    let flag=true;
    for(i=0;i<4;i++)
    {
        for(j=0;j<4;j++)
        {
            if(numberArray[i][j]!==count)
            {
                flag=false;
                break;
            }
            count++;

        }
        if(!flag)
        {
            break;
        }
    }
    if(flag)
    {
        alert("Congratulations, you have won in " + moves + " moves.");
        startGame();
        showGrid();
    }

}

function startGame() 
{
    moves=0;
    // getting all the grid items in the gridArray
    for(i=0;i<4;i++) 
    {  
        for(j=0;j<4;j++)
        {
            gridArray[i][j] = document.getElementById((i+1)+"_"+(j+1));
        }
    }

    //now will set up the array for storing the numbers

    var numberArray = [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16]
    ]

    //shuffling the array with fisher-yates modern shuffle 
    for(i=3;i>=0;i--)
    {   
        for(j=3;j>=0;j--)
        {
            var n,m, temp;
            //random number for the row
            n= Math.floor(Math.random() *(i));
            //random number for the column
            m= Math.floor(Math.random() * (j));

            temp = numberArray[i][j];
            numberArray[i][j]=numberArray[n][m];
            numberArray[n][m]=temp;

        }
    }
}



function showGrid()
{
    //print the shuffled array to the grid
    for(i=0;i<4;i++)
    {
        for(j=0;j<4;j++)
        {
            // if 16, then show blank__item
            if(numberArray[i][j]===16)
            {
                gridArray[i][j].innerHTML="&nbsp;";
                gridArray[i][j].classList.add("blank__item");
                updateBlank(i,j);
                continue;
            }
            gridArray[i][j].innerHTML = numberArray[i][j];
        }
    }

}

//starting game and showing grid for the first time
// getting all the grid items in the gridArray
for(i=0;i<4;i++) 
{  
    for(j=0;j<4;j++)
    {
        gridArray[i][j] = document.getElementById((i+1)+"_"+(j+1));
    }
}

//now will set up the array for storing the numbers

var numberArray = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

//shuffling the array with fisher-yates modern shuffle 
for(i=3;i>=0;i--)
{   
    for(j=3;j>=0;j--)
    {
        let n,m, temp;
        //random number for the row
        n= Math.floor(Math.random() *(i));
        //random number for the column
        m= Math.floor(Math.random() * (j));

        temp = numberArray[i][j];
        numberArray[i][j]=numberArray[n][m];
        numberArray[n][m]=temp;

    }
}

//print the shuffled array to the grid
for(i=0;i<4;i++)
{
    for(j=0;j<4;j++)
    {
        // if 16, then show blank__item
        if(numberArray[i][j]===16)
        {
            gridArray[i][j].innerHTML="&nbsp;";
            gridArray[i][j].classList.add('blank__item');
            updateBlank(i,j);
            continue;
        }
        console.log("YES!");
        // gridArray[i][j].className = gridArray[i][j].className.replace(/\bblank__item\b/g, "");
        gridArray[i][j].classList.add('coloured__item');
        gridArray[i][j].innerHTML = numberArray[i][j];
    }
}



//function to check if the tite is movable or not
function checkIfMovable (rowCoordinate, colCoordinate)
{
    // var rowShift=0, colShift=0;

    // //defining shifts based on direction
    // if(direction==="up")
    //     rowShift=-1;
    // else if(direction==="down")
    //     rowShift=1;
    // else if(direction==="left")
    //     colShift=-1;
    // else if(direction==="right")
    //     colShift=1;
    
    if((Math.abs(rowBlank-rowCoordinate)===1 || Math.abs(colBlank-colCoordinate)===1) && !(Math.abs(rowBlank-rowCoordinate)===1 && Math.abs(colBlank-colCoordinate)===1))
    {
        //the grid item is movable
        //now move the grid item

        incrementMoves();

        numberArray[rowBlank][colBlank]=numberArray[rowCoordinate][colCoordinate];
        numberArray[rowCoordinate][colCoordinate]=16;

        updateBlank(rowCoordinate,colCoordinate);

        showGrid();

        checkWin();
    }
    else {
        alert("This tile cannot be moved");
    }
}

gridArray[0][0].onclick = function ()
{
    checkIfMovable(0,0);
}
gridArray[0][1].onclick = function ()
{
    checkIfMovable(0,1);
}
gridArray[0][2].onclick = function ()
{
    checkIfMovable(0,2);
}
gridArray[0][3].onclick = function ()
{
    checkIfMovable(0,3);
}
gridArray[1][0].onclick = function ()
{
    checkIfMovable(1,0);
}
gridArray[1][1].onclick = function ()
{
    checkIfMovable(1,1);
}
gridArray[1][2].onclick = function ()
{
    checkIfMovable(1,2);
}
gridArray[1][3].onclick = function ()
{
    checkIfMovable(1,3);
}
gridArray[2][0].onclick = function ()
{
    checkIfMovable(2,0);
}
gridArray[2][1].onclick = function ()
{
    checkIfMovable(2,1);
}
gridArray[2][2].onclick = function ()
{
    checkIfMovable(2,2);
}
gridArray[2][3].onclick = function ()
{
    checkIfMovable(2,3);
}
gridArray[3][0].onclick = function ()
{
    checkIfMovable(3,0);
}
gridArray[3][1].onclick = function ()
{
    checkIfMovable(3,1);
}
gridArray[3][2].onclick = function ()
{
    checkIfMovable(3,2);
}
gridArray[3][3].onclick = function ()
{
    checkIfMovable(3,3);
}




