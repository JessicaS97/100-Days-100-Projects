import React, {Component} from 'react';
import './App.css';
import Snake from './Snake'
import Food from './Food'

class App extends Component {

  state = {
    snakeBody: [
      [0,0],
      [3, 0]
    ]
  }

  render() {
    return (
      <div className="game-grid">
        <Snake snakeBody={this.state.snakeBody}/>
      </div>
    );
  }
}

export default App;
