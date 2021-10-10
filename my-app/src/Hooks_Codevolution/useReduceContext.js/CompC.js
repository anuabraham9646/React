import React, { useContext } from 'react'
import { ReducerContext } from './ParentBothHooks'



function CompC() {
    const context = useContext(ReducerContext)
    return (
        <div>
            Component C: <button onClick= {() => context.countDispatch('increment')}>increment</button>
            <button onClick= {() => context.countDispatch('decrement')}>decrement</button>
            <button onClick= {() => context.countDispatch('reset')}>reset</button>
        </div>
    )
}

export default CompC
