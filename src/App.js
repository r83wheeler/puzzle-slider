import React, { Component } from 'react';
import './App.css';
import Tiles from './components/Tiles';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      tilesArray: [],
    };
  }
  
  // init
  componentDidMount(){
      var row = 0;
      var col = 0;

      var gridSize = 4;
      var girdSizeSq = gridSize * gridSize;

      let tilesArray = [];

      for(var i = 0; i<girdSizeSq; i++) {
        tilesArray.push({
          row: Math.floor(i / gridSize),
          col: i % gridSize,
          currentPos: i,
          winPos: i,
          isBlankTile: !Boolean(i),
        });
      }
    this.setState({tilesArray: tilesArray});
  };  
   


render() {

  return (
    <>
      <div className="App container">
        <h1>Puzzle Sider Game</h1>
        <div className="row">
        {this.state.tilesArray.map((tileobj, i) => <div className="col-3 tile"> {i}</div>)}
        </div>
        
      


      </div>
    </>
  );
}
}

export default App;
