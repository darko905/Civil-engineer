import React from 'react'
import './service.css'
import { BiAperture } from "react-icons/bi";



const Service = () => {
    return (
        <section className='section service' id='service'>
            <h2 className='section__title'>Usluge</h2>
            <span className='section__subtitle'>Polje naše ekspertize</span>

            <div className='service__container container grid'>
                <div className='service__content'>
                    <div>
                        <BiAperture/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service
