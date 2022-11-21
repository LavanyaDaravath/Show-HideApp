// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isFirstName: false,
    isLastName: false,
  }

  firstName = () => {
    console.log(`click firstName`)
    this.setState(preState => ({isFirstName: !preState.isFirstName}))
  }

  lastName = () => {
    console.log(`click lastName`)
    this.setState(preState => ({isLastName: !preState.isLastName}))
  }

  render() {
    const {isLastName, isFirstName} = this.state

    return (
      <div className="bgContainer">
        <h1 className="heading">Show/Hide</h1>
        <div className="card-container">
          <div className="container">
            <button type="button" className="button" onClick={this.firstName}>
              Show/Hide FirstName
            </button>
            {isFirstName && <p className="text">Joe</p>}
          </div>
          <div className="container">
            <button type="button" className="button" onClick={this.lastName}>
              Show/Hide LastName
            </button>
            {isLastName && <p className="text">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
