// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'DARK'}

  toLight = () => {
    this.setState({mode: 'LIGHT'})
  }

  toDark = () => {
    this.setState({mode: 'DARK'})
  }

  render() {
    const {mode} = this.state

    if (mode === 'DARK') {
      return (
        <div className="bg-container">
          <div className="dark-card">
            <h1 className="dark-title">Click To Change Mode</h1>
            <button
              type="button"
              className="dark-button"
              onClick={this.toLight}
            >
              Light Mode
            </button>
          </div>
        </div>
      )
    }
    return (
      <div className="bg-container">
        <div className="light-card">
          <h1 className="light-title">Click To Change Mode</h1>
          <button type="button" className="light-button" onClick={this.toDark}>
            Dark Mode
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
