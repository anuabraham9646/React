import React, { Component } from 'react'
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import Counter from './Counter';
class ParentRenderProps extends Component {
    render() {
        return (
            <div>
                <Counter 
                    render={ (count,inc) => 
                    <ClickCounter count={count} inc= {inc}/>}
                />
                <Counter 
                    render={ (count,inc) => 
                    <HoverCounter count={count} inc= {inc}/>}
                />
            </div>
        )
}
}

export default ParentRenderProps
