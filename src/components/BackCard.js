import React from 'react'
import './BackCard.css'
function BackCard({cvc,confirm}) {
      const cvv=document.getElementById('cvc');
      if(confirm){
        cvv.innerHTML=cvc;
      }
  return (
    <div className='backcard'>
        <div id='cvc'>
            000
        </div>
    </div>
  )
}

export default BackCard