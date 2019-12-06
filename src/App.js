import React from 'react';

class App extends React.Component {

  state = {
    count: 0
  }

  plus = () => {
    console.log("plus")
    // this.state.count += 1
    this.setState({ count: this.state.count+1 })
    // this.setState(current => ({ count: current.count +1 }))
  };
  minus = () => {
    console.log("minus")
    // this.state.count -= 1
    this.setState({ count: this.state.count-1 })
    // this.setState(current => ({ count: current.count -1 }))
  };
  render() {
    return (
    <div>
      <h1>I am a class component</h1>
      <h4>The number is { this.state.count }</h4>
      <button onClick={ this.plus }>plus</button>
      <button onClick = {this.minus }>minus</button>
    </div>
    )
  }
}

export default App;
