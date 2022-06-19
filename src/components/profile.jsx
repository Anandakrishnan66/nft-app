import React from 'react'
import One from './one'

function Profile (props) {
  return (
    <div style={{backgroundColor:"blue"}}>Profile of me
      {/* <One data={props.data} ></One> */}
      <One></One>
    </div>
  )
}

export default Profile 