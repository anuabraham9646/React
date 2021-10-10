import React from 'react'

const withCounter = (OriginalComponent,incrementVal) =>{
    
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count : 0
            }
        }

        incrementCount = () =>{
            this.setState( prevstate =>{
                return {count : prevstate.count+ incrementVal}
            }
            )
        }
        
        render() {
            return (
                <OriginalComponent
                    count={this.state.count}
                    increment={this.incrementCount}
                    {...this.props}
                />
            )
        }
    }
    return NewComponent
    
}
export default withCounter