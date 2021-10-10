import React, {useState} from 'react'

function HookObject() {
    const [name,updateName]= useState({firstName :'',lastName :''})
    return (
        <form>
            <input 
                type="text"
                placeholder="firstname"
                value={name.firstName}
                onChange= {e => updateName({...name, firstName: e.target.value})}
            />
            <input 
                type="text"
                placeholder="lastname"
                value={name.lastName}
                onChange= {e => updateName({...name, lastName: e.target.value})}
            />
            <p>Hi {name.firstName} {name.lastName}</p>
        </form>
    )
}

export default HookObject
