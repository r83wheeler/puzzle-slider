# Puzzle Slider App

Components: 

     # App: class item 

        State : 
            array that holds the tiles
            win - default to false / changes when the win conditinon is met (lock tiles when user wins)
            score - how many times the puzzle has been solved(stretch goal)
            blank position = current position of the blank space (3,3)


        Methods: 
            shuffle method - runs the onClickSwitch function a number (500) times
            
            switch - switches the clicked tile with the blank tile 
                    needs to be a valid move

                setState, switching the row, col and image of blank space with that 
                of the clicked tile and sets the blankPosition state of the row and col of the clicked tile

                function switch(index) {
                let row = arr[index].row
                let col = arr[index].col
                setState({
                    (arr[index].row, arr[index].col) row and col of clicked tile 
                    arr[15].row = row;
                    arr[15].col = col;
                    arr[index].row = arr[15].row
                    arr[index].col = arr[15].col
                    blankPosition = row and col of clicked tile
                })
                }
            canSwitch (helper Function for onClick) - check to see if the tile can be switched 
                        let canSwap = false

                        if tiles row = blankPosition row && if tile column is + or - 1 of blank position col, tile can be 
                            switched
                            if (clickedTile.row === blankPosition.row) {
                                if(Math.abs(blankPosition.col - clickedTile.col) == 1) {
                                    canSwap = true
                                }
                            }

                        if tiles col = blankPosition row && if tile column is + or - 1 of blank position, tile can be 
                            switched
                               if (clickedTile.col === blankPosition.col) {
                                if(Math.abs(blankPosition.row - clickedTile.row) == 1) {
                                    canSwap = true
                                }
                            }



            check for win - [helper function for the switch method] - check to 
                        see if win condition is met, if so, setState of win to true

            win condition - loop that goes through the array, looking to see if the row and col 
                            of tile = the winPosition

                            let winValue = false
                            for (let i = 0; i < arr.length; i++) {
                                if(arr[i].row === arr[i].winPosition[0] && arr[i].col == arr[i].winPosition[1]) {
                                    winValue = true
                                }
                                if (win = true) setState of win to true and set state of all objects so clickable is set to 
                                        false
                            }

            
            Generate tile - function that generates a tile and gives it properties using a loop that runs the number of tiles needed
                            and sets the position of the blank space 
                        
                        row - the current row of the tile 
                        col - current col of the tile 
                        isBlank
                        clickable - default to true (tells if the button can be clicked or not, changing on win condition)
                        winPosition - on start, win position is shown [row & col]
                        image - ??
                for loop - where i = 0, go through until i < square of board size (4x4), i++. use a loop/map 
                       
                        let tile ={
                            row = Math.floor(i / board size (4))
                            col = i % board size (4)
                            winPosition = row, col
                        isBlank = if (!i = square of board size (4x4) - 1{
                            blank = (false)
                            } else blank = true 
                            setState of array, putting the tile into the array
                        }
                        setState of blankPosition to the row = 3, col = 3 (3,3)
                    

        Render: 
            Header - title of the App 
            Instructions - tells the user how to play
            Board - the tiles in a grid (4x4) - runs the generate tile method
            Shuffle/reset button - runs the shuffle method
            Win - when the win condition is met, an action is created 
    
    # Tile: function item  (no constructor)

        Methods: 


        Render: 
            button
                onClick - runs the the switch method if clickable is set to true from App and then runs the checkWin function
                image - one (100px x 100px of 400px x 400px) part of the whole image ()

