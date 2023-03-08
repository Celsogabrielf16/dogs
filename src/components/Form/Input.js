import React from 'react'
import './Input.css'

const Input = ({label, type, name}) => {
  return (
    <div className='Input'>
      <label>
        {label}
        <input name={name} type={type} />
      </label>
    </div>
  )
}

export default Input