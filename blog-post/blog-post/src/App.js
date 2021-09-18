import './App.css';
import ChatScreen from './ChatScreen';
import Header from './Header';

function App() {
  return (
    <div className="app">
      {/* header */}
      <div className="app__header">
      <Header />
      </div>
      <div className="app_chatScreen">
      <ChatScreen />
      </div>
    </div>
  );
}

export default App;
