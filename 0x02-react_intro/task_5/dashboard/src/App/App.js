import logo from './assets/holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">
          School dashboard
        </h1>
      </header>
      <hr className="hr" />
      <body className="App-body">
        <p>
        Login to access the full dashboard
        </p>
        <label for="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label for="password">Password: </label>
        <input type="password" id="password" name="password" />
        <button type="btn">OK</button>
      </body>
      <hr className="hr" />
      <footer className="App-footer">Copyright {getFullYear()} - {getFooterCopy(true)}</footer>
    </div>
  );
}

export default App;
