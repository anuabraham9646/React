import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError : false
        }
    }
    

static getDerivedStateFromError(error){
    return{
        hasError:true
    }

}

    render() {
        if(this.state.hasError){
            return (
                <p>Something wrong</p>
            )
        }
        return this.props.children;
        
    }
}

export default ErrorBoundary
