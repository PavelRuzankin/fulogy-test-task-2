import React from 'react'
import PresentSelector from "./PresentSelector"
import { Transition } from 'react-transition-group';
class Slider extends React.Component {
    state = {
        direction: "",
        bg: {},
        timeout: 500
    }

    transform(prevCurrent, direction){
        this.setBg(prevCurrent)
            this.setState({direction})
            setTimeout(() => {
                this.setBg(this.props.current)
                this.setState({direction: ""})
            }, this.state.timeout)
    }

    componentDidUpdate(prevProps){
        if(prevProps.current > this.props.current){
            this.transform(prevProps.current, "right")

        }else if(prevProps.current < this.props.current){
            this.transform(prevProps.current, "left")
        }
    }

    componentDidMount(){
        this.setBg(this.props.current)
    }
    setBg = (index) => {
        const bg = {}
        bg.backgroundImage = `url(${this.props.images[index]})`
        this.setState({bg})
    }

    getBg = (index) => {
        const bg = {}
        bg.backgroundImage = `url(${this.props.images[index]})`
        return bg
    }

    render(){
        const {direction} = this.state
        return (
            <div className="presentation__slider">
                <Transition in={!!direction} timeout={500}>
                    {state => {
                       return (
                        <>
                            <div style={this.state.bg} className={`presentation__image ${state}-${direction} ibg`}></div>
                            <div style={this.getBg(this.props.current)} className={`presentation__next-image ${state}-${direction}`}></div>
                        </>
                       )
                    }}
                </Transition>
                <PresentSelector selectCurrentImage={this.props.selectCurrentImage} images={this.props.images} current={this.props.current}/>
            </div>
        )
    }
}

export default Slider