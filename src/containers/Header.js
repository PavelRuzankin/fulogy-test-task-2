import React from "react"
import { styleToggle } from "../pure/styleToggle"


class Header extends React.Component{
    render(){
        const {showMenu} = this.props
        return (
            <header className="header">
                <div className="header__row">
                    <div className="header__logo ibg"></div>
                    <div className="header__actions">
                        <div className="header__card">
                        <span className="material-icons">
                            shopping_cart
                        </span>
                        </div>
                        <div onClick={this.props.toggle} className={styleToggle("open", showMenu, "header__menu-btn", "icon-menu")}>
                        <span></span>
                        <span></span>
                        <span></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header