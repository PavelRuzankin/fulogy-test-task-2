import React from "react";
import {styleToggle} from "../pure/styleToggle"

const PresentSelector = ({images, current, selectCurrentImage}) => {
    return (
        <div onClick={selectCurrentImage} className="presentation__selector">
            <div className="presentation__buttons">
                {images.map((_, i) => {
                    return <div key={i} data-id={i} data-type="select" 
                    className={styleToggle("presentation__button_active", (i === current), "presentation__button")}></div>
                })}
            </div>
        </div>
    )
}

export default PresentSelector