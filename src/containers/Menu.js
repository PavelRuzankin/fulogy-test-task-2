import React from "react"
import MenuLink from "../UI/MenuLink"
import {Transition} from "react-transition-group"

const Menu = ({showMenu, links}) => {
    const renderLinks = () => links.map(link => <MenuLink key={link} title={link}/>)


    return (
        <Transition timeout={300} in={showMenu}> 
            {state => (
                    <nav className={`menu menu_${state}` }>
                        <ul className="menu__list">
                            {renderLinks()}
                        </ul>
                    </nav>
                )}
        </Transition>
    )
}

export default Menu