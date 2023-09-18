import React,{useState} from "react";
import "./Form.css"

function Form(){
    let [username,setUsername] = useState("");
    let [cardnumber,setCardNumber] = useState("");
    let [month,setMonth] = useState("");
    let [year,setYear] = useState("");
    let [cvc,setCvc] = useState("");
    let [error,setError]=useState(false)
    function isValid(regex,string){
        return regex.test(string)
    }
    
    function handleSubmit(e){
          e.preventDefault();
          if(username==0||cardnumber==0||month==0||year==0||cvc==0){
            setError(true);
          }
    }
 
    return(
        <div className="main">
            <form onSubmit={handleSubmit}>
                <div className="gapp">
                    <p>CARDHOLDER NAME</p>
                    <input className="inputbox cardname" type="text" placeholder="e.g. Jane Appleseed" 
                    onChange={(e)=>{setUsername(e.target.value);}}>
                    </input>
                    {(error && username.length==0)?<p className="warningMsg">CardHolder Name Required</p>:""}
                    {(!isValid(/^[a-zA-Z]*$/,username))?<p className="warningMsg">Only Alphabets are allowed</p>:""}
                </div>


                <div className="gapp">
                    <p>CARD NUMBER</p>
                    <input className="inputbox cardnumber" type="number" placeholder="e.g. 1234 5678 9123 0000" onChange={(e)=>setCardNumber(e.target.value)}>
                    </input>
                    {(error&&cardnumber.length==0)?<p className="warningMsg">Card number required</p>:""}
                    {(!isValid(/^(?:\d{16})?$/,cardnumber))?<p className="warningMsg">Enter 16 digit Valid Card Number</p>:""}
                </div>


                <div className="date gapp">
                    <div className="datediv">
                        <p>EXP.DATE (MM/YY)</p>
                        <div className="dateMMYY">
                            <input className="inputbox dateinput" placeholder="MM" type="number" onChange={(e)=>setMonth(e.target.value)}></input>
                            <input className="inputbox dateinput" placeholder="YY" type="number" onChange={(e)=>setYear(e.target.value)}></input>
                        </div>
                        {(error&& month.length==0 && year.length==0)?<p className="warningMsg">Expiry Date required</p>:""}
                        {(!isValid(/^(0[1-9]|1[0-2])$|^ *$/,month))?<p className="warningMsg">Enter Valid Month</p>:""}
                        {(!isValid(/^(0[1-9]|[1-9][0-9])$|^ *$/,year))? <p className="warningMsg">Enter Valid Year</p>:""}
                </div>


                    <div className="cvvdiv">
                        <p>CVC</p>
                        <input className="inputbox cvvinput" placeholder="e.g. 123" type="number" onChange={(e)=>setCvc(e.target.value)}></input>
                        {(error&& cvc.length==0)?<p className="warningMsg">CVC is required</p>:""}
                        {(!isValid(/^\d{3}$|^$/,cvc))?<p className="warningMsg">CVC must be 3 digit number</p>:""}
                    </div>
                </div>
        

                <div className="gapp">
                    <button className="btn">Confirm</button>
                </div>
            </form>
        </div>
    );
}

export default Form;