import React, { useState } from 'react'
const Sample = (props) => {
  
  const increment=()=>{
    setCount(count+1)
    console.log('clicked',count)
  }
  const decrement=()=>{
    if(count>0){
      setCount(count-1)
    }else{
     console.log('not valid')
    }
      
  }
  const [count,setCount]=useState(0)
  return (
    <div>
      <button onClick={increment}>+</button>
      <h2>{count}</h2>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Sample