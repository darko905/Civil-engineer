import React from 'react'
import './footer.css'
import { FiInstagram, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className='footer'>
    <div className='footer__container container'>
        <h3 className='footer__title'>M.Đ.</h3>

        <ul className='footer__list'>
            <li>
                <a href='#home' className='footer__link'>Pocetna</a>
            </li>
            <li>
                <a href='#about' className='footer__link'>O nama</a>
            </li>
            <li>
                <a href='#project' className='footer__link'>Projekti</a>
            </li>
        </ul>

        <div className='footer__social'>
            <a href='#' aria-label='instagram' className='footer__social-link' target="_blank">
                <FiInstagram/>
            </a>
            <a href='#' aria-label='Linkedin' className='footer__social-link' target="_blank">
                <FiFacebook/>
            </a>                  
        </div>
        <span className='footer__copy'>
            &#169; 2022 Copyrights All rights reserved.<br/>
            Design by <a href='https://darkodjukic.netlify.app/'>Darko</a>
        </span>
    </div>
</footer>
  )
}

export default Footer
