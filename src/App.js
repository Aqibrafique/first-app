import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import FunctionClick from "./components/FunctionClick";
import ListRendering from "./components/ListRendering";
import FormHandle from "./components/FormHandle";
import Handleprops from "./components/Handleprops";
import { useState } from "react";
import AxiosApi from "./components/AxiosApi";


function App() {
                                        // todo data start
//   const [input, setInput] = useState("");
//   const [arrInput, setArrInput] = useState([]);
//   const deleteTask = (id) => {
//     const newlist = arrInput.filter((event) => {
//       return event.id !== id;
//     });
//     setArrInput(newlist);
//   };
//   const insertTask = () => {
//     const task = {
//       id: arrInput.length === 0 ? 1 : arrInput[arrInput.length-1].id+1,
//       data: input,
//       status: false
//     };
//     setArrInput([...arrInput, task]);
//   };
//   const completeTask =(id) => {
// setArrInput(
//   arrInput.map((event)=>{
//     if(event.id===id){
//       return {...event, status: true}
//     }else{
//       return {event }
//     }
    
//   })

// )
//   }
                                                // todo data end 
  return (
    <div className="App">
      {/* <Greet name="aqib" city="okara"/> */}
      {/* <FunctionClick/> */}
      {/* <ListRendering/> */}
      {/* <FormHandle/> */}
      {/* {planets.map((e,key)=>{
        if(e.ishost) return <h1>{e.name}</h1>
      })} */}
      <AxiosApi/>
                                       {/* start todo */}
      {/* <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={insertTask}>enter</button>
      </div>
      <div>
        {arrInput.map((event) => {
          return (
          <Handleprops id={event.id} data={event.data} status={event.status} deleteTask={deleteTask} completeTask={completeTask}/>
          
          );
        })}
      </div> */}

                                         {/* end todo */}
    </div>
  );
}

export default App;
