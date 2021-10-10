import React from 'react'
import HoverCounter from './HoverCounter';
import ClickCounter from './ClickCounter';
function ParentHOC() {
    return (
        <div>
            <ClickCounter name="Anu"/>
            <HoverCounter/>
        </div>
    )
}

export default ParentHOC
