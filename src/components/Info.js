import React from "react"
import InfoLine from "./InfoLine"


const Info = ({info}) => {
    const renderInfo =() => {
        return Object.entries(info).map(arr => {
            return <InfoLine key={arr[0]} name={arr[0]} value={arr[1]} ico={arr[0]==="Класс"}/>
        })
    }
    return (
        <div className="dashboard__info info">
            {renderInfo()}
        </div>
    )
}

export default Info