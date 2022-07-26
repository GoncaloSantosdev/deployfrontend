import React, { useState } from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';

function App() {
  const [clientMessage, setClientMessage] = useState('');
  const [serverMessage, setServerMessage] = useState('');

  const sendReceiveMessage = async () => {
    console.log("client message: ", clientMessage)
    const response = await fetch(`${urlEndpoint}/post-message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ clientMessage })
    })
    const responseJSON = await response.json();
    setServerMessage(responseJSON.serverMessage)
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage clientMessage={clientMessage} setClientMessage={setClientMessage} serverMessage={serverMessage} sendReceiveMessage={sendReceiveMessage}/>} />
      </Routes>
    </div>
  );
}

export default App;
