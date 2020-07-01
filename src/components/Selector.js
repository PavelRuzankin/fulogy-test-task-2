import React from "react"
import LightType from "../UI/LightType"

class Selector extends React.Component{
    renderImage = () => this.props.images.map((image, index) => <LightType id={index} key={index} image={image} isCurrent={this.props.current === index}/>)
    render(){
        return (
            <div onClick={this.props.selectCurrentImage} className="dashboard__selector">
                {this.renderImage()}
            </div>
        )
    }
}

export default Selector