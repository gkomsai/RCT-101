import React, {useState} from 'react'
import './Counter.css'

const Counter = () => { 
  const [count, setCount] = useState(0);
// let flag="red";
// count%2===0 ? (flag="green"):flag="red";
    const IncCount=() =>{
        setCount(count+1);
    }
    const DecCount=() =>{

        if(count > 0){
            setCount(count - 1);
        }
        else{
            alert('Can not decrement below zero');
        }
    }
           const DobCount=() =>{
        setCount(count*2);
    }

  return (
    <>

    <h1>Counter App</h1>
    
{/* <h1 className='show-count' style={{color:`${flag}`}} >{count}</h1> */}
{/* or by commeting the line no 7 and 8 and above line we can also do this in a single line.  */}
<h1 className='show-count' style={{color:count%2===0 ? "green":"red"}} >{count}</h1>

     <button className='btn1' onClick={IncCount}>Increase</button>
     <button className='btn2' onClick={DecCount}>Decrease</button>
     <button className='btn3' onClick={DobCount}>Double</button>

    </>
  )
}

export default Counter;