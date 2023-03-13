import React from 'react'
import './Image.css'

const Image = ({alt, ...props}) => {
  const [skeleton, setSkeleton] = React.useState(true)

  function handleLoad({target}) {
    setSkeleton(false)
    target.style.opacity = 1
  }
  return (
    <div className='ImageComponent'>
      {skeleton && <div className="skeleton"></div>}
      <img onLoad={handleLoad} className='img' alt={alt} {...props}/>
    </div>
  )
}

export default Image