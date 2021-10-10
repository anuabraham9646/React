import { useReducer } from "react"
import React from 'react'

const initialCount={
    firstCounter :0,
    secondCounter:0
}
const reducer =(curState,action) =>{
    switch(action.type){
        case 'increment':
            return { ...curState, firstCounter : curState.firstCounter+action.val}
        case 'decrement':
            return { ...curState, firstCounter : curState.firstCounter-action.val}
        case 'reset':
            return { ...curState, firstCounter : initialCount.firstCounter}

        case 'increment2':
            return { ...curState, secondCounter : curState.secondCounter+action.val}
        case 'decrement2':
            return { ...curState, secondCounter : curState.secondCounter-action.val}
        case 'reset2':
            return { ...curState, secondCounter : initialCount.secondCounter}
        default:
            return curState

    }

}
function ComplexStateAction() {
    const[count,dispatch]=useReducer(reducer,initialCount)
    return (
        
        <div>
            <h2>{count.firstCounter}</h2>
            <button onClick= {() => dispatch({type:'increment' ,val : 1})}>increment</button>
            <button onClick= {() => dispatch({type:'decrement',val : 1})}>decrement</button>
            <button onClick= {() => dispatch({type:'reset'})}>reset</button>

            <h2>{count.secondCounter}</h2>
            <button onClick= {() => dispatch({type:'increment2' ,val : 1})}>increment2</button>
            <button onClick= {() => dispatch({type:'decrement2',val : 1})}>decrement2</button>
            <button onClick= {() => dispatch({type:'reset2'})}>reset2</button>
            
        </div>
    )
}

export default ComplexStateAction
