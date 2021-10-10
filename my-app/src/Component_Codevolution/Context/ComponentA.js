import React, { Component } from 'react'
import {UserConsumer} from './userContext'
export class ComponentA extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        userName => {
                            return <div>Hello {userName}</div>
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default ComponentA
