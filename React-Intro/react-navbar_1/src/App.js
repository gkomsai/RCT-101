import logo from './logo.svg';
import './App.css';
import Logo from './Components/Logo';
import Links from './Components/Links';
import Button from './Components/Button';

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: 'black',
  boxSizing: 'border-box',
  padding: '1rem'
}



function App() {
  return (

    <>

      <div className="navbar" style={navbarStyle}  >
        <Logo />
        <Links />
        <Button />
      </div>

      <div className="App">
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
          Learn React
        </a>
      </div>
    </>
  );
}

export default App;
