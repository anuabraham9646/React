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
function MultipleReducers() {
    const[countOne,dispatch1]=useReducer(reducer,initialCount)
    const[countTwo,dispatch2]=useReducer(reducer,initialCount)
    return (
        
        <div>
            <h2>{countOne}</h2>
            <button onClick= {() => dispatch1('increment')}>increment</button>
            <button onClick= {() => dispatch1('decrement')}>decrement</button>
            <button onClick= {() => dispatch1('reset')}>reset</button>

            <h2>{countTwo}</h2>
            <button onClick= {() => dispatch2('increment')}>increment</button>
            <button onClick= {() => dispatch2('decrement')}>decrement</button>
            <button onClick= {() => dispatch2('reset')}>reset</button>
            
        </div>
    )
}

export default MultipleReducers
