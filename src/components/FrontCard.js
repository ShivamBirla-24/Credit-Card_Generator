import React from 'react';
import './FrontCard.css';


function FrontCard({username,cardnumber,month,year,confirm,setConfirm}) {
  const firstFour=document.getElementById('first')
  const secondFour=document.getElementById('second')
  const thirdFour=document.getElementById('third')
  const fourthFour=document.getElementById('fourth')
  const name=document.getElementById('name')
  const mon=document.getElementById('month')
  const yr=document.getElementById('year')
  let number=cardnumber;
  
  let arr=[fourthFour,thirdFour,secondFour,firstFour];

  if(confirm){
      name.innerText=username.toUpperCase();
      
      for(let i=0;i<arr.length;i++){
          if((""+(number%10000)).length===4){
              arr[i].innerText=number%10000;
              number=Math.floor((number/10000));
              continue;
          }
          if((""+(number%10000)).length===3){
            arr[i].innerText="0" + number%10000;
            number=Math.floor((number/10000));
            continue;
          }
          if((""+(number%10000)).length===2){
            arr[i].innerText="00"+ number%10000;
            number=Math.floor((number/10000));
            continue;
          }
          if((""+(number%10000)).length===1){
            arr[i].innerText="000"+number%10000;
            number=Math.floor((number/10000));
            continue;
          }
      }
      

      mon.innerText=month
      yr.innerText=year
      setConfirm(false);
  }
  

  return (
    <>
      <div className='card'>
      <div className='upper'>
           <div className='whiteCircle'></div>
           <div className='blueCircle'></div>
      </div>
      <div className='lower'>
           <div className='number'>
              <span id='first'>0000</span><span id='second'>0000</span><span id='third'>0000</span><span id='fourth'>0000</span>
           </div>
           <div className='namedate'>
              <span id='name'>JANE APPLESEED</span>
              <span><span id='month'>00</span>/<span id='year'>00</span></span>
           </div>
      </div>
      </div>
    </>
  )
}

export default FrontCard