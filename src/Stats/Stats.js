import React from 'react'
import './stats.css'

const Stats = () => {
    return (
        <section className='section stats'>
            <div className='stats__container container grid'>
                <div className='stats__content'>
                    <h3 className='stats__title'>5</h3>
                    <p className='stats__description'>Godina poslovanja</p>
                </div>
                <div className='stats__content'>
                    <h3 className='stats__title'>50</h3>
                    <p className='stats__description'>Uspesnih projekata</p>
                </div>
                <div className='stats__content'>
                    <h3 className='stats__title'>10</h3>
                    <p className='stats__description'>Godina poslovanja</p>
                </div>
            </div>
        </section>
    )
}

export default Stats
