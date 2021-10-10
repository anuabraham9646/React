import React from 'react'
import UseEffectCleanup from './UseEffectCleanup'
import UseEffectConditionally from './UseEffectConditionally'
import UseEffectFetchApi from './UseEffectFetchApi'
import UseEffectImportant from './UseEffectImportant'
import UseEffectNonCleanup from './UseEffectNonCleanup'
import UseEffectOnceCleanup from './UseEffectOnceCleanup'

function ParentUseEffect() {
    return (
        <div>
           {/*<UseEffectNonCleanup/>
            <UseEffectConditionally/>
            <UseEffectOnceCleanup/>
            <UseEffectCleanup/>
            <UseEffectImportant/>*/}
            <UseEffectFetchApi/>
        </div>
    )
}

export default ParentUseEffect
