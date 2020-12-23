import "../App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Topic from "./Topic";

function App() {
  return (
    <Router>
      <Route exact path={"/"} component={Home} />
      <Route path={"/topic"} component={Topic} />
    </Router>
  );
}

export default App;
