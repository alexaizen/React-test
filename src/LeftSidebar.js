import { useSelector, useDispatch } from "react-redux";

import LoginForm from "./Components/LoginForm";
import { NavLink, useHistory } from "react-router-dom";
import "./LeftSidebar.css";
import { loginActions } from "./store";

function LeftSidebar(props) {
  const dispatch = useDispatch();
  const isLogedIn = useSelector((state) => state.isLogedIn);
  const history = useHistory();

  const loginStatusHandler = function (e) {
    e.preventDefault();
    dispatch(loginActions.loginToggle());
    history.push(isLogedIn ? "/welcome" : "/dashboard");
  };

  return (
    <div className="left-sidebar">
      <div className="profile-area">
        <img
          src="https://mmox.me/img/profile.png"
          alt="avatar"
          width="60px"
          height="60px"
        />
        <h4>Marko markovic</h4>
      </div>
      {!isLogedIn && <LoginForm onLogin={loginStatusHandler} />}

      {isLogedIn && (
        <ul className="nav-menu">
          <NavLink activeClassName="nav-active" to="/dashboard">
            <li>Dashboard</li>
          </NavLink>

          <NavLink activeClassName="nav-active" to="/tasks">
            <li>Tasks</li>
          </NavLink>

          <NavLink activeClassName="nav-active" to="/profile">
            <li>Profile</li>
          </NavLink>

          <NavLink activeClassName="nav-active" to="/settings">
            <li>Settings</li>
          </NavLink>
        </ul>
      )}
      {isLogedIn && <button onClick={loginStatusHandler}>Log out</button>}
    </div>
  );
}

export default LeftSidebar;
