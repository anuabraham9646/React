import React , {useState,useEffect} from 'react'

function UseEffectConditionally() {
    const [count, incrementCount] = useState(0)
    const [name, updateName] = useState('')
    useEffect((
        ()=> {
            console.log('Updated the doc title')
            document.title=`You've clicked ${count} times`
        }
    ),[count])
    //in this scenario if we dont give the dependency array then even if the name changes the re render occurs
    //by giving array value we implicitly say only if there is change in count then re render the useEffect
    return (
        <div>
            <input type="text" value= {name} onChange={e => updateName(e.target.value)}></input>
            <button onClick={() => incrementCount(count + 1)}>Counter {count}</button>
            <p>{name}</p>
        </div>
    )
}

export default UseEffectConditionally
