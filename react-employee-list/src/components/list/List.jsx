import React from 'react';
import {data} from '../../helpers/data'
import EmployeeCard from './EmployeeCard';
const List = () => {
  return (
    <div>
        {data.map(item => <EmployeeCard data={item}/>)}
    </div>
  )
}

export default List