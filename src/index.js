import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./scss/index.scss"

const iconMenu = document.querySelector(".icon-menu")
const menu = document.querySelector(".menu")

function toggle(){
    const classes = [...iconMenu.classList]
    if(classes.includes("open")) {
        iconMenu.classList.remove("open")
        menu.classList.remove("menu_show")
    }else{
        iconMenu.classList.add("open")
        menu.classList.add("menu_show")
    }
}

iconMenu.addEventListener("click",toggle)

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
