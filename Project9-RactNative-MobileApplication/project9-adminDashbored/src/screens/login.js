import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import ReactDOM from "react-dom";
import Navbar from "../layouts/navbar";
import "./login.css";
import Logo from "./talabiahLogoWhite.png";

const Login = (props) => {
  let history = useHistory();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("token"))) {
      history.push("/admin");
      window.history.pushState({}, "", "/admin");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    if (username && password) {
      const data = { username: username, password: password };
      const response = await axios.post(
        "http://86.108.1.225/api/users/login",
        data
      );
      var decodedData = jwt_decode(response.data.token);
      console.log(decodedData);
      if (!decodedData.isAdmin) {
        setMsg("You are not Authorized");
      } else {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        props.set(true);
        ReactDOM.render(<Navbar />, document.getElementById("navbar"));
        history.push("/admin");
      }
    } else {
      setMsg("Invalid username or password");
    }
  };
  return (
    <div
      className="container-fluid ahmad"
      style={{
        backgroundImage: "url('/login-bg-img.jpg')",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
      }}
    >
      <form
        className="form-login"
        onSubmit={(e) => handleSubmit(e)}
        style={{
          width: "50%",

          padding: "1.5rem",
          zIndex: "1",
          borderRadius: 10,
          color: "white",
        }}
      >
        <img src={Logo} width={130} />
        <h3>talabieh</h3>
        {msg && <div className="alert alert-danger">{msg}</div>}
        <div className="form-group">
          <input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Username"
          />
        </div>

        <div className="form-group">
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg px-5 py-1 ">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
