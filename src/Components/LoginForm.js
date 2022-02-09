import "./LoginForm.css";

function LoginForm(props) {
  return (
    <form className="login-form" onSubmit={props.onLogin}>
      <input></input>
      <input></input>
      <button type="submit">Log in</button>
    </form>
  );
}

export default LoginForm;
