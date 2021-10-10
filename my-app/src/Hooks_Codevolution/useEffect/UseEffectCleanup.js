import React , {useState} from 'react'
import UseEffectOnceCleanup from "./UseEffectOnceCleanup"
function UseEffectCleanup() {
    const [disp, setDisp] = useState(true)
    return (
        <div>
            <button onClick={()=>setDisp(!disp)}>Toggle display</button>
            {disp && <UseEffectOnceCleanup/>}
        </div>
    )
}

export default UseEffectCleanup
