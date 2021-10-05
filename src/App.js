import Navabar from "./components/navabar/Navabar";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Homepage from "./pages/homepage/Homepage";
import Write from "./pages/write/Write"
import SignUp from "./pages/register/Signup"
import Login from "./pages/login/Login"
import Setting from "./pages/settings/Settings"
import Single from "./pages/single/Single"
import {useContext} from "react";
import { Context } from "./context/Context";
function App() {
  const { user } = useContext(Context);
  return (
    <div className="App">
    <Router>
      <Navabar/>
      <Switch>
        <Route exact path="/">
          <Homepage/>
        </Route>
          <Router path="/signup">{user ? <Homepage/> :<SignUp/>}</Router>
          <Route path="/signin">{user ?<Homepage/>: <Login/>}</Route>
          <Route path="/write">{user ?<Write/>: <SignUp/> }</Route>
          <Route path="/settings">{ user?<Setting/>:<SignUp/>}</Route>
          <Route path="/post/:postId">
            <Single/>
          </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
