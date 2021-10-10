import { useReducer } from "react"
import React from 'react'

const initialCount=0
const reducer =(curState,action) =>{
    switch(action){
        case 'increment':
            return curState+1
        case 'decrement':
            return curState-1
        case 'reset':
            return initialCount
        default:
            return curState

    }

}
function SimpleCounterUseReducer() {
    const[count,dispatch]=useReducer(reducer,initialCount)
    return (
        
        <div>
            <h2>{count}</h2>
            <button onClick= {() => dispatch('increment')}>increment</button>
            <button onClick= {() => dispatch('decrement')}>decrement</button>
            <button onClick= {() => dispatch('reset')}>reset</button>
            
        </div>
    )
}

export default SimpleCounterUseReducer
