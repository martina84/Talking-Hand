/*import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Contact.css'

const ChatApp = () => {
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
    fetchMessages();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (messages.length > 0) {
      setShowAlert(true);
    }
  }, [messages]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(response.data)
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLogin = () => {
    if (username.trim() !== '') {
      localStorage.setItem('username', username);
      fetchMessages();
    }
  };

  const handleMessageChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    if (currentMessage.trim() !== '') {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
          userId: username, 
          title: currentMessage, 
          body: currentMessage 
        });
        const newMessage = {
          userId: username,
          title: currentMessage,
          id: response.data.id,
          timestamp: new Date().toLocaleString() 
        };
        setMessages([...messages, newMessage]);
        setCurrentMessage('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername('');
    setMessages([]);
  };

  const handleDeleteMessage = (id) => {
    const updatedMessages = messages.filter(message => message.id !== id);
    setMessages(updatedMessages);
  };

  

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredMessages = messages.filter(message => message.title.toLowerCase().includes(searchTerm));
    setMessages(filteredMessages);
  };

  return (
    <div className="container">
      <h1 className="header">Chat Application</h1>
      {username ? (
        <div>
          <button onClick={handleLogout} className="logout-button">Logout</button>
          <div className="chat-area">
            {messages.map((message, index) => (
              <div key={index} className="message-container">
                <span className="username">{message.userId}:</span>
                <div className="message">{message.title}</div>
                <span className="timestamp">({message.timestamp})</span>
                <div className="message-actions">
                  <button className="action-button " onClick={() => handleDeleteMessage(message.id)}>
                    
                  <i className="fa fa-trash" /> Delete
                  </button>
                  
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="input-container">
            <input 
              type="text" 
              placeholder="Type your message..." 
              value={currentMessage} 
              onChange={handleMessageChange} 
              onKeyPress={handleKeyPress}
              className="message-input"
            />
            <button onClick={handleSendMessage} className="send-button">Send</button>
          </div>
          {showAlert && <div className="alert">New messages received!</div>}
          <div>
            <input 
              type="text" 
              placeholder="Search messages..." 
              onChange={handleSearch} 
              className="username-input"
            />
          </div>
        </div>
      ) : (
        <div className="login-form">
          <input 
            type="text" 
            placeholder="Enter your username" 
            value={username} 
            onChange={handleUsernameChange} 
            className="username-input"
          />
          <button onClick={handleLogin} className="login-button">Login</button>
        </div>
      )}
    </div>
  );
};

export default ChatApp;*/