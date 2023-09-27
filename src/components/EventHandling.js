import React from 'react'

export default function eventhandling() {
    const count = () => {
         console.log("button clicked");
    } 
  return (
   <button onClick={count}></button>
  )
}

