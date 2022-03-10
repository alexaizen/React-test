import React from "react";

import "./Message.css";

function Message(props) {
  return (
    <React.Fragment>
      <li className="message-container">
        <div className="message-header">
          <img src={props.avatar} width="36px" alt="mesage sender avatar" />
          <h5>{props.name}</h5>
        </div>

        <p>{props.message}</p>
      </li>
    </React.Fragment>
  );
}

export default Message;
