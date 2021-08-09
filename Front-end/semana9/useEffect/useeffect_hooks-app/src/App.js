import React, { useState, useEffect } from "react"
import Pokecard from "./component/pokecard/Index"
import axios from "axios"

 function App() {

  const [name, setName] = useState(null);
  const [weight, setWeight] = useState(null);
  const [type, setType] = useState(null);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then ((res) =>
    console.log(res)
    .catch((err) =>
    console.log(err))
  , []);

//   const changing = (event) => {
//     setName(event.target.value)

// }
 
return (
  <div>
    <span>oi</span>
    <select value={name} onChange={setName}>
             <option>1</option>
             <option>2</option>
             <option>3</option>

      <p>Nome: {name}</p>
         </select>
         <Pokecard/>
  </div>
);
}
  )}

  export default App