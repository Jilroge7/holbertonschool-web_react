import logo from './holberton_logo.jpg';
import './App.css';

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
      </body>
      <hr className="hr" />
      <footer className="App-footer">
        <p>
        Copyright 2020 - holberton School
        </p>
      </footer>
    </div>
  );
}

export default App;
