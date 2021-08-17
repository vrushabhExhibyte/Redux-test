import constants from "../constants";

const progress = () => ({ type: constants.PROGRESS });

const successSignUp = () => ({ type: constants.SIGNUP_SUCCESS });

const failedSignup = (error) => ({ type: constants.SIGNUP_FAILED, error });

export { progress, successSignUp, failedSignup };
