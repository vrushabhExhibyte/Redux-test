import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

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
                // href="#"
                onClick={clickButton}
                className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500 text-center"
              >
                SignUp account
              </a>
            </div>
          </form>
          <div className="flex flex-col justify-center">
            <p className="mx-auto">Or continue with</p>
            <div className="grid grid-cols-3 gap-5 px-8 py-4">
              <a
                className="inline-flex justify-center p-1 border border-gray-300 rounded"
                href="https://www.facebook.com/"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://github.com/vrushabhExhibyte"
                className="inline-flex justify-center p-1 border border-gray-300 rounded inline-flex "
              >
                <GitHubIcon />
              </a>
              <a
                className="inline-flex justify-center p-1 border border-gray-300 rounded"
                href="https://www.linkedin.com/signup"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
