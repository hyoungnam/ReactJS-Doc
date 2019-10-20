
import React, { Component } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date : new Date()};
   
  }
  componentDidMount() {
    this.timer();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  timer() {
    setInterval(
      () => this.tick(),
      1000
    );
  }
  tick() {
    this.setState({
      date : new Date()
    });
  }
  
  render() {
    return (
      <div>
        <h3>Hello, world!</h3>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

export default Clock;