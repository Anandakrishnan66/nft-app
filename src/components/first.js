import React,{useState} from 'react'
import Count from '../count'
export const First=()=>{
    const [count1,setCount]=useState(0)
   // let count=0
    const addC=()=>{
        setCount(count1+1)
       // count=count+1

        console.log(count1)
    }
  const obj={
      name:"hello",
      count:count1
  }
    return (
        <div>
            <button onClick={addC}>Add</button>
            <h1>1 st counter : {count1}</h1>
            <Count name = "2nd" count={count1}></Count>
             <Count {...obj}></Count>
        </div>
    )
}