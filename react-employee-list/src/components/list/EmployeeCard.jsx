import React from 'react'

const EmployeeCard = (props,index) => {
  return (
    <div key={props.data.index} style={{display: 'flex', justifyContent:'center', marginTop:'2rem'}}>
        <img src={props.data.picture.large} alt={props.data.name.title + props.data.name.first + props.data.name.last} style={{borderRadius:'50%', boxShadow:'0px 3px 5px 0px black'}}/>
        <div style={{width:'15rem',textAlign:'left', marginLeft:'2rem'}}>
            <p className="name" style={{fontWeight:'bolder', fontSize:'1.5rem',margin:'0',marginTop:'1rem',letterSpacing:'.1rem'}}>{props.data.name.first} {props.data.name.last}</p>
            <p className="email" style={{color:'gray',margin:'0'}}>{props.data.email}</p>
            <p className="age" style={{color:'gray',margin:'0'}}>{props.data.dob.age}</p>
        </div>
    </div>
  )
}

export default EmployeeCard