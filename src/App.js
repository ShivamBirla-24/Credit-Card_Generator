import React,{useState} from "react";
import Form from './components/Form';
import FrontCard from './components/FrontCard';
import BackCard from './components/BackCard';
import './App.css'
function App() {
   let [username,setUsername] = useState("");
    let [cardnumber,setCardNumber] = useState("");
    let [month,setMonth] = useState("");
    let [year,setYear] = useState("");
    let [cvc,setCvc] = useState("");
    let [error,setError]=useState(false);
    let [confirm,setConfirm]=useState(false);
  return (
    <div className="main">
         <div className="left">
             <FrontCard username={username} cardnumber={cardnumber} month={month} year={year} confirm={confirm} setConfirm={setConfirm} />
             <BackCard cvc={cvc} confirm={confirm}/>
         </div>
         <div className="right">
             <Form username={username} setUsername={setUsername} cardnumber={cardnumber} setCardNumber={setCardNumber} month={month} setMonth={setMonth} year={year} setYear={setYear} cvc={cvc} setCvc={setCvc} error={error} setError={setError} confirm={confirm} setConfirm={setConfirm}/>
         </div>
    </div>
  );
}

export default App;
