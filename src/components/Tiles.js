




// function scrambleTiles() {
//     //loop 100 times
//     //switch out the blank tile with a random neighbor
//     //find blankTile, find a neighboring tile, attempt a swap
//     //use canSwapTile to make valid moves

//     for (var i = 0; i < 100; i++){
//         var blankTile = null;
//         var blankTilePos = 0;
//         var targetTile = null; 
//         for (var j = 0; j < tilesArray.length; j++) {
//             if(tilesArray[j].isBlankTile){
//                 blankTile = tilesArray [j];
//                 blankTilePos = j;
//                 break;
//             }
//         }
//         //target tile should be +/- 1 to row or col, random between 0-15??
//         targetTile = getRandomAdjacentTile(blankTile, blankTilePos, tilesArray);
//         if(targetTile != null){
//             swapTiles(blankTile, targetTile);
//         }
//     }
// }
// function getRandomAdjacentTile(tileObj, tilePos, tilesArray){
//     let potentialTiles = [];

//     if (potentialTiles.lenght === 0){
//         return null; 
//     }
//     return potentialTiles[Math.random() * potentialTiles.lenght];
// }

// scrambleTiles();

