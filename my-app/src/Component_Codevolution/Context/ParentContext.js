import React, { Component } from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import {UserProvider} from './userContext'
class ParentCOntext extends Component {
    render() {
        return (
            <div>
                <UserProvider value="Anu Abraham">
                    <ComponentA/>
                </UserProvider>
                <ComponentB/>
            </div>
        )
    }
}

export default ParentCOntext
