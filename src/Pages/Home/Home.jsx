import './Home.css'
import { Link } from "react-router-dom";
import logo from '../../Assets/appLogo.png'
import homeImg from '../../Assets/homeImage.png'
function SignUp() {
 

    return (
      <div className="home">
        <div className='homeLeft'>
            <div className='brand'>
                <img className='logo' src={logo} alt="logo"/>
                <h1 className='homeh1'>SociDesk</h1>
            </div>
            <div className='homeDetail'>
                <img className='homeImg' src={homeImg} alt="person texting" />
            </div>
        </div>
        <div className='homeRight'>
            <div className='navButtons'>
                <button className="loginButton"><Link to="/login">LogIn</Link></button>
                <button className="signUpButton"><Link to="/signup">Sign Up</Link></button>
            </div>
        </div>
      </div>
        )
  }
  
  
  export default SignUp;