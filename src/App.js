import './App.css';
import {useState} from 'react';

const LoginForm = ({onLogin}) => {
  const [text, setText] = useState("Login");
  const [number, setNumber] = useState("Password");


  return (
    <div className='container'>
 <form className="form">
  <div>
    <label htmlFor="login">Input login (min 6 symbols)</label>
    <div>
      <input onChange={(e) => setText(e.target.value)}
                        type="text" 
                        value={text} 
                        placeholder="Login"/>
    </div>
      
  </div>    
    <div>
      <label htmlFor="password">Input password (min 6 number)</label>
      <div>
      <input onChange={(e) => setNumber(e.target.value)}
                        type="number" 
                        value={number} 
                        placeholder="Password"/> 
      </div>
       
    </div>
            
      <button
        onClick={() => onLogin({text, number})}  
        disabled = {
          (text.length > 6 ? false : true) ||
          (number.length > 6 ? false : true)
        }
      > next
      </button>
 </form>

</div>
   
  )
}

function App() {
  return (
    <div className="App">
     <LoginForm onLogin={({text, number}) => console.log (text, number)}/>
    </div>
  );
}

export default App;


