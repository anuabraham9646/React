import React, {useState} from 'react'

function HookCounterPrev() {

    const initialVal=0
    const [count, incrementCount] = useState(initialVal)
    
    const incrementFive = ()=>{
        for(let i=0; i<5; i++){
            incrementCount(prev => prev+1)
        }

    }
    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={() => incrementCount(prev =>prev + 1)}>Increment 1</button>
            <button onClick={() => incrementCount(prev =>prev  - 1)}>Decrement 1</button>
            <button onClick={() => incrementCount(0)}>Reset</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default HookCounterPrev
