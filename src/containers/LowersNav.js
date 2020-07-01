import React from "react"
import {styleToggle} from "../pure/styleToggle"

class LowerNav extends React.Component{
    state = {current: 5}

    setCurrent = (event) => {
        const el = event.target.closest("[data-type='link']")
        if(el) this.setState({current: +el.dataset.id})
    }

    renderLinks = () => {
        const {current} = this.state
        return this.props.nav.map((link, index) => {
            return (
                <div key={index} data-type="link" data-id={index} className={styleToggle("lower-nav__body_active", (index === current), "lower-nav__body")}>
                    {link}
                    <div className={styleToggle("lower-nav__marker_next", (index > current), "lower-nav__marker")}></div>
                </div>
            )
        })
    }
    render(){
        return (
            <nav onClick={this.setCurrent} className="lower-nav">
                <div className="lower-nav__wrapper">
                    {this.renderLinks()}
                </div>
            </nav>
        )
    }
}

export default LowerNav