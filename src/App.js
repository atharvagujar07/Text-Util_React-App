import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import TextFrom from './components/TextForm';
import Alert from './components/Alert';
function App() {
  // const[mode,setMode]=useState('light');
  const [mode,setMode]=useState('light');
  const [alertType,setAlertType]=useState('danger');
  const [alertMsg,setAlertMsg]=useState('Light Mode has been Activated');
  const toggleMode = ()=>{
    if(mode ==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#081b5a';
      setAlertType('success');
      setAlertMsg('Dark Mode has been Activated');
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='#8eeafd';
      setAlertType('danger');
      setAlertMsg('Light Mode has been Activated');
    }


    
  }
  return (
  <>
<Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode} aboutText=" About TextUtil"></Navbar>
<Alert alertType={alertType} alertMsg={alertMsg}></Alert>
<div className="container my-3">
<TextFrom heading="Text Utils"  mode={mode}  toggleMode={toggleMode}></TextFrom>
<About></About>
</div>

  </>
  );
}

export default App;
