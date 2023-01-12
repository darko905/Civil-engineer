import React, { useState } from 'react'
import './projects.css'

import data from './data'

const Projects = () => {
    const [projects, setProjects] =useState(data);


    return (

    
        <section className='section projecets' id='project'>
            <h2 className='section__title'>Projekti</h2>
            <span className='section__subtitle'>Pogledajte neke od naših prjekata</span>
            <div className='work__container container grid'>
                {
                    projects.map((project)=>{
                        return (
                            <div className='work__card' key={project.id}>
                                    <img className='work__img' src={project.image}/>  
                                    <h3 className='work__title'>{project.title}</h3>
                                    <p className='work__description'>
                                        {project.description}
                                    </p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    
    )
}

export default Projects
