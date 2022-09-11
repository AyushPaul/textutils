import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React , {useState} from 'react'
function App() {
  
  const [mode,setmode] = useState("light")
  const toggleMode = () =>{
    if(mode === 'light')
    {
      setmode("dark")
    }
    else{
      setmode("light")
    }
  }
  return (
    <>
    
<Navbar title="TextUtils" aboutText="About TextUtils" mode = {mode} toggleMode={toggleMode}/>
{/* <Navbar/> */}
<div className="container my-3">
<TextForm heading="Enter the Text to Analyze"/>
{/* <About/> */}
</div>

    </>
  );
}

export default App;
