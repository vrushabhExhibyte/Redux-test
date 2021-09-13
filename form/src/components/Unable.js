import React from "react";
import Age from "../image/unable.png";
import { useHistory } from "react-router-dom";

const Unable = () => {
  let history = useHistory();

  const clickButton = () => {
    history.push("/");
  };
  return (
    <>
      <div className="h-screen bg-gray-50 flex flex-col justify-center items-center bg-gray-200">
        <h2 className="uppercase font-bold justify-center text-xl mb-4">
          UNABLE TO REGISTER
        </h2>
        <div className="max-w-sm flex flex-col justify-center items-center w-full space-y-8 border p-8 bg-white rounded-2xl">
          <div className="relative w-48 h-48 overflow-hidden">
            <img src={Age} className="absolute w-full h-full top-0 left-0" />
          </div>
          <div className="text-center">
            <p className="text-gray-500 opcity-80 font-semibold">
              Based on information you provided, we can't crete an account, for
              you right now.
            </p>
          </div>
          <div className="m-0.5 w-full px-8">
            <button
              onClick={clickButton}
              type="button"
              className="max-w-sm w-full cursor-pointer mb-4 text-white bg-red-500 mx-auto block px-12 py-2 text-sm font-medium rounded-md hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              okay
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unable;
