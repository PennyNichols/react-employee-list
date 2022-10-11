import React from 'react';
import {data} from '../../helpers/data'

const Counter = () => {
  return (
    <div  style={{fontWeight:'bolder'}}>Number of Employees: {data.length}</div>
  )
}

export default Counter