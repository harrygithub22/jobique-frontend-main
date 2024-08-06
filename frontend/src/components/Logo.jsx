import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
export const Logo = () => {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="jobique logo" />
      </Link>
    </>
  );
};
