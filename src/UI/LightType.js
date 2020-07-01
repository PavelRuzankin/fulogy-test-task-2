import React from "react"
import { styleToggle } from "../pure/styleToggle"

const placeholderImg = "https://www.avdisk.ru/uploads/images/s/w/e/sweet_pussy_pauline_change_positions_big_o_remix.jpg"

const LightType = ({image, isCurrent, id}) => {

    const getBg = () => {
        const style = {}
        style.backgroundImage = `url(${image || placeholderImg})`
        return style
    }
    return (
        <div style={getBg()} className={styleToggle("dashboard__light-type_active", isCurrent, "dashboard__light-type", "ibg")} data-id={id} data-type="select">
            {isCurrent &&
            <div className="dashboard__check">
                <span className="material-icons">check</span>
            </div>}
            <div className="dashboard__light-name">
                Тёплый
            </div>
        </div>
    )
}

export default LightType