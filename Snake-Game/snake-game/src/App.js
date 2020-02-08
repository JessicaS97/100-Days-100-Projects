import React, {Component} from 'react';
import './App.css';
import Snake from './Snake'
import Food from './Food'

const getRandom = () => {
  let min = 1
  let max = 98
  let x = Math.floor((Math.random() * (max-min+1)+min)/3)*3
  let y = Math.floor((Math.random() * (max-min+1)+min)/3)*3
  return [x,y]
}

const initialState = {
  direction: 'right',
    speed: 200,
    food: getRandom(),
    points: 1,
    snakeBody: [
      [0,0],
      [3, 0]
    ]
}

class App extends Component {

  state = initialState

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed)
    document.onkeydown = this.handleKey
  }

  componentDidUpdate() {
    this.outOfBounds()
    this.checkIfCollapsed()
    this.checkIfEat()
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

  outOfBounds = () => {
    let head = this.state.snakeBody[this.state.snakeBody.length - 1]
    if (head[0] >= 99 || head[1] >= 99 || head[0] < 0 || head[1] < 0) {
      this.gameOver()
    }
  }

  checkIfEat = () => {
    let head = this.state.snakeBody[this.state.snakeBody.length - 1]
    let food = this.state.food
    if (head[0] === food[0] && head[1] === food[1]) {
      this.setState({
        food: getRandom()
      })
      this.increaseSpeed()
      this.enlargeSnake()
      this.increasePoints()
    }
  }

  enlargeSnake = () => {
    let newSnakeBody = [...this.state.snakeBody]
    newSnakeBody.unshift([])
    this.setState({
      snakeBody: newSnakeBody
    })
  }

  increaseSpeed = () => {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 10
      })
    }
  }

  checkIfCollapsed = () => {
    let snake = [...this.state.snakeBody]
    let head = snake[snake.length - 1]
    snake.pop()
    snake.forEach(body => {
      if (head[0] === body[0] && head[1] === body[1]) {
        this.gameOver()
      }
    })
  }

  increasePoints = () => {
    let points = document.getElementById('points')
    this.setState({
      points: this.state.points + 1
    })
    points.innerText = `Points: ${this.state.points}`
  }

  gameOver = () => {
    alert(`Game Over. Snake length is ${this.state.snakeBody.length}`)
    let maxStoredPoints = localStorage.getItem("maxStoredPoints");
    if (!maxStoredPoints || this.state.points > maxStoredPoints) {
      localStorage.setItem("maxStoredPoints", this.state.points)
    }
    let maxPoint = document.getElementById('maxPoint')
    maxPoint.innerText = `Max Points: ${maxStoredPoints}`
    this.setState(initialState)
  }

  render() {
    return (
      <div className="grid">
         <div className="game-grid">
            <Snake snakeBody={this.state.snakeBody}/>
            <Food body={this.state.food}/>
        </div>
        <div className="chart">
          <h2 id="points">Points: 0</h2>
          <h2 id="maxPoint">Max Points: 0</h2>  
        </div>
      </div>
    );
  }
}

export default App;
