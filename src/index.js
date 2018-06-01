import React from 'react'
import ReactDOM from 'react-dom'
import Rose from './img/picture.jpg'
import './index.css'


console.log('hello webpack')
console.log('webpack live reload is working')
console.log('learn webpack')

class App extends React.Component {
  state = {
    reset: 'yes'
  }
  onClick = () => {
    this.setState({
      reset: this.state.reset === 'yes' ? 'no' : 'yes'
    })
  }
  render() {
    return (
      <div><img src={Rose} alt='玫瑰' className={this.state.reset === 'yes' ? 'flower' : 'flower flower--rotate'} onClick={this.onClick} /></div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))