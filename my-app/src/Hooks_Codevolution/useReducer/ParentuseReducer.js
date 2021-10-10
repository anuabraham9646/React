import React from 'react'
import ComplexStateAction from './ComplexStateAction'
import FetchData from './FetchData'
import MultipleReducers from './MultipleReducers'
import SimpleCounterUseReducer from './SimpleCounterUseReducer'

function ParentuseReducer() {
    return (
        <div>
           {/* <SimpleCounterUseReducer/>
           <ComplexStateAction/>*/}
           <MultipleReducers/>
           <FetchData/>

        </div>
    )
}

export default ParentuseReducer
