import React from "react"
import "./Message.css"

function Message (props) {

    return (
        <React.Fragment>
            <div className="message-container" >
                <span className="message-header" >
                    <img src={props.avatar} width="36px"/>
                    <h5>{props.name}</h5>
                </span>
                <p>{props.message}</p></div>

        </React.Fragment>
    )
}

export default Message;