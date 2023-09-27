import React, { useState } from "react";
import axios from "axios";

const AxiosApi = () => {
  const [getInput, setGetInput] = useState([]);
  const familyFunction = (passData) => {
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${passData}`).then((res) => {
      setGetInput(res.data[0])
      console.log(getInput)
    });
  };

  return (
    <>
    <div>
      <h1>Excuse generator</h1>
      <button onClick={()=>familyFunction("family")}>family</button>
      <button onClick={()=>familyFunction("office")}>office</button>
      <button onClick={()=>familyFunction("party")}>party</button>
    </div>
    {getInput?.excuse}
    </>
  );
};

export default AxiosApi;
