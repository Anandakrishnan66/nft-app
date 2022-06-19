import React, { useContext } from 'react'
import { AppContext } from '../Appcontext'
function Two(props) {
    const {data}=useContext(AppContext)
  return (
    <div style={{backgroundColor:"red",width:"100px"}}>
    Two
    {/* {props.data} */}
    {data}
    </div>
  )
}

export default Two