import React from "react";
import NavBar from "../NavBar";
import MainAreaMedium from "../UI/MainAreaMedium";
import "./Welcome.css";

function Welcome(props) {
  return (
    <React.Fragment>
      <NavBar><h3>Welcome</h3></NavBar>
      <MainAreaMedium>
        We are glad that you are using our application, please create account
        and log In :)
      </MainAreaMedium>
    </React.Fragment>
  );
}

export default Welcome;
