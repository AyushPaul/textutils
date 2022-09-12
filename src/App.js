import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React , {useState} from 'react'
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  const [mode,setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const showAlert = (message,type) =>{
    setalert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setalert(null)
      
    }, 1500);
  }


  const toggleMode = () =>{
    if(mode === 'light')
    {
      setmode("dark")
      document.body.style.backgroundColor = '#343536'
      showAlert("Dark Mode Enabled","success")
    }
    else{
      setmode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled","success")
    }
  }
  return (
    <>
  <Router>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode = {mode} toggleMode={toggleMode}/>
    <Alerts alert={alert}/>
    <Switch>
        <Route exact path="/about" element={<div className="container my-3">
            {/* <TextForm heading="Enter the Text to Analyze " mode = {mode} showAlert={showAlert}/> */}
            <About mode={mode}/>
            </div>}></Route>
        <Route exact path="/" element={<div className="container my-3">
    <TextForm heading="Enter the Text to Analyze " mode = {mode} showAlert={showAlert}/>
    {/* <About/> */}
</div>}>
        </Route>
    </Switch>
  </Router>
{/* <Navbar/> */}


    </>
  );
}

export default App;
