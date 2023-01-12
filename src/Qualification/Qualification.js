import React, { useState } from 'react'
import './qualification.css'
import {  FaGraduationCap, FaBriefcase } from "react-icons/fa";
import {  SlCalender } from "react-icons/sl";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    }
    return (
        <section className='section qualification' id='qualification'>
            <h2 className='section__title'>Obrazovanje</h2>
            <span className='section__subtitle'>Moje lično obrazovanje i iskustvo</span>
            
            <div className='qualification__container container'>
                <div className='qualification__tabs'>
                    <div className={toggleState === 1 ? 'qualification__button qualification__active button-flex' : 'qualification__button button-flex'}
                    onClick={()=> toggleTab(1)}
                    >
                        <FaGraduationCap className='qualification__icon'/> Edukacija
                    </div>

                    <div className={toggleState === 2 ? 'qualification__button qualification__active button-flex' : 'qualification__button button-flex'}
                    onClick={()=> toggleTab(2)}
                    >
                        <FaBriefcase className='qualification__icon'/> Iskustvo
                    </div>

                </div>

                <div className='qualification__sections'>
                    <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>Građevniska skola</h3>
                                <span className='qualification__subtitle'>Bratunac</span>
                                <div className='qualification__calender'>
                                    <SlCalender/> 2011 - 2015
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div>
                                <h3 className='qualification__title'>Fakultet građevinarstva</h3>
                                <span className='qualification__subtitle'>Subotica - Institut</span>
                                <div className='qualification__calender'>
                                <SlCalender/> 2015 - 2019
                                </div>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>Master</h3>
                                <span className='qualification__subtitle'>Subotica - Institut</span>
                                <div className='qualification__calender'>
                                <SlCalender/> 2019 - 2020
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div>
                                <h3 className='qualification__title'>Lorem</h3>
                                <span className='qualification__subtitle'>Novi Sad - Institut</span>
                                <div className='qualification__calender'>
                                <SlCalender/> 2000- 2000
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>Lorem ispum 1</h3>
                                <span className='qualification__subtitle'>Lorem ipsum - Institut</span>
                                <div className='qualification__calender'>
                                <SlCalender/> 2000 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div>
                                <h3 className='qualification__title'>Lorem ispum 2</h3>
                                <span className='qualification__subtitle'>Lorem ipsum- Institut</span>
                                <div className='qualification__calender'>
                                <SlCalender/> 2000 - Present
                                </div>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>lorem ispum 3</h3>
                                <span className='qualification__subtitle'>Lorem - ispum</span>
                                <div className='qualification__calender'>
                                <SlCalender/> 2000 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Qualification
