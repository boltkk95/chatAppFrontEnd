import "./LogIn.css"
import logo from '../../Assets/appLogo.png'
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTokens} from "../accessTokenSlice";

function LogIn() {
    const navigate = useNavigate();
    const accessTokenState = useSelector((state) => state.accessToken.tokens)
    const dispatch = useDispatch()
    let [errorMessage1,setErrorMessage1] = useState("") ;
    const [values, setValues] = useState({ username: "", password: "" });
    const { username, password } = values;
    
    // useEffect(() => {
    //   const token = localStorage.getItem('accessToken0');
    //   if(token){navigate("/chat")}
    // }, [navigate]);

    console.log(localStorage.getItem("accessToken0"));
    
    const handleSubmit =  (e) => {
        e.preventDefault();
        if (handleValidation()) {
          dispatch(fetchTokens({password,username}))
   
          if (accessTokenState.authStatus === false) {
                    setErrorMessage1(accessTokenState.description)
                 }
                  else  {
                  setTimeout(()=>navigate("/chat"),2000);
                  }
            };
          }
    
    const handleChange= (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const handleValidation = () => {
        const { password, username} = values;
          if (username === ""){
          setErrorMessage1("username is required");
          return false;
        } else if (password === "") {
            setErrorMessage1("password required")
            return false;
        }else{
          setErrorMessage1("")
          return true;
        }
      }

    return (
      <div className="logIn">
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
            <div className='brand'>
                <img className='logo' src={logo} alt="logo"/>
                <h1>SociDesk</h1>
            </div>
            <input 
                className="login-input"
                type="text" 
                placeholder="Username"
                name="username"
                onChange={(e) => handleChange(e)}
            /> 
            <input 
                className="login-input"
                type="text" 
                placeholder="Password"
                name="password"
                onChange={(e) => handleChange(e)}
            /> 
            <div className="errorMessage"> {errorMessage1} </div>
            <button className="logInBtn" type="submit">LogIn</button>
            <span className="login-text">Don't have an account? <Link to="/signup">Sign Up</Link></span>
        </form>
      </div>
        )
  }
  
  
  export default LogIn;