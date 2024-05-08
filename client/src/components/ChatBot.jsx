import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = async () => {
    if (inputValue.trim() === '') return;

    // Add user's message to chat history
    setMessages([...messages, { text: inputValue, sender: 'user' }]);
    setInputValue('');

    const options = {
      method: 'POST',
      url: 'https://chatgpt-best-price.p.rapidapi.com/v1/chat/completions',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'c6150aa0fbmshc0a1461851bd7ecp100c48jsnac068272b7e6',
        'X-RapidAPI-Host': 'chatgpt-best-price.p.rapidapi.com'
      },
      data: {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: "Act like you are a pro doctor and answer these in less than 80 words if the user says something be attentive and ask for more info the users input : " + inputValue
          }
        ]
      }
    };

    try {
      const response = await axios.request(options);
      const botResponse = response.data.choices[0].message.content;
      // Add bot's response to chat history
      setMessages([...messages, { text: botResponse, sender: 'bot' }]);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const closeChat = () => {
    setShowChat(false);
  };

  return (
    <div className="fixed bottom-5 right-5 font-['Poppins'] duration-300">
      {!showChat && (
        <button
          className="bg-white/30 duration-300 hover:duration-300 backdrop-blur-3xl hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex-col"
          onClick={toggleChat}
        >
          <i className="ri-chat-3-fill"></i> AI Chat
        </button>
      )}
      {showChat && (
        <div className="shadow-lg bg-white rounded-lg p-4 duration-300">
          <button className="absolute top-2 right-2" onClick={closeChat}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 hover:text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="text-lg font-semibold text-center mb-2 duration-300">AI Chat</h2>
          <div className="chatbot-messages w-[80%] md:w-[300px] h-[400px] overflow-y-auto space-y-2 duration-300">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`w-[90%] message p-2 rounded-lg duration-300 ${
                  message.sender === 'bot' ? 'bg-blue-100 text-blue-900 ml-4 text-left' : 'bg-gray-100 text-gray-900 mr-4 text-left'
                }`}
                // style={{ maxWidth: '80%', textAlign: message.sender === 'bot' ? 'left' : 'right' }}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex mt-2">
            <input
              type="text"
              placeholder="Type your message here..."
              className="flex-grow border rounded-l-lg p-2 focus:outline-none text-md"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              autoFocus
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 duration-300 rounded-r-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
