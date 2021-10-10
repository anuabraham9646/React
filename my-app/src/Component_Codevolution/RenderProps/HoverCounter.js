import React, { Component } from 'react'

class HoverCounter extends Component {
    render() {
        const{count,inc}=this.props
        return (
            <p onMouseOver= {inc}> Hovered {count} times</p>
        )
    }
}

export default HoverCounter
