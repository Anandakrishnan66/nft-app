import React,{useState} from 'react'

function Effect() {
    const [count,setState]=useState(0)
  return (
    <div>
        <button onClick={()=>setState(count+1)}>increment</button>
        <h1>Effect {count}</h1>
    </div>
  )
}

export default Effect