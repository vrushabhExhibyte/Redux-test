import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";
import { ReactComponent as FacebookIcon } from "../image/facebookIcon.svg";
import GitHubIcon from "@material-ui/icons/GitHub";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { ReactComponent as GoogleIcon } from "../image/googleIcon.svg";

import GitHubLogin from "react-github-login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  const componentClicked = (data) => {
    console.log(data);
  };
  const onSuccess = (response) => {
    console.log(response);
  };

  const clickButton = () => {
    history.push("/signup");
  };

  const dispatch = useDispatch();

  const clickDetails = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email,
        password: password,
        logggedIn: true,
      })
    );
  };
  async function signIn() {
    try {
      const user = await Auth.signIn(email, password);
      console.log(user);
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="shadow-2xl rounded-2xl border">
          <form
            className="mt-8 space-y-6 max-w-sm mx-auto p-8"
            action="#"
            method="POST"
            onSubmit={clickDetails}
          >
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  User Name
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
                  placeholder="Email id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={signIn}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Login
              </button>
            </div>
            <div className="text-sm text-center">
              Don't have an account?
              <a
                onClick={clickButton}
                className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500 text-center"
              >
                SignUp account
              </a>
            </div>
          </form>
          <div className="flex flex-col justify-center">
            <div className="relative mb-6">
              <hr className="absolute w-full top-1/2 transform -translate-y-1/2 bg-black" />
              <p className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-gray-50 px-2 text-xs">
                OR LOGIN WITH
              </p>
            </div>
            <div className="flex justify-between p-2 w-48 mx-auto">
              <FacebookLogin
                appId="343306320855827"
                autoLoad={false}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    className="w-12 h-12 flex justify-center items-center rounded-full"
                  >
                    <FacebookIcon />
                  </button>
                )}
              >
                <FacebookIcon />
              </FacebookLogin>
              <GoogleLogin
                clientId="346399347904-8aj5ln745c4gg86da8rj920vf33ik0sq.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                buttonText=""
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="w-12 h-12 flex justify-center items-center bg-gray-200 rounded-full"
                  >
                    <GoogleIcon />
                  </button>
                )}
              ></GoogleLogin>
              <GitHubLogin
                className="w-12 h-12 flex justify-center items-center bg-black rounded-full"
                clientId="06daa30f73149256e5f"
                onSuccess={onSuccess}
                buttonText={<GitHubIcon className="z-10 filter invert" />}
              ></GitHubLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
