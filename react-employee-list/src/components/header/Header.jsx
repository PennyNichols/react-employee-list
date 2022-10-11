import React from 'react'

const Header = (props) => {
  return (
    <div  style={{fontSize:'2rem', letterSpacing:'.2rem', margin: '1rem'}}>{props.title}</div>
  )
}

export default Header