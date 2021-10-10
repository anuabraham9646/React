import React,{useReducer,useEffect} from 'react'
import axios from 'axios'
const initial ={
    loading :true,
    post:{},
    error:''
}

const reduce= (curState,action)=>{

    switch(action.type){
        case 'FETCH_POST':
            return {
            loading:false,
            post: action.payload,
            error:''
        }
        case 'FETCH_ERROR':
            return {
            loading:false,
            post: {},
            error:'Something Went Wrong'
        }

        default:
            return curState

    }
}
function FetchData() {

    const [state,dispatch]=useReducer(reduce,initial)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(res =>{
            
            dispatch({type :'FETCH_POST', payload:res.data})
        })
        .catch(error =>{
            dispatch({type :'FETCH_ERROR'})
        })

    },[])

    return (
        <div>
            {state.loading? 'Loading' :JSON.stringify(state.post)}
            {state.error? state.error : null}
        </div>
    )
}

export default FetchData
