import React from 'react'
import './projects.css'

const Projects = () => {
    return (
        <section className='section projecets'>
            <h2 className='section__title'>Projekti</h2>
            <span className='section__subtitle'>Pogledajte neke od naših prjekata</span>

            <div className='work__container container grid'>
                <div className='work__card'>
                    <img className='work__img'/>
                    <h3 className='work__title'>Projekat br 1</h3>
                    <p className='work__description'>
                        “Lorem ipsum” dummy text is used by many web-developers to test how their HTML 
                        templates will look with real data. Often, developers use third-party services 
                        to generate “Lorem ipsum” text, but now you can do that right in your editor. 
                        Just expand lorem or lipsum abbreviations to get the following snippet:
                    </p>
                    <div className='work__btn'>
                        <a href=''>
                            <button className='button button-flex'>View</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
