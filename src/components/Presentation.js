import React from "react"
import Slider from "./Slider"


class Presentation extends React.Component{
    render(){
        return (
            <section className={"presentation"}>
                <Slider images={this.props.images} current={this.props.current} selectCurrentImage={this.props.selectCurrentImage}/>
            </section>
        )
    }
}

export default Presentation