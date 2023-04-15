import React, { useState } from "react";
//import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { useSelector} from "react-redux";
import"./ChatInput.css"
import axios from "axios";
//import Picker from "emoji-picker-react";

export default function ChatInput() {
  const [msg, setMsg] = useState("");
  const accessTokenState = useSelector((state) => state.accessToken.tokens)
  const [token,setToken] = useState(localStorage.getItem("accessToken0"))
  /*const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emojiObject) => {
    let message = msg;
    message += emojiObject.emoji;
    setMsg(message);
  };*/
  const handleSendMsg =async (msg)=>{
    const timestamp1 = Date.now();
    await axios.post("http://localhost:4200/message/send",{
      chatId: 'main_group_chat',
      author: 'bolt',
      message: msg,
      timestamp: timestamp1
  },{
      headers: {
          'x-access-token': token
      }
    })
   
  }

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
    
  };

  return (
    <div className="chatInput">
      <div className="button-container">
        {/* <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div> */}
      </div>
      <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <input
          className="chatinput-input"
          type="text"
          placeholder="type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button className="chatinput-btn" type="submit">
          <IoMdSend />
        </button>
      </form>
    </div>
  );
}
