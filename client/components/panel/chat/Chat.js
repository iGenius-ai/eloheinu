import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react'

const Chat = ({ selected }) => {
  const [chat, setChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/auth/signin');
    }

    axios.get(`http://localhost:4000/handler/${selected}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(response => {
      const chatObj = response.data.handler;
      setChat(chatObj);
    }).catch(error => {
      console.error('Error:', error);
    });

  }, []);

  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert to 12-hour format
    hours = hours % 12 || 12;
  
    return `${hours}:${minutes} ${amOrPm}`;
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const currentTime = getCurrentTime();
    const updatedMessages = [...messages, { content: newMessage, time: currentTime }];
    setMessages(updatedMessages);
    setNewMessage('');

    axios.post(`http://localhost:4000/chat/${chat.botIdentifier._id}`, { message: newMessage }
    ).then(response => {
      console.log('Message sent successfully', response);
    }).catch(error => {
      console.error('Error sending message:', error);
    });
  };

  return (
    <>
      {chat?.botIdentifier ? (
        <div className='card w-80 p-4'>
          <div className='flex card-head px-2 py-1 text-slate-300 rounded-md border border-gray-900'>
            <small>Support: {chat.botIdentifier.botName}</small>
          </div>
          <div className='card-body h-72 max-h-72 overflow-y-scroll rounded-md p-2 border border-gray-900 my-2'>
            <ul id='message-list m-1'>
              {messages.map((message, index) => (
                <li key={index} className='message text-xs font-normal p-1'>
                  <span className='message-content'>{message.content}</span>
                  <span 
                    className='rounded-full block w-fit font-medium bg-gray-300 text-gray-900'
                    style={{ fontSize: '9px', padding: '0 8px' }}
                  >
                    {message.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <form 
            className='flex items-center form border border-gray-900 rounded-md overflow-hidden'
            onSubmit={handleMessageSubmit}
          >
            <input required
              className='w-full p-2 px-3 bg-transparent outline-none font-light text-sm'
              placeholder='Type your message...'
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button className='p-2 px-3 hover:bg-blue-950 transition-all ease-in-out duration-300'><i className='bx bxs-send'></i></button>
          </form>
        </div>
      ) : (
        <Suspense>
          <p className='text-sm text-white p-2'>Loading chat area...</p>
        </Suspense>
      )}
    </>
  )
}

export default Chat