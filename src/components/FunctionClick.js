import React, { useState } from 'react'

function FunctionClick() {
    const [count , setcount] = useState(0);
    function clickHandler(){
        setcount(count+1)
        console.log(count)
    }
    function resetHandler(){
        setcount(0)
        console.log(count)
    }
    function addfive(){
        setcount(count+5)
        console.log(count)
    }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={clickHandler}>Click</button>
    <button onClick={resetHandler}>Reset</button>
    <button onClick={addfive}>Add 5</button>
    </>
  )
}

export default FunctionClick