import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [title, setTitle] = useState('...');

  useEffect(() => {
    const getTitle = async () => {
      const response = await fetch('/api/example');
      const data = await response.json();

      if (data.success) {
        setTitle(data.title);
      }
    }
    getTitle();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { title }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          We learn React + NodeJS
        </a>
      </header>
    </div>
  );
}

export default App;
