import "./ChatDisplay.css"
import { useEffect, useState,useRef } from "react";
import axios from "axios";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../accessTokenSlice";


export default function ChatDisplay () {
    const [msg,setMsg] = useState({messages:[]})
    const messagesEndRef = useRef(null)
    const accessTokenState = useSelector((state) => state.accessToken.tokens)
    
    const navigate = useNavigate();
    const dispatch = useDispatch();


   const [token,setToken] = useState(localStorage.getItem("accessToken0"))

    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        setToken(localStorage.getItem("accessToken0"))
        console.log(token);
        const interval = setInterval(async() => {
          try{ let response = await axios.post("http://localhost:4200/message/fetch",{
            chatId: 'main_group_chat',
        },{
            headers: {
                'x-access-token': token
            }
          });
          setMsg(response.data)
          scrollToBottom()
       } catch(err){
        if(err)
          {
          // localStorage.removeItem("accessToken0");
          // // dispatch(logOut());
          // navigate("/login")
        }
       }
         
        }, 1000);
        return () => clearInterval(interval);
      }, [msg,accessTokenState,token,dispatch,navigate]);
    

    function view(msg){

      let currentTime1 = new Intl.DateTimeFormat('en-US', 
                        {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})
                        .format(msg.messages.timestamp);
      let currentTime = currentTime1.slice(0,17)+" "+currentTime1.slice(21,23)

      return msg.messages.map((element,index)=><li key={index} className="chat-display">
        <span className="chat-name">{element.author}</span>
        <span className="chat-message">{element.message}</span>
        <span className="chat-time">{currentTime}</span></li>)
    }

    return(
        <ul >
            {view(msg)}
            <div ref={messagesEndRef}/>
        </ul>
    );
}