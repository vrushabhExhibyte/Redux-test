import "./App.css";
import Login from "./components/Login";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Signup from "./components/Signup";
import { Route, Switch } from "react-router-dom";
import Amplify from "aws-amplify";
import Window from "./components/Window";
import Unable from "./components/Unable";

Amplify.configure({
  aws_project_region: "us-east-1",
  aws_cognito_region: "us-east-1",
  aws_user_pools_id: "us-east-1_W1ctKqoBT",
  aws_user_pools_web_client_id: "6kke7s6f3c6igh1rd2kg3epqod",
});
const App = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <>
      <Switch>
        <Route exact path="/" component={Window}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/unable" component={Unable}></Route>
      </Switch>
    </>
  );
};

export default App;
