import Logo from "../../assets/images/Group.png";
import BodyPic from "../../assets/images/Pic.png";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { OPERATORS_LOGIN } from "../../URLs/Apis";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../lib/zodForValidation";

function Login() {
  const navigation = useNavigate();
  const [loginReqData, setLoginReqData] = useState({
    email: "",
    password: "",
    device_name: "mobile",
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit = async (data) => {
    const headers = {
      Authorization:
        "Bearer 254|KSKd4yoSLnEauMckPA28IJBOIB7QddQC8I90QP7Te1cdeb0d",
    }; // auth header with bearer token

    await axios
      .post(OPERATORS_LOGIN, loginReqData)
      .then((res) => {
        console.log(res.data);
        navigation("/");
      })
      .catch((e) => {
        console.log(e.data);
      });
  };

  return (
    <div class="row  ">
      <div class="col-md-7 col-xs-12 col-sm-12 col-lg-5 sideForImg">
        <div className="header bg-black">
          <div className="logoHeader">
            <img className="loginLogo" src={Logo} alt="Logo" />
            <p className=" mainText">
              Login to manage orders and imporove efficiency
            </p>
          </div>
          <img className=" mainImg" src={BodyPic} alt="Car Imges" />
        </div>
      </div>
      <div class=" col-md-5 col-sm-12 col-xs-12 col-lg-7 p-0 ps-4 pe-4 sideForinfo">
        <div className=" welcom">
          <form onSubmit={handleSubmit(onSubmit)} className="w-100">
            <h1 className="title">Welcome back Ziad</h1>
            <p className="welcomeP">Glad to see you again</p>
            <div class="mb-4 inpForm">
              <label for="exampleFormControlInput1" class="form-label label">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                value={loginReqData.email}
                onChange={(e) => {
                  setLoginReqData({ ...loginReqData, email: e.target.value });
                }}
              />
              {errors.email && (
                <p className="danger">{`${errors.email.message}`}</p>
              )}
            </div>
            <div class="mb-4 inpForm">
              <label for="exampleFormControlInput1" class="form-label label">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your password"
                value={loginReqData.password}
                onChange={(e) => {
                  setLoginReqData({
                    ...loginReqData,
                    password: e.target.value,
                  });
                }}
              />
              {errors.password && (
                <p className="danger">{`${errors.password.message}`}</p>
              )}
            </div>
            <div className=" rememberTheName">
              <div>
                <input type="checkbox" className="px-3 d-inline" />
                <span className="rememberMe">Remember me</span>
              </div>
              <Link to="/">
                <p>Forgot password?</p>
              </Link>
            </div>
            <button
              type="submit"
              class="btn btn-primary submetButton"
              disabled={isSubmitting}
            >
              Login
            </button>
          </form>
        </div>
        <div className="noAccount">
          Don't have an account?
          <Link to="/registration">
            <span className="register">Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
