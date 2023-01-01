import React from 'react'
import './service.css'
import { BiEdit, BiBuildingHouse } from "react-icons/bi";
import { TbRoad } from "react-icons/tb";



const Service = () => {
    return (
        <section className='section service' id='service'>
            <h2 className='section__title'>Usluge</h2>
            <span className='section__subtitle'>Polje naše ekspertize</span>

            <div className='service__container container grid'>
                <div className='service__content'>
                    <div>
                        <BiEdit className='service__icons'/>
                        <h3 className='service__title'>Test Naslov</h3>
                    </div>
                    <p className='service__descritpion'>Izrada projektno tehničke dokumentacije za izgradnju i održavanje svih vrsta puteva i ulica sa pratećim studijama i elaboratima.</p>
                </div>
                <div className='service__content'>
                    <div>
                        <BiBuildingHouse className='service__icons'/>
                        <h3 className='service__title'>Test Naslov</h3>
                    </div>
                    <p className='service__descritpion'>Izrada projektno tehničke dokumentacije za izgradnju i održavanje svih vrsta puteva i ulica sa pratećim studijama i elaboratima.</p>
                </div>
                <div className='service__content'>
                    <div>
                        <TbRoad className='service__icons'/>
                        <h3 className='service__title'>Test Naslov</h3>
                    </div>
                    <p className='service__descritpion'>Izrada projektno tehničke dokumentacije za izgradnju i održavanje svih vrsta puteva i ulica sa pratećim studijama i elaboratima.</p>
                </div>
            </div>
        </section>
    )
}

export default Service
