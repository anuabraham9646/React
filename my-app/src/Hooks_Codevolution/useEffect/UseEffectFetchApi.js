import axios from 'axios'
import React , {useState,useEffect} from 'react'

function UseEffectFetchApi() {
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [idFromButton,setIdFromButton]=useState(1)
    useEffect(()=>{
        console.log('effect')
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(res =>{
            console.log(res)
            setPost(res.data)
        })
    },[idFromButton])
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}></input>
            <button onClick={e=> setIdFromButton(id)}>Fetch Post</button>
            <ul>
                
                    <li key={id}>{post.title}</li>
            </ul>
        </div>
    )
}

export default UseEffectFetchApi
