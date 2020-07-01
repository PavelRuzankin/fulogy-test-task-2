import React from "react"
import Presentation from "../components/Presentation"
import Dashboard from "../components/Dashboard"
import Message from "./Message"


class Main extends React.Component{
    state = {
        currentImage: 0,
        toggleMessage: false
    }

    getImages = () => this.props.images.map(img => this.props.url + img + ".jpg")

    selectCurrentImage = (event) => {
        const id = event.target.closest("[data-type='select']")
        if(id) this.setState({currentImage: +id.dataset.id})
      }

      toggleMessageHandler = (toggleMessage) => this.setState({toggleMessage}) 
    render(){
        return (
            <main className={"main"}>
                {this.state.toggleMessage && <Message toggleMessageHandler={this.toggleMessageHandler}/>}
                <Presentation current={this.state.currentImage} images={this.getImages()} selectCurrentImage={this.selectCurrentImage}/>
                <Dashboard toggleMessageHandler={this.toggleMessageHandler} selectCurrentImage={this.selectCurrentImage} current={this.state.currentImage} info={this.props.info} images={this.getImages()}/>
            </main>
        )
    }
}

export default Main