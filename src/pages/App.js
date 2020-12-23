import "../App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Topic from "./Topic";
import Escape from "./Escape";
import Laugh from "./Laugh";

function App() {
  return (
    <Router>
      <Route exact path={"/"} component={Home} />
      <Route path={"/topic"} component={Topic} />
      <Route path={"/escape"} component={Escape} />
      <Route path={"/laugh"} component={Laugh} />
    </Router>
  );
}

export default App;
