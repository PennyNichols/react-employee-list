import React from 'react'

const EmployeeCard = (props,index) => {
  return (
    <div key={props.data.index} style={{display: 'flex', justifyContent:'space-around', marginTop:'2rem'}}>
        <img src={props.data.picture.large} alt={props.data.name.title + props.data.name.first + props.data.name.last} style={{borderRadius:'50%'}}/>
        <div style={{width:'15rem'}}>
            <p className="name" style={{fontWeight:'bolder'}}>{props.data.name.first} {props.data.name.last}</p>
            <p className="email">{props.data.email}</p>
            <p className="age">{props.data.dob.age}</p>
        </div>
    </div>
  )
}

export default EmployeeCard