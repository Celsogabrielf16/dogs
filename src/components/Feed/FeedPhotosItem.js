import React from 'react'
import Image from '../Helper/Image'
import './FeedPhotosItem.css'

const FeedPhotosItem = ({photo, setModalPhoto}) => {
  function handleClick() {
    setModalPhoto(photo)
  }

  return (
    <li className='photo' onClick={handleClick}>
      <Image src={photo.src} alt={photo.title}/>
      <span>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem