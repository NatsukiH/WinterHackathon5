import { Breadcrumbs } from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const LogoComponent = () => {
  return <img src={Logo} alt="ロゴ" width="40%" />;
};
function Header() {
  return (
    <header className="App-header">
      <LogoComponent />
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/">Home</Link>
        <Link to="/topic">新しい話題を振る</Link>
        <Link to="/escape">脱出する</Link>
        <Link to="/laugh">笑いを取る</Link>
      </Breadcrumbs>
    </header>
  );
}

export default Header;
