import { Button, Form, Input, message, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import constants from "../../constants";

const AuthForm = (props) => {
  const { isSignIn } = props;

  const {
    isProgress,
    isSuccess,
    isError,
    error,
    user,
    isSignin: isLogin,
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const type = isSignIn ? "Sign In" : "Sign Up";

  // const signupHandler = (value) => {
  //   signUp(value)
  //     .then((user) => console.log(user))
  //     .catch((error) => console.error(error));
  // };
  // const signinHandler = (value) => {
  //   signIn(value)
  //     .then((user) => console.log(user))
  //     .catch((error) => console.error(error));
  // };

  const onFinishHandler = (values) => {
    console.log(values);
    // isSignIn ? signinHandler(values) : signupHandler(values);
    dispatch({
      type: isSignIn ? constants.SIGNIN : constants.SIGNUP,
      value: values,
    });
  };

  const displayMessage = ({ message, description, path }) => {
    notification.info({
      message,
      description,
      placement: "bottomRight",
      duration: 10,
    });
    history.push(path);
  };

  if (!isSignIn && isSuccess) {
    displayMessage({
      message: "Account Created Succssfully",
      description: `You have successfully created a account with ${user.userEmail}`,
      path: "/auth/signin",
    });
  } else if (isSignIn && isLogin) {
    displayMessage({
      message: "Sign In Successfully",
      description: `You have successfully Sign In with ${user.userEmail}`,
      path: "/todo",
    });
  }

  return (
    <>
      <div className="text-2xl font-bold text-center">{type}</div>
      <div className="w-1/4 m-auto p-10">
        <Form layout="vertical" onFinish={onFinishHandler}>
          <Form.Item label="Email Address" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isProgress ? true : false}
          >
            {type}
          </Button>
        </Form>
      </div>
      {isError && message.error(`${error}`, 5)}
      <div>
        <p>hsgh</p>
      </div>
    </>
  );
};

export default AuthForm;
