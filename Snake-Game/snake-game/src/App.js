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
    direction: 'right',
    speed: 200,
    food: getRandom(),
    snakeBody: [
      [0,0],
      [3, 0]
    ]
  }

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed)
    document.onkeydown = this.handleKey
  }

  handleKey = e => {
    e = e || window.event
    switch(e.keyCode) {
      case 38:
        this.setState({direction: 'up'})
        break;
      case 40:
        this.setState({direction:'down'})
        break;
      case 37: 
        this.setState({direction:'left'})
        break;
      case 39:
        this.setState({direction:'right'})
        break;
      default:
        break;
    }
  }

  moveSnake = () => {
    let body = [...this.state.snakeBody]
    let head = body[body.length - 1]

    switch(this.state.direction) {
      case 'right':
        head = [head[0] + 3, head[1]]
        break
      case 'left':
        head = [head[0] - 3, head[1]]
        break
      case 'down':
        head = [head[0], head[1] + 3]
        break
      case 'up':
        head = [head[0], head[1] - 3]
        break
      default:
        break
    }
    body.push(head)
    body.shift()
    this.setState({
      snakeBody: body
    })
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
