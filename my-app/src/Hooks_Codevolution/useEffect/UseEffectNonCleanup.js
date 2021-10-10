import React , {useState,useEffect} from 'react'

function UseEffectNonCleanup() {
    const [count, incrementCount] = useState(0)
    useEffect((
        ()=> {
            document.title=`You've clicked ${count} times`
        }
    ))
    return (
        <div>
            <button onClick={() => incrementCount(count + 1)}>Counter {count}</button>
        </div>
    )
}

export default UseEffectNonCleanup
