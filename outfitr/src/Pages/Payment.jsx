import React from "react";
import "./Payment.css";
import { Spinner } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
export default function Payment() {
  let nav=useNavigate()
  let pay=()=>{
    let load=document.getElementById("spinner")
    let gif=document.getElementById("gif")
    let main=document.getElementById("main")
    main.style.display="none"
    load.style.display="flex"
    setTimeout(() => {
      load.style.display="none"
      gif.style.display="flex"
      gif.style.alignItems="center"
    }, 2000);
    setTimeout(() => {
      nav("/")
    }, 3000);
  }
  return (
    <div style={{ marginTop: "7%" }}>
      <main id="main">
        <h1>Payment form</h1>
        <section>
          <label htmlFor="cc-number">Card number</label>
          <br />
          <input
            id="cc-number"
            name="cc-number"
            autoComplete="cc-number"
            inputMode="numeric"
            maxLength="16"
            pattern="^4[0-9]{12}(?:[0-9]{3})?$"
            required
          />
        </section>
        <section>
          <label htmlFor="cc-name">Name on card</label>
          <br />
          <input
            id="cc-name"
            name="cc-name"
            autoComplete="cc-name"
            maxLength="20"
            pattern="[\p{L} \-\.]+"
            required
          />
        </section>
        <section id="cc-exp-csc">
          <div>
            <label htmlFor="cc-exp">Expiry date</label>
            <br />
            <input
              id="cc-exp"
              name="cc-exp"
              autoComplete="cc-exp"
              placeholder="MM/YY"
              maxLength="4"
              required
            />
          </div>
        </section>
        <section>
          <label htmlFor="cc-csc">Security code</label>
          <br />
          <input
            id="cc-csc"
            name="cc-csc"
            inputMode="numeric"
            maxLength="3"
            required
          />
        </section>
        <br />
        <div style={{ display: "flex", gap: "20px" }}>
          <button id="complete-payment" onClick={pay}>Pay</button>
          <button id="cancel">Cancel</button>
        </div>
      </main>
      <Spinner id="spinner"
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  ml="50%"
  mt="20%"
/>
      <img src="https://cdn.dribbble.com/users/2139038/screenshots/4434155/ui-animation.gif" id="gif" style={{margin:"auto",display:"none",width:"50%"}} alt="" />
    </div>
  );
}
