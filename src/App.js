
import { useState } from 'react';
import './App.css';
import ClosePage from './Component/ClosePage/ClosePage';
import DonatePoup from './Component/DonatePoup/DonatePoup';

function App() {
  let [isVisiblePoup,setIsVisiblePoup]=useState(true)
  function closePoup(){
    setIsVisiblePoup(false)
  }
  function closeWithSend(value,name){
    if((name.length>0)){
      setIsVisiblePoup(false)
      console.log(value)
    }else{
      alert('Немає імені')
    }
  }
  return (
    <div className="App">
      <ClosePage closePoup={closePoup}/>
      <DonatePoup closeWithSend={closeWithSend} isVisiblePoup={isVisiblePoup} closePoup={closePoup}/>
    </div>
  );
}

export default App;
