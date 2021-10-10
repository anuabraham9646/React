import React ,{useState,useMemo} from 'react'

function UseMemo() {
    const [count1,setcount1]=useState(0)
    const [count2,setcount2]=useState(0)
    const isEven= useMemo( () =>{
        let i=0
        while(i<200000000)i++
        return count1%2===0

    },[count1])
    return (
        <div>
            <div>
            <button onClick={()=>setcount1(count1+1)}>Count 1- {count1}</button>
            {isEven ? 'Even':'Odd'}
            </div>

            <div>
            <button onClick={()=>setcount2(count2+1)}>Count 2- {count2}</button>
            
            </div>
            </div>
    )
}

export default UseMemo
