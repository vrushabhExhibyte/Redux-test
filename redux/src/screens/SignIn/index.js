import AuthForm from "../../components/AuthForm";

const SignIn = (props) => {
  return (
    <>
      <div className="text-lg font-bold text-center p-5">
        Welcome to ToDo App
      </div>
      <AuthForm isSignIn={true} />
    </>
  );
};

export default SignIn;
