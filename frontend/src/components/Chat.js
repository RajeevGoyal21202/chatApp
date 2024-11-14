import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';

const Chat = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const mqttClient = mqtt.connect(process.env.REACT_APP_MQTT_BROKER);

  useEffect(() => {
    mqttClient.on('connect', () => {
      mqttClient.subscribe('chatroom/general');
    });

    mqttClient.on('message', (topic, payload) => {
      setMessages((prev) => [...prev, payload.toString()]);
    });

    return () => {
      mqttClient.end();
    };
  }, [mqttClient]);

  const sendMessage = () => {
    if (message.trim()) {
      mqttClient.publish('chatroom/general', `${username}: ${message}`);
      setMessage('');
    }
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
