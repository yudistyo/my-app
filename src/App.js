import React,{Component,useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [Input,setInput]=useState('');
  const [count, setCount] = useState(0);  

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type='text' value={Input} onChange={event => setInput(event.target.value)} placeholder='User name' style={{marginTop:20}}></input>
       <input type='password' placeholder='Password' style={{marginTop:20}}></input>
       <button style={{marginTop:20}} onClick={()=>{alert('ok')}}>Login</button>
       
       <p>{Input}</p>
        <a style={{marginTop:20}}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
    </div>
  );
}

export default App;
