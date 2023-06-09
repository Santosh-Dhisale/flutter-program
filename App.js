import './App.css';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';
// import Company from './Company';
import Dashboard from './Dashboard';
import Signup from './Signup';


function App() {
 
  return (
    <div className="App">

      {/* <Company /> */}
      { <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>  }
      <center>
      <h4>First Click this Signup button and adding the all information such as name, password, e-mail, phone number and click the Register button and come the message 'user registered Successfully'.<br />
 Then the data will appear on the local storage..</h4>
      </center>
  
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
