// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const initialState = [
    "1", "2", "3", "4", "5"
  ]
  const initialBuang = [
    "1", "2", "3", "4", "5"
  ]
  const [number, setNumber] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [buang, setBuang] = useState(initialBuang)
  function handleDraw(event){
    event.preventDefault()
    setLoading(true)
    let random = Math.ceil(Math.random()*buang.length)
    let changeArray = [...buang]
    
    let foundWhite = number.indexOf('' + random)
    setBuang(changeArray.splice(foundWhite, 0, ''))
    console.log(buang, "<<<<<<<<<< BUANG")
    if (foundWhite){
      let newNumber = [...number]
      newNumber[foundWhite] += " blue"
      setNumber(newNumber)
    }
    setLoading(false)
  }
  if(loading === true){
    return <div>loading...</div>
  }
  return (
    <div className="App">
      
<div className="container">
<div className="card" style={{marginTop: "10px"}}>
  <div className="card-body">
    <div className={"border " + number[0]} id="1" style={{marginBottom: "8px"}}>1</div>
    <div className={"border " + number[1]} id="2" style={{marginBottom: "8px"}}>2</div>
    <div className={"border " + number[2]} id="3" style={{marginBottom: "8px"}}>3</div>
    <div className={"border " + number[3]} id="4" style={{marginBottom: "8px"}}>4</div>
    <div className={"border " + number[4]} id="5" style={{marginBottom: "8px"}}>5</div>

    <button type="button" onClick={handleDraw} className="btn btn-primary" style={{marginRight: "8px"}}>Draw</button>
    <button type="button" className="btn btn-outline-primary">Clear</button>
  </div>
  </div>
</div>
</div>
  );
}

export default App;
