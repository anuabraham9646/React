import React, {useState} from 'react'

function HookArray2() {
    const [items,setItem]=useState([])
    let [val,updateValue]=useState('')

    const addItem = ()=>{
        setItem([
            ...items, {
                id:items.length+1,
                value: val
            }
        ])
        val= ''
    }
    const updateVal = e=>{
        updateValue(e.target.value)
    }

    return (
        <div>
            <input 
                type="text"
                value={val}
                onChange={e =>updateVal(e)}
                />
            <button onClick={addItem}>Add Item</button>

            <ul>
                {items.map(item =>(
                    <li key={item.id}> {item.value} </li>
                ))}
            </ul>
            
        </div>
    )
}

export default HookArray2
