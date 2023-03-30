import React from 'react'
import './Payment.css'
export default function Payment() {
  return (
    <>
    <main>
  <form action="#" method="post" style={{margin:"auto"}}>
      <h1>Payment form</h1>
      <section>        
        <label htmlFor="cc-number">Card number</label>
        <input id="cc-number" name="cc-number" autoComplete="cc-number" inputMode="numeric" maxLength="16" pattern="^4[0-9]{12}(?:[0-9]{3})?$" required/>
      </section>
      <section>        
        <label htmlFor="cc-name">Name on card</label>
        <input id="cc-name" name="cc-name" autoComplete="cc-name" maxLength="20" pattern="[\p{L} \-\.]+" required/>
      </section>
      <section id="cc-exp-csc">      
        <div>
          <label htmlFor="cc-exp">Expiry date</label>
          <input id="cc-exp" name="cc-exp" autoComplete="cc-exp" placeholder="MM/YY" maxLength="4" required/>
        </div> 
      </section>  
        <div>
          <label htmlFor="cc-csc">Security code</label>
          <input id="cc-csc" name="cc-csc" inputMode="numeric" maxLength="3" required/>
        </div>
      <button id="complete-payment">Complete payment</button>
    </form>
  </main>
    </>
  )
}
