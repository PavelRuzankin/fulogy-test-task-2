import React from "react"
import { Transition } from "react-transition-group"

class Image extends React.Component{
    state = {
        show: false
    }

    componentDidMount(){
        this.setState({show: true})
    }
    render(){
        return (
            <Transition timeout={500} in={this.state.show}>
                {state => (
                    <div style={this.props.bg} className={`presentation__image ibg ${state}`}></div>
                )}
            </Transition>
        )
    }
}

export default Image