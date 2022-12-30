import React from 'react'
import './about.css'
import AboutImg from '../assets/about-img.jpeg'

const About = () => {
    return (
        <section className='section about' id='about'>
            <h2 className='section__title'>O NAMA</h2>
            <span className='section__subtitle'>Dozvolite da Vam se predstavim</span>
            <div className='about__container container grid'>
                
                <div className='about__data'>
                    <h3 className='about__title'>Rezime</h3>
                    <p className='about__descritpion'>
                        Vtraženje izazovne karijere orijentisane na razvoj u dinamičnoj i progresivnoj organizaciji gde su posvećenost i sposobnost efikasnog upravljanja zadacima preduslov za napredovanje organizacije.
                        Vtraženje izazovne karijere orijentisane na razvoj u dinamičnoj i progresivnoj organizaciji gde su posvećenost i sposobnost efikasnog upravljanja zadacima preduslov za napredovanje organizacije.
                    </p>
                    <a>
                        <button className='button button--flex'>
                            Kontakt
                        </button>
                    </a>
                </div>
                <img src={AboutImg} alt='About image' className="about__img"/>
                
            </div>
                
        </section>
    )
}

export default About
