import { useEffect, useState } from 'react'
import './DonatePoup.css'
import close from './img/close.png'
import google from '../img/google.png'
import applle from '../img/apple.png'
// import Card from '../../Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { createValue} from '../../features/counter/CounterSlice';
function DonatePoup(props){
    let [moneyWantToAdd,setMoneyWantToAdd]=useState(0)
    const dispatch = useDispatch()
    const allMoney=useSelector(state=>state.counter.allDonated)
  useEffect(function(){
    dispatch(createValue(moneyWantToAdd))

  },[moneyWantToAdd,dispatch])
    return(
        <div className='DonatePoup' style={(props.isVisiblePoup) ? {opacity:'1',zIndex:'2'}:{opacity:'0',zIndex:'-1'}}>
            {/* <Card/> */}
        <img className='closeBtn' src={close} alt="" onClick={props.closePoup} />
        <div className="DonatePoup__text">
            Please Donate
            
        </div>
        <div className="DonatePoup__money__added">Already donated: <span className='DonatePoup__money__added__amount'>{allMoney}</span> $</div>
        <input type="number" className='DonatePoup__money__input' tu value={moneyWantToAdd} onChange={e=>setMoneyWantToAdd(e.target.value)} />
        <div className="DonatePoup__btns">
            <div className="DonatePoup__btns__btn"  onClick={() => setMoneyWantToAdd(Number(moneyWantToAdd)+100)}>100</div>
            <div className="DonatePoup__btns__btn"  onClick={() => setMoneyWantToAdd(Number(moneyWantToAdd)+500)}>500</div>
            <div className="DonatePoup__btns__btn"  onClick={() => setMoneyWantToAdd(Number(moneyWantToAdd)+1000)}>1000</div>
        </div>
        <div className="DonatePoup__inputs">
            <input type="text" className='DonatePoup__inputs__input DonatePoup__inputs__btn' id='DonatePoup__inputs__input' placeholder='Name' />
            <button className='DonatePoup__inputs__btn' onClick={()=>props.closeWithSend(moneyWantToAdd,document.getElementById('DonatePoup__inputs__input').value)}>Pay</button>
            
            <button className='DonatePoup__inputs__btn' onClick={()=>props.closeWithSend(moneyWantToAdd,document.getElementById('DonatePoup__inputs__input').value)}><img  className='DonatePoup__inputs__btn__img' src={google} alt="" />  Pay</button>
            <button className='DonatePoup__inputs__btn' onClick={()=>props.closeWithSend(moneyWantToAdd,document.getElementById('DonatePoup__inputs__input').value)}><img className='DonatePoup__inputs__btn__img' src={applle}  alt="" /> Pay</button>
            
        </div>
        </div>
    )
}
export default DonatePoup