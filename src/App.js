import InputBar from './components/InputBar'
import List from './components/List'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <a className="logo">barbarojobs</a>
        </div>
      </header>
      <div className="Content">
        <InputBar/>
        <List/>
      </div>
    </div>
  );
}

export default App;
