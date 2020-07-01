import React from "react"

const getValue = (value) => {
    const words = {
        "true": "да",
        "false": "Нет"
    }
    if(typeof value === "boolean"){
        return words[value]
    }
    return value
}

const InfoLine = ({name, value, ico}) => {
    const classes = ["info__item"]
    if(ico) classes.push("info__item_m")
    return (
        <div className="info__line">
            <div className="info__key">{name}:</div>
            <div className={classes.join(' ')}><span>{getValue(value)}</span></div>
        </div>
    )
}

export default InfoLine