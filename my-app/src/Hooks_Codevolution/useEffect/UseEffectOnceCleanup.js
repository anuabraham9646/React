import React , {useState,useEffect} from 'react'

function UseEffectOnceCleanup() {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    const logMouseMovement = e=>{
        console.log('mouse setter')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(
        () =>{
            console.log('use effect called')
            window.addEventListener('mousemove',logMouseMovement)
            return(
                () =>{
                    console.log('Removed')
                    window.removeEventListener('mousemove',logMouseMovement)
                }
            )
        },[]
        
    )
    /*
    even after this useEffect being executed once the value of X &  Y changes thatis because 
    addEventListener is global scope so doesnt matter  if we use ffect the listener is here to stay
    and we just need it once
    /*
        In this scenario we are not passing the X or Y because we are not using those values for side effect
        even tho the values will be modified and will be seen in ui but the side effect is not performed
        we just want it to be executed once for event listener
        */
    return (
        <div>
            X ={X} Y ={Y}
        </div>
    )
}

export default UseEffectOnceCleanup
