// import logo from "./logo.svg";
// import "./App.css";
import { Breadcrumbs } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/">Home</Link>
        <Link to="/topic">新しい話題を振る</Link>
        <Link to="/">脱出する</Link>
        <Link to="/">笑いを取る</Link>
      </Breadcrumbs>
    </header>
  );
}

export default Header;
