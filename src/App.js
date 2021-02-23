import logo from './logo.svg';
import './App.css';

function App() {
  console.log(process.env)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Process.env object printed below:</h1>
        <div>
          {Object.keys(process.env).map(key => {
            return (
              <p>{key}: {process.env[key]}</p>
            )
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
