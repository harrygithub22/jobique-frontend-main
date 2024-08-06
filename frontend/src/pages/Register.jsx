import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

export const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow
          labelText="first name"
          defaultValue="karan"
          type="text"
          name="fname"
        />
        <FormRow
          labelText="last name"
          defaultValue="arjun"
          type="text"
          name="lname"
        />
        <FormRow defaultValue="karan@gmail.com" type="email" name="email" />
        <FormRow defaultValue="secret@123" type="password" name="password" />
        <FormRow type="text" name="location" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>Already a member</p>
        <Link to="/login" className="btn-member">
          Login
        </Link>
      </form>
    </Wrapper>
  );
};
