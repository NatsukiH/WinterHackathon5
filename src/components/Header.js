import "../App.css";
import { Breadcrumbs, Typography } from "@material-ui/core";
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
        <Link to="/">
          <Typography variant="button">Home</Typography>
        </Link>
        <Link to="/topic">
          <Typography variant="button">新しい話題を振る</Typography>
        </Link>
        <Link to="/escape">
          <Typography variant="button">脱出する</Typography>
        </Link>
        <Link to="/laugh">
          <Typography variant="button">笑いを取る</Typography>
        </Link>
      </Breadcrumbs>
    </header>
  );
}

export default Header;
