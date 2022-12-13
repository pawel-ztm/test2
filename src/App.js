import logo from './logo.svg';
import './App.css';
import paragraf from './paragraf';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Naucz się React JS!
        </a>
        <paragraf />
      </header>
    </div>
  );
}

export default App;
