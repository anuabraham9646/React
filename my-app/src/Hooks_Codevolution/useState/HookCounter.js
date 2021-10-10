import React, {useState} from 'react'

function HookCounter() {
    const [count, incrementCount] = useState(0)
    return (<div>
        <p>Count : {count}</p>
        <button onClick={() => incrementCount(count + 1)}>Increment 1</button>
        <button onClick={() => incrementCount(count - 1)}>Decrement 1</button>
        <button onClick={() => incrementCount(0)}>Reset</button>
    </div>
    )
}

export default HookCounter