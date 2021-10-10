import React, { Component } from 'react'

class ClickCounter extends Component {
    render() {
        return ( <button onClick= {this.props.inc}> Clicked {this.props.count} times </button>)
    }
}

export default ClickCounter
