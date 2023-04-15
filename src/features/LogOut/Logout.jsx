import {React}from "react";
import './Logout.css'
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import { logOut } from "../accessTokenSlice";
import { useDispatch} from "react-redux";

export default function Logout() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <button className="logoutButton" onClick={()=>{dispatch(logOut());localStorage.removeItem("accessToken");navigate("/")}}>
      <BiPowerOff className="logoutIcon" />
    </button>
  );
}