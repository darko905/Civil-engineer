import React, { useState } from 'react'
import './header.css';


const Header = () => {
    window.addEventListener('scroll', function(){
    const header = this.document.querySelector('.header');

    if(this.scrollY >= 80) {
        header.classList.add('scroll-header')
        }
        else{
        header.classList.remove('scroll-header');
        }
    })

    const [Toogle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');

    return (
        <header className='header'>
            <nav className='nav container'>
                <a className='nav__logo'>M.Đ.</a>

                <div className={Toogle ? "nav__menu show-menu": "nav__menu"}>
                    <ul className='nav__list grid'>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                NASLOVNA
                            </a>
                        </li>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                O NAMA
                            </a>
                        </li>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <a href='' onClick={() => setActiveNav('')} className={activeNav === "" ? "nav__link active-link" : "nav__link"}>
                                USLUGE
                            </a>
                        </li>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <a href='' onClick={() => setActiveNav('')} className={activeNav === "" ? "nav__link active-link" : "nav__link"}>
                                PROJEKTI
                            </a>
                        </li>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <a href='' onClick={() => setActiveNav('')} className={activeNav === "" ? "nav__link active-link" : "nav__link"}>
                                LOKACIJA
                            </a>
                        </li>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <a href='' onClick={() => setActiveNav('')} className={activeNav === "" ? "nav__link active-link" : "nav__link"}>
                                KONTAKT
                            </a>
                        </li>
                    </ul>
                    
                    <i className="uil uil-times nav__close" onClick={()=> showMenu(!Toogle)}></i>
                    
                    
                </div>

                <div className='nav__toggle' onClick={()=> showMenu(!Toogle)}>
                    <i className="uil uil-bars"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
