
import { useState } from 'react';
import './App.css';
import ClosePage from './Component/ClosePage/ClosePage';
import DonatePoup from './Component/DonatePoup/DonatePoup';

function App() {
  let [isVisiblePoup,setIsVisiblePoup]=useState(true)
  let [moneyDonnated,setmoneyDonnated]=useState(localStorage.getItem('moneyDonnated__LS') || 0)
  function closePoup(){
    setIsVisiblePoup(false)
  }
  function closeWithSend(value,name){
    if((name.length>0)){
      setIsVisiblePoup(false)
      console.log(value,moneyDonnated)
      localStorage.setItem('moneyDonnated__LS',Number(value)+Number(moneyDonnated))
      setmoneyDonnated(Number(value)+Number(moneyDonnated))
  
      alert('Thank you')
    }else{
      alert('No name')
    }
  }
  return (
    <div className="App">
      <ClosePage isVisiblePoup={isVisiblePoup} closePoup={closePoup}/>
      <DonatePoup moneyDonnated={moneyDonnated} closeWithSend={closeWithSend} isVisiblePoup={isVisiblePoup} closePoup={closePoup}/>
    </div>
  );
}

export default App;
