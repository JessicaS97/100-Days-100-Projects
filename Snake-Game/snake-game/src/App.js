import React, {Component} from 'react';
import './App.css';
import Snake from './Snake'
import Food from './Food'

class App extends Component {

  state = {
    food: [6,8],
    snakeBody: [
      [0,0],
      [3, 0]
    ]
  }

  render() {
    return (
      <div className="game-grid">
        <Snake snakeBody={this.state.snakeBody}/>
        <Food body={this.state.food}/>
      </div>
    );
  }
}

export default App;
