import React , {useState,useEffect} from 'react'

function UseEffectImportant() {
    const [count, incrementCount] = useState(0)
    const tick=()=>{
        console.log('tick')
        incrementCount((prev)=>prev+1)
    }
    useEffect(()=>{
        console.log('effect')
            const interval = setInterval(tick,1000)
        return ()=>{
            console.log('remove')
            clearInterval(interval)
        }},[]
    )
    return (
        <div>
            {count}
        </div>
    )
}

export default UseEffectImportant
