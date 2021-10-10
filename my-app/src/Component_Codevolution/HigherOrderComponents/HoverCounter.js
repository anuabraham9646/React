import React, { Component } from 'react'
import withCounter from './withCounter';
export class HoverCounter extends Component {
    render() {
        const {count,increment}=this.props
        return (
           <h2 onMouseOver={increment}> hovered {count} times</h2>
        )
    }
}

export default withCounter(HoverCounter,1)

