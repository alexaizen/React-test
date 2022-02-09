import React from "react";
import NavBar from "../NavBar";
import MainAreaMedium from "../UI/MainAreaMedium";
import "./Welcome.css";

function Welcome(props) {
  return (
    <React.Fragment>
      <NavBar>
        <h2>Welcome</h2>
      </NavBar>
      <MainAreaMedium>
        We are glad that you are using our application, please create account
        and log In :)
      </MainAreaMedium>
    </React.Fragment>
  );
}

export default Welcome;
