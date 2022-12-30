import React from 'react'
import './home.css'
const Home = () => {
    return (
        <section className='home section' id='home'>
            <div className='home__container container grid'>
                <div className='home__content grid'>
                
                    <div className='home__data'>
                        <h1 className='home__title'>Marko Đukić</h1>
                        <h3 className='home__subtitle'>Master inženjer gradjevinarstva</h3>
                
                        <button className='button button-flex'>Kontakt <i className="uil uil-phone-pause"></i></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
