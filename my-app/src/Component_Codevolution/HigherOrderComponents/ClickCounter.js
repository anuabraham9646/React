import React, { Component } from 'react'
import withCounter from './withCounter';
export class ClickCounter extends Component {
    render() {
        const {count,increment,name}=this.props
        return (
            
            <button onClick = {increment}>{name} Clicked {count} times</button>
            
        )
    }
}

export default withCounter(ClickCounter,2)
