import "./App.css";
import { Route, Switch } from "react-router-dom";
import SignIn from "./screens/SignIn/index";
import SignUp from "./screens/SignUp/index";

function App() {
  return (
    <>
      <Switch>
        <Route path="/auth/signin" component={SignIn}>
          <SignIn />
        </Route>
        <Route path="/auth/signup" component={SignUp}>
          <SignUp />
        </Route>
      </Switch>
    </>
  );
}

export default App;
