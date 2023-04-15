import { useState } from "react";
import "./SignUp.css"
import logo from '../../Assets/appLogo.png'
import { Link } from "react-router-dom";
function SignUp() {
  const [values,setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  let [errorMessage1,setErrorMessage1] = useState("") ;

  const handleChange= (e) => {
    setValues({...values,[e.target.name]: e.target.value});
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email} = values;
    if (password !== confirmPassword){
      setErrorMessage1("password and confirmPassword should be same");
      return false;
    } else if (username.length < 4){
      setErrorMessage1("username should have atleast four characters");
      return false;
    } else if (password.length <8){
      setErrorMessage1("password should have atleast eight characters"); 
      return false;
    } else if (email === ""){
      setErrorMessage1("email is required");
      return false;
    } else{
      setErrorMessage1("")
      return true;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()){
      const { password, confirmPassword, username, email} = values;
    };
};

    return (
      <div className="signUp">
         <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
            <div className='brand'>
                <img className='logo' src={logo} alt="logo"/>
                <h1>SociDesk</h1>
            </div>
            <input 
                className="signup-input"
                type="text" 
                placeholder="Username"
                name="username"
                onChange={(e) => handleChange(e)}
            /> 
            <input 
                className="signup-input"
                type="email" 
                placeholder="Email"
                name="email"
                onChange={(e) => handleChange(e)}
            />
            <input 
                className="signup-input"
                type="text" 
                placeholder="Password"
                name="password"
                onChange={(e) => handleChange(e)}
            /> 
            <input 
                className="signup-input"
                type="password" 
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={(e) => handleChange(e)}
            />
            <div className="errorMessage"> {errorMessage1} </div>
            <button className="signUpBtn" type="submit" >Sign Up</button>
            <span className="signup-text">Already have an account? <Link to="/login">LogIn</Link></span>
        </form>
      </div>
        )
  }
  
  
  export default SignUp;
  