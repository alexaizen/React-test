import React from "react";
import "./chatBox.css";

function ChatBox() {
  const sendMessage = function (e) {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <div className="message-area">
        <div className="message-area-inner">
          <p>ds dfdsfds dgdfsdfd</p>
          <p>ds dfdsfds fgdgdfd</p>
          <p>ds dfdsfds fd</p>
          <p>ds dfdsdfdsgsfds fd</p>
          <p>ds dfdsfds hfghfghfghfghfghfghffdg hghfg hgh fd</p>
          <p>ds dfdsfds fgdgdfd</p>
          <p>ds dfdsfds fd</p>
          <p>ds dfdsdfdsgsfds fd</p>
          <p>ds dfdsfds hfghfghfghfghfghfghffdg hghfg hgh fd</p>
          <p>ds dfdsfds fd</p>
          <p>ds dfdsdfdsgsfds fd</p>
          <p>ds dfdsfds hfghfghfghfghfghfghffdg hghfg hgh fd</p>
          <p>ds dfdsfds fgdgdfd</p>
          <p>ds dfdsfds fd</p>
          <p>ds dfdsdfdsgsfds fd</p>
          <p>ds dfdsfds hfghfghfghfghfghfghffdg hghfg hgh fd</p>
        </div>
      </div>
      <form onSubmit={sendMessage}>
        <textarea className="text-area"></textarea>
        <button className="chat-btn" type="submit">
          SEND
        </button>
      </form>
    </React.Fragment>
  );
}

export default ChatBox;
