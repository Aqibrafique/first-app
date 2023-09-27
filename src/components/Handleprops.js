import React from 'react'

function Handleprops(props) {
  return (
    <>
  
    <h1 style={{color: props.status ? "green" : 'black'}}>{props.id}{props.data}</h1>
     <button onClick={() => props.deleteTask(props.id)}>x</button>
     <button onClick={()=>props.completeTask(props.id)}>Complete</button>

    </>
  )
}

export default Handleprops