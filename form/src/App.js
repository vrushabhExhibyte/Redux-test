import "./App.css";
import Login from "./components/Login";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Logout from "./components/Logout";

const App = () => {
  const user = useSelector(selectUser);
  return <div>{user ? <Logout /> : <Login />}</div>;
};

export default App;
