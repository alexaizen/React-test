import React, { useState, useRef } from "react";

import "./LoginForm.css";

function LoginForm(props) {
  const userEmailLogin = useRef();
  const userPassLogin = useRef();

  const userNameReg = useRef();
  const userEmailReg = useRef();
  const userPassReg = useRef();

  const [registering, setRegistering] = useState(false);
  // const [ error, setError ] = useState(null);
  const authFormHandler = function () {
    setRegistering((prevState) => !prevState);
  };

  const pushUser = function (userEmail, userName, enteredPassReg) {
    fetch(
      "https://react-1bbaa-default-rtdb.europe-west1.firebasedatabase.app/users.json",
      {
        method: "POST",
        body: JSON.stringify({
          avatar:
            "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
          name: userName,
          email: userEmail,
          password: enteredPassReg,
          occupation: "not set",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          fb: "link not provided",
          insta: "profile not provided",
          li: "profile not provided",
          tasks: [
            {
              id: Math.random(),
              title: "Welcome",
              desc: "This is your first task",
              status: "active",
            },
          ],
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        console.log("user added");
        return res.json().then((data) => {
          console.log(data.name);
          console.log(data);
        });
      } else {
        return res.json().then((data) => console.log("error" + data));
      }
    });
  };

  const loadUser = function (currUser) {
    fetch(
      "https://react-1bbaa-default-rtdb.europe-west1.firebasedatabase.app/users.json"
    ).then((res) => {
      if (res.ok) {
        console.log("users fetched");
        return res.json().then((data) => {
          for (const key in data) {
            if (data[key].email === currUser) {
              console.log("*********");
              console.log(key);
              console.log(data[key]);
              props.userData(data[key], key);
              console.log("nadjen user");
            }
          }
        });
      } else {
        return res.json().then((data) => console.log("error" + data));
      }
    });
  };

  const logingIn = function (event) {
    event.preventDefault();
    // setError(null)
    const enteredEmailLogin = userEmailLogin.current.value;
    const enteredPassLogin = userPassLogin.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCsObJ1tkr1E0pqYRAzEQTHdI7i_S5-agA",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmailLogin,
          password: enteredPassLogin,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json().then((data) => {          
          loadUser(data.email);
          props.onLogin();
        });
      } else {
        throw new Error("Something went wrong")
        
           
      }
    }).catch((err) => {
      // setError(err)
      console.log(err)});
  };

  const signUp = function (event) {
    event.preventDefault();
    // setError(null)
    const enteredEmailReg = userEmailReg.current.value;
    const enteredPassReg = userPassReg.current.value;
    const enteredNameReg = userNameReg.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCsObJ1tkr1E0pqYRAzEQTHdI7i_S5-agA",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmailReg,
          password: enteredPassReg,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application-json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          pushUser(data.email, enteredNameReg, enteredPassReg);
        });
      } else {
        return res.json().then((data) => console.log(data));
      }
    });
  };

  return (
    <React.Fragment>
      {/* Logging in auth form */}
      {!registering && (
        // <form className="login-form" onSubmit={props.onLogin}>
        <form className="login-form" onSubmit={logingIn}>
          <input
            id="email-login"
            placeholder="Enter E-mail"
            ref={userEmailLogin}
          ></input>
          <input
            id="pass-login"
            ref={userPassLogin}
            placeholder="Enter Password"
            type="password"
          ></input>
          {/* {error && <p>Error: {error}</p>} */}
          <button className="button-login-main" type="submit">
            Log in
          </button>
          <button
            className="button-login-secondary"
            type="button"
            onClick={authFormHandler}
          >
            Register
          </button>
        </form>
      )}

      {/* Registering auth form */}
      {registering && (
        <form className="login-form" onSubmit={signUp}>
          <input
            id="name-reg"
            type="text"
            placeholder="Your Name"
            ref={userNameReg}
          ></input>

          <input
            id="email-reg"
            type="email"
            placeholder="Your E-mail"
            ref={userEmailReg}
          ></input>

          <input
            id="pass-reg"
            placeholder="Enter Password"
            type="password"
            ref={userPassReg}
          ></input>
          {/* {error && <p>Error: {error}</p>} */}
          <button className="button-login-main" type="submit">
            Register
          </button>
          <button
            className="button-login-secondary"
            type="button"
            onClick={authFormHandler}
          >
            Log in
          </button>
        </form>
      )}
    </React.Fragment>
  );
}

export default LoginForm;
