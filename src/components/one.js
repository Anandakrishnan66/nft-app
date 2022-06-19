import React from 'react'
import Two from './two'

function One(props) {
  return (
    <div style={{backgroundColor:"yellow",width:"200px"}}>
        <h1>One</h1>
        {/* <Two data={props.data}></Two> */}
        <Two></Two>
    </div>
  )
}

export default One