import React from 'react'
function Greet(props){
    // destructring props in functional components second way is {name, city} replace in the arguments of function instead of props
    const {name, city} = props
    return <h1>hello {name} from {city}</h1>
}

export default Greet