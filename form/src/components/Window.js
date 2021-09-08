import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Age from "../image/age17.png";
import { Link } from "react-router-dom";

const MyModal = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="h-screen bg-gray-50 flex flex-col justify-center items-center bg-gray-200">
        <h2 className="uppercase font-bold justify-center text-xl mb-4">
          Age Verification
        </h2>
        <div className="max-w-sm flex flex-col justify-center items-center w-full space-y-8 border p-8 bg-white rounded-2xl">
          <div className="relative w-48 h-48 overflow-hidden">
            <img src={Age} className="absolute w-full h-full top-0 left-0" />
          </div>
          <div className="text-center">
            <h2 className=" text-xl font-extrabold text-gray-900">
              CONFIRM YOUR AGE
            </h2>
            <p className="text-gray-500 opcity-80 font-semibold">
              You must verify that you are 17 years of age or older to enter
              this app
            </p>
          </div>
          <div className="m-0.5 w-full px-8">
            <button
              type="button"
              onClick={openModal}
              className="max-w-sm w-full cursor-pointer mb-4 text-white bg-red-500 mx-auto block px-12 py-2 text-sm font-medium rounded-md hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              I am 17+ years old
            </button>
            <Link to="/unable">
              <button
                type="button"
                className="max-w-sm w-full cursor-pointer mx-auto block px-12 py-2 text-sm font-medium text-black bg-white border-black border-2 rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                I am not 17+ years old
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block border w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  CONFIRM YOUR AGE
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 mb-8">
                    Please confirm that ,you are not 17+ years old .
                  </p>
                </div>

                <div className="inline-flex">
                  <button
                    type="button"
                    className="px-4 bg-transparent px-4 py-2 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
                    onClick={closeModal}
                  >
                    cancel
                  </button>
                </div>
                <div className="inline-flex">
                  <Link to="/login">
                    <button
                      type="button"
                      className="modal-close px-4 py-2 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400 flex"
                      onClick={closeModal}
                    >
                      cofirm
                    </button>
                  </Link>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MyModal;
