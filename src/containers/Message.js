import React from "react"

const Message = ({toggleMessageHandler}) => {
    return (
        <div className={"message"}>
            <div className={"message__body"}>
                <div onClick={() => toggleMessageHandler(false)} className="message__back">
                    <span className="material-icons">
                        keyboard_arrow_left
                    </span>
                    <span>Вернуться</span>
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ex quos tempore reprehenderit veniam asperiores, hic quaerat voluptatibus, dignissimos aperiam nisi corrupti explicabo ab aut recusandae reiciendis maiores voluptatum illum.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ex quos tempore reprehenderit veniam asperiores, hic quaerat voluptatibus, dignissimos aperiam nisi corrupti explicabo ab aut recusandae reiciendis maiores voluptatum illum.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ex quos tempore reprehenderit veniam asperiores, hic quaerat voluptatibus, dignissimos aperiam nisi corrupti explicabo ab aut recusandae reiciendis maiores voluptatum illum.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ex quos tempore reprehenderit veniam asperiores, hic quaerat voluptatibus, dignissimos aperiam nisi corrupti explicabo ab aut recusandae reiciendis maiores voluptatum illum.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ex quos tempore reprehenderit veniam asperiores, hic quaerat voluptatibus, dignissimos aperiam nisi corrupti explicabo ab aut recusandae reiciendis maiores voluptatum illum.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ex quos tempore reprehenderit veniam asperiores, hic quaerat voluptatibus, dignissimos aperiam nisi corrupti explicabo ab aut recusandae reiciendis maiores voluptatum illum.
                </p>
            </div>
        </div>
    )
}

export default Message