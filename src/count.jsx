import React from 'react'
import{useState} from 'react'

// function Count(props) {
//   return (
//     <div>
//         <h1>{props.name}count :{props.count} </h1>
//     </div>
//   )
// }
function Count (props){
    const {name,count}=props

    return(
        <div>
            <h1>{name} count {count}</h1>
        </div>

    )
}

export default Count