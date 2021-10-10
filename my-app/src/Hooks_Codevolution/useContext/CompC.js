import React,{useContext} from 'react'
import {UserContext,ChannelContext} from './ParentUseContext'

function CompC() {
    const user= useContext(UserContext)
    const channel= useContext(ChannelContext)
    return (
        <div>
            Hi {user} watched {channel}
        </div>
    )
}

export default CompC
