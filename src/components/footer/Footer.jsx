import React from 'react'
import './Footer.css'
import {BsFillSuitHeartFill} from 'react-icons/all'
const Footer = () => {
  return (
    <footer>
        <span className='footer-first-text'>Copyright 2021-22 © viho All rights reserved.</span>
        <span className='footer-second-text'>Hand crafted & made with<BsFillSuitHeartFill className='fa-heart'/></span>
    </footer>
  )
}

export default Footer