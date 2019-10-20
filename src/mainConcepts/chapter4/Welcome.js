
import React from 'react'

//Always start component names with a capital letter.
function Welcome(props) {
  return <h3>Hello, {props.name}</h3>
}

class Welcome2 extends React.Component {
  render() {
    return (
    <div>
      <h3>Hello, {this.props.name}</h3>
    </div>
    )
  }
}

export default Welcome2