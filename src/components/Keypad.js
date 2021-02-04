import React from 'react'

class Keypad extends React.Component {

  consoleOutput = (event) => {
    console.log("Entering password...");
  }

  render() {
    return (
      <input type="password" onKeyUp={this.consoleOutput}></input>
    )
  }
}

export default Keypad