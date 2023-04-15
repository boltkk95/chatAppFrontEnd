import './Chat.css'
import ChatDisplay from '../../features/ChatDisplay/ChatDisplay'
import ChatInput from '../../features/ChatInput/ChatInput';
import Logout from '../../features/LogOut/Logout';
import { useEffect,useState} from 'react';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logOut } from "../../features/accessTokenSlice";
function Chat(){
    const accessTokenState = useSelector((state) => state.accessToken.tokens) 
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('accessToken0', accessTokenState.accessToken);
      },[accessTokenState]);

    const [token,setToken] = useState(localStorage.getItem("accessToken0"))

    
   
    useEffect(() => {
        setToken(localStorage.getItem("accessToken0"))
        console.log(token);
        const getMessages = async () => {
         try{  await axios.post("http://localhost:4200/message/fetch",{
              chatId: 'main_group_chat',
          },{
              headers: {
                  'x-access-token':  token
              }
            });
         } catch(err){
          if(err.response)
            {
            // localStorage.removeItem("accessToken0");
            // // dispatch(logOut());
            // navigate("/login")
        }
         }}
         getMessages(); 
      }, [navigate,dispatch,token]);

    return<div className="chat">
        <div className='container'>
            <div className='chat-contacts'></div>
            <div className='chat-elements'>
                <div className='chat-display-element'><ChatDisplay/></div>
                <div className='chat-input-element'><ChatInput/></div>
                <div className='chat-logout-button'><Logout/></div>
            </div>  
        </div>
    </div>
}

export default Chat;