import React, {Component} from 'react';
import './App.css';
import Snake from './Snake'
import Food from './Food'

const getRandom = () => {
  let min = 1
  let max = 98
  let x = Math.floor((Math.random() * (max-min+1)+min)/2)*2
  let y = Math.floor((Math.random() * (max-min+1)+min)/2)*2
  return [x,y]
}

class App extends Component {

  state = {
    food: getRandom(),
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
