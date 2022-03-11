import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { messagesActions } from "../store/index.js";

import "./Message.css";

function Message(props) {

  const dispatch = useDispatch();
  const previousSenderMsg = useSelector((state)=> state.messages.previousSender)
  const messageAligment = useSelector((state)=>state.messages.messageAligment) 
  const isSameSender = props.id === previousSenderMsg;
  // const aligmentSwitcher = function (sender) {
  //   if (sender === false) {dispatch(messagesActions.messageAligmentToggle())}
  // }
  useEffect(()=>{
    console.log("previous sender fetched from redux " + previousSenderMsg)
    console.log("current sender passed by props  " + props.id)
    console.log("check if previous sender from redux is equal to current sender passed by props " + isSameSender)
    console.log("message aligment fetched from props on start " + messageAligment)
    console.log("****************************************************")
    dispatch(messagesActions.previousSenderDisp(props.id))
  }, [])
  


  return (
    <React.Fragment>
      <li className={`message-container ${isSameSender ? "left" : "right"}`}>
        {!isSameSender && (<div className={`message-header ${isSameSender ? "left" : "right"}`}>
          <img src={props.avatar} width="36px" alt="mesage sender avatar" />
          <h5>{props.name}</h5>
        </div>)}

        <p>{props.message}</p>
      </li>
    </React.Fragment>
  );
}

export default Message;
