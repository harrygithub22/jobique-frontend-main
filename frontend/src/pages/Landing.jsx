import Wrapper from "../assets/wrappers/LandingPage";
import mainImg from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

export const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            minima ex repellendus enim aperiam minus aliquid quam eum dolore
            earum qui ea, perferendis assumenda obcaecati quis iure laboriosam
            voluptates soluta?
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login/Demo User
          </Link>
        </div>
        <img src={mainImg} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
