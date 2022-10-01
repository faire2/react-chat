import './App.css'
import io from 'socket.io-client'

import Chatroom from './Chatroom'

const socket = io('http://localhost:4001')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatroom socket={socket} />
      </header>
    </div>
  );
}

export default App;
