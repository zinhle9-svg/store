import React from "react";

function Login() {
  return (
    <div>
      <form>
        <label>
          UserName:
          <input id="name" type="text" />
        </label>
        <br />

        <label>
          Password:
          <input id="password" type="password" />
        </label>
        <br />

        <div>
          <button type="submit">Okay</button>
        </div>
        <div>
          <button type="button">Signup</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
