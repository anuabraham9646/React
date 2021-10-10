import React from 'react'
import CompB from './CompB'

export const UserContext=React.createContext()
export const ChannelContext=React.createContext()
function ParentUseContext() {
    return (
        <div>
            <UserContext.Provider value={'Anu Abraham'}>
                <ChannelContext.Provider value={'Codevolution'}>
                    <CompB/>
                </ChannelContext.Provider>
            </UserContext.Provider>
            
        </div>
    )
}

export default ParentUseContext
