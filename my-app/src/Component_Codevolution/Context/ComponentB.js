import React, { Component } from 'react'
import UserContext from './userContext'

export class ComponentB extends Component {
    render() {
        return (
            <p>From Component B using ContextType we get {this.context}</p>
        )
    }
}
ComponentB.contextType=UserContext
export default ComponentB
