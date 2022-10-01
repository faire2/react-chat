import './App.css'
import io from 'socket.io-client'

const socket = io('http://localhost:4001')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello chat app!
      </header>
    </div>
  );
}

export default App;
