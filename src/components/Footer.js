import React from 'react'
import { ReactComponent as Svg } from '../Assets/dogs-footer.svg'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='FooterComponent'>
      <Svg/>
      <p>Dogs. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer