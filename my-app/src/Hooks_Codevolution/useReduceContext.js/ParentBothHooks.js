import React, {useReducer} from 'react'
import CompA from './CompA'
import CompB from './CompB'
import CompC from './CompC'

export const ReducerContext= React.createContext()

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
function ParentBothHooks() {

    const [count,dispatch] = useReducer(reducer, initialCount)
    return (
        <div>
            <h2>{count}</h2>
            <ReducerContext.Provider value={{countState:count, countDispatch:dispatch}}>
                <CompA/>
                <CompB/>
                <CompC/>
            </ReducerContext.Provider>
            
        </div>
    )
}

export default ParentBothHooks
