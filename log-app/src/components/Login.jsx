import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import "./../components/Login.css";
import axios from "axios";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const res = await axios.post("http://localhost:8080/api/v1/auth/authenticate", values);
        console.log("Login success: ", res);
      } catch (e) {
        console.log("Login failed: ", e);
      }
    },
  });

  useEffect(() => {
    // If you need any logic when the component mounts, you can put it here.
  }, []);

  return (
    <div className="main2">
      <div className="login-container">
        <div className="login-container2">
          <h1>Welcome back, User</h1>
          <p>Welcome back! Please enter your details.</p>
          <button className="btn-google2">Sign up with Google</button>
          <div className="or">
            <hr className="hrfirst" />
            <div>or</div>
            <hr className="hrfirst" />
          </div>

          <form onSubmit={formik.handleSubmit} className="form">
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="input-log"
              placeholder="user123@mail.com"
            />

            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="input-log"
              placeholder="********"
            />
            <div className="checkandforgot">
              <div className="remember">
                <input type="checkbox" id="checked" />
                <label>Remember me for 30 days</label>
              </div>
              <a href="#">Forgot Password</a>
            </div>
            <button type="submit" className="btn-sub">
              Log in
            </button>
          </form>
          <div className="linktoregister">
            Don't have an account ?{" "}
            <Link to="/register" className="registerlink">
              Sign up for free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
