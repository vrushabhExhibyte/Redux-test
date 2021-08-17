import constants from "../constants";
const initState = {
  isSuccess: false,
  isProgress: false,
  isSignin: false,
  isError: false,
  error: null,
  user: {
    userEmail: null,
  },
};

const reducers = (state = initState, action) => {
  switch (action.type) {
    case constants.SIGNIN_PROGRESS:
    case constants.SIGNUP_PROGRESS:
    case constants.PROGRESS:
      return { ...state, isProgress: true, isError: false, error: null };

    case constants.SIGNIN_SUCESS:
      return {
        ...state,
        isSuccess: false,
        isSignin: true,
        user: { userEmail: action.email },
        isProgress: false,
        isError: false,
        error: null,
      };
    case constants.SIGNUP_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isSignin: false,
        user: { userEmail: action.email },
        isProgress: false,
        isError: false,
        error: null,
      };

    case constants.SIGNIN_FAILED:
    case constants.SIGNUP_FAILED:
      console.log(34, action.error);
      return {
        ...state,
        isProgress: false,
        isSuccess: false,
        isError: true,
        error: action.error.message,
      };

    default:
      return state;
  }
};
export default reducers;
