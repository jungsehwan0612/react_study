import React from 'react';

class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 6000)
  }
  render() {
    
    return (
    <div>
      { this.state.isLoading ? "Loading..." : "We are ready" }
    </div>
    )
  }

}

export default App;
