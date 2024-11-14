// ChatApp.js
import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';

const brokerUrl = 'ws://broker.hivemq.com:8000/mqtt'; // HiveMQ WebSocket broker

function Chatapp() {
  const [client, setClient] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const topic = 'chatroom/general'; // Replace with your topic

  useEffect(() => {
    // Connect to the MQTT broker
    const client = mqtt.connect(brokerUrl);
    setClient(client);

    client.on('connect', () => {
      console.log('Connected to broker');
      client.subscribe(topic, (err) => {
        if (err) {
          console.error('Subscription error:', err);
        }
      });
    });

    client.on('message', (topic, message) => {
      const receivedMessage = message.toString();
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    });

    return () => {
      client.end();
    };
  }, []);

  const sendMessage = () => {
    if (client && inputMessage) {
      client.publish(topic, inputMessage);
      setMessages((prevMessages) => [...prevMessages, `Me: ${inputMessage}`]);
      setInputMessage('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>MQTT Chat App</h2>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Type a message"
        style={{ marginTop: '10px', width: '100%', padding: '8px' }}
      />
      <button onClick={sendMessage} style={{ marginTop: '10px', padding: '8px', width: '100%' }}>
        Send
      </button>
    </div>
  );
}

export default Chatapp;
