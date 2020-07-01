import React from "react"
import Info from "./Info"
import Selector from "./Selector"


class Dashboard extends React.Component{
    render(){
        return (
            <section className={"dashboard"}>
                <div className="dashboard__wrapper">

                    <Info info={this.props.info}/>

                    <div className="dashboard__title">
                        <span>Выберете цвет свечения</span>
                        <div onClick={() => this.props.toggleMessageHandler(true)} className="dashboard__info-btn">i</div>
                    </div>

                    <Selector selectCurrentImage={this.props.selectCurrentImage} images={this.props.images} current={this.props.current}/>
                </div>
            </section>
        )
    }
}

export default Dashboard