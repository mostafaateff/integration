import { ReactComponent as Logo } from "../assets/svg/ESTBNLOGO.svg";
import ImageBK from "../assets/images/leftImage.png";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { CREATE_ACCOUNT } from "../URLs/Apis";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegistrationSchema } from "../lib/zodForValidation";
import { Link } from "react-router";
import Camera from "../assets/svg/Camera.svg";
import businesswoman from "../assets/svg/businesswoman.svg";

const Registartion = () => {
  const role = ["admin", "supervisor", "agent"];
  const gender = ["ذكر", "انثي"];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(RegistrationSchema),
  });
  const onSubmit = async (data) => {
    const headers = {
      Authorization:
        "Bearer 254|KSKd4yoSLnEauMckPA28IJBOIB7QddQC8I90QP7Te1cdeb0d",
    }; // auth header with bearer token

    await axios
      .post(CREATE_ACCOUNT, userData, { headers })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };
  const [userData, setUserDate] = useState({
    first_name: "",
    last_name: "",
    role: "",
    phone_number: "",
    gender: "",
    birthdate: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    profile_photo: "",
  });

  return (
    <div className="row m-0">
      <div className="position-relative col-md-6 col-sm-12 col-xs-12 col-lg-5 p-0">
        <div className="left_login_block">
          <img src={ImageBK} className="imgBk" />
        </div>
        <div className="footerBlock">
          <div className="logo">
            <Logo />
            <div className="textBlock">
              Join our innovative team, delivering exceptional car care{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-xs-12 col-sm-12 col-lg-7">
        <div className="formBlock RightSide_login">
          <form onSubmit={handleSubmit(onSubmit)} className="formItems">
            <div className="row">
              <div className="col-8">
                <h1>Create an account</h1>
                <p className="p-0 ">
                  Enter your details below to create your account and get
                  started
                </p>
              </div>
              <div className="col-4 flex-center-x-y">
                <input
                  type="file"
                  {...register("profile_photo")}
                  accept="image/*"
                  style={{ display: "none" }}
                  id="contained-button-file"
                  onChange={(e) => {
                    setUserDate({ ...userData, profile_photo: e.target.value });
                  }}
                />
                <label
                  for="contained-button-file"
                  className="flex-center-x-y  profile_photo-add"
                >
                  <img src={businesswoman} alt="" />
                  <div className="cameraIcon">
                    <img src={Camera} alt="" />
                  </div>
                </label>
              </div>
              {userData.profile_photo && (
                <div style={{ marginTop: 20 }}>
                  <p>Selected Photo: {userData.profile_photo}</p>
                </div>
              )}
              {errors.profile_photo && (
                <p className="danger">{`${errors.profile_photo.message}`}</p>
              )}
            </div>

            <div className="row p-0 m-0">
              <div className="col-6 formSyle m-0 p-0">
                <div className="form-group mt-3">
                  <TextField
                    {...register("first_name")}
                    value={userData.first_name}
                    className="w-100"
                    label="First Name"
                    variant="outlined"
                    onChange={(e) => {
                      setUserDate({ ...userData, first_name: e.target.value });
                    }}
                  />
                  {errors.first_name && (
                    <p className="danger">{`${errors.first_name.message}`}</p>
                  )}
                </div>
              </div>
              <div className="col-6 formStyle m-0">
                <div className="form-group mt-3">
                  <TextField
                    {...register("last_name")}
                    className="w-100"
                    label="Last Name"
                    value={userData.last_name}
                    variant="outlined"
                    onChange={(e) => {
                      setUserDate({ ...userData, last_name: e.target.value });
                    }}
                  />
                  {errors.last_name && (
                    <p className="danger">{`${errors.last_name.message}`}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="row p-0 m-0">
              <div className="col-6 m-0 p-0">
                <div className="form-group mt-3">
                  <Autocomplete
                    disablePortal
                    options={role}
                    renderInput={(params) => (
                      <TextField
                        {...register("role")}
                        {...params}
                        label="Role"
                      />
                    )}
                    onChange={(event, newValue) =>
                      setUserDate({ ...userData, role: newValue })
                    }
                  />
                  {errors.role && (
                    <p className="danger">{`${errors.role.message}`}</p>
                  )}
                </div>

                <div className="form-group mt-3">
                  <Autocomplete
                    disablePortal
                    options={gender}
                    renderInput={(params) => (
                      <TextField
                        {...register("gender")}
                        {...params}
                        label="Gender"
                      />
                    )}
                    onChange={(event, newValue) =>
                      setUserDate({ ...userData, gender: newValue })
                    }
                  />
                  {errors.gender && (
                    <p className="danger">{`${errors.gender.message}`}</p>
                  )}
                </div>
              </div>

              <div className="col-6 formSyle m-0">
                <div className="form-group mt-3">
                  <TextField
                    {...register("phone_number")}
                    className="w-100"
                    label="Mobile Number"
                    type="number"
                    variant="outlined"
                    value={userData.phone_number}
                    onChange={(e) => {
                      setUserDate({
                        ...userData,
                        phone_number: e.target.value,
                      });
                    }}
                  />
                  {errors.phone_number && (
                    <p className="danger">{`${errors.phone_number.message}`}</p>
                  )}
                </div>

                <div className="form-group mt-3">
                  <TextField
                    {...register("birthdate")}
                    className="w-100"
                    label="Birth Date"
                    type="date"
                    placeholder="DD/MM/YYYY"
                    slotProps={{
                      inputLabel: {
                        shrink: true,
                      },
                    }}
                    value={userData.birthdate}
                    onChange={(e) => {
                      setUserDate({ ...userData, birthdate: e.target.value });
                    }}
                  />
                  {errors.birthdate && (
                    <p className="danger">{`${errors.birthdate.message}`}</p>
                  )}
                </div>
              </div>

              <div className="form-group mt-3 p-0">
                <TextField
                  {...register("username")}
                  value={userData.username}
                  className="w-100"
                  label="Username"
                  variant="outlined"
                  onChange={(e) => {
                    setUserDate({ ...userData, username: e.target.value });
                  }}
                />
                {errors.username && (
                  <p className="danger">{`${errors.username.message}`}</p>
                )}
              </div>

              <div className="form-group mt-3 p-0">
                <TextField
                  {...register("email")}
                  className="w-100"
                  label="Email"
                  variant="outlined"
                  value={userData.email}
                  onChange={(e) => {
                    setUserDate({ ...userData, email: e.target.value });
                  }}
                />
                {errors.email && (
                  <p className="danger">{`${errors.email.message}`}</p>
                )}
              </div>
            </div>

            <div className="row p-0 m-0">
              <div className="col-6 m-0 p-0">
                <div className="form-group mt-3">
                  <TextField
                    {...register("password")}
                    className="w-100"
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={userData.password}
                    onChange={(e) => {
                      setUserDate({ ...userData, password: e.target.value });
                    }}
                  />
                  {errors.password && (
                    <p className="danger">{`${errors.password.message}`}</p>
                  )}
                </div>
              </div>

              <div className="col-6 formSyle m-0">
                <div className="form-group mt-3">
                  <TextField
                    {...register("password_confirmation")}
                    className="w-100"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    value={userData.password_confirmation}
                    onChange={(e) => {
                      setUserDate({
                        ...userData,
                        password_confirmation: e.target.value,
                      });
                    }}
                  />
                  {errors.password_confirmation && (
                    <p className="danger">{`${errors.password_confirmation.message}`}</p>
                  )}
                </div>
              </div>

              <div className="col-12 p-0">
                <button
                  className="btn btn-primary w-100 mt-4 submetButton"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
          <div className="haveAccount flex-center-x-y">
            Already have an account?
            <Link to="/login">
              <span className="register">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registartion;
