import axios from 'axios'
import React, { useEffect , useState } from 'react'

const Message = () => {
    const [chats,setMessages] = useState([])
    
    const fetchMessages = async() => {
        
        const  {chat}= await axios.get("/api/messages");
        setMessages(chat);

    }
    useEffect(() => {
        fetchMessages();
    
    
    }, [])
    

  return (
    <div>
      
    </div>
  )
}

export default Message
