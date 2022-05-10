import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import logo from "../assets/images/logo-light.png";
import Header from "../components/header/Header";
import Values from "../Values";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const tostSuccess = (message) => {
    toast.success(`${message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const tostError = (message) => {
    toast.error(`${message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const URL = `${Values.BASE_URL}login`;
    const data = {
      email,
      password,
    };

    axios
      .post(URL, data, {
        headers: {
          "X-CSRF-TOKEN": "tokenvasdasdaluetobeinserted235kwgeiOIulgsk",
        },
      })
      .then((d) => {
        tostSuccess("Login successfully!");
        localStorage.setItem("loginData", d.data);
        window.location.reload();
      })
      .catch((e) => {
        // console.log(e.response.data.message);
        tostError(e.response.data.message);
      });
  };

  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={100}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="login">
        <div className="container">
          <div className="login-wrp">
            <div className="login-right">
              <p className="title">Meden Islamic Center</p>
              <form action="" onSubmit={(e) => submitHandler(e)}>
                <div className="input-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={email}
                    id="email"
                    onChange={(e) => emailHandler(e)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="passwaord">Passwaord:</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => passwordHandler(e)}
                  />
                </div>
                <button type="subimt">Login</button>
              </form>
              <Link to="/registation" className="new-registation">
                new registration
              </Link>
            </div>
            <div className="login-left">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
