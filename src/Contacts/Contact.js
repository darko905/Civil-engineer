import React from 'react'
import './contact.css'
import { MdEmail, MdPhoneEnabled, MdSend } from "react-icons/md";
import { FaStreetView } from "react-icons/fa";

const Contact = () => {
  return (
    <section className='section contact' id='contact'>
        <h2 className='section__title'>Kontakt</h2>
        <span className='section__subtitle'>Budite slobodni kontaktirajte nas</span>
        <div className='contact__container container grid'>
                <div className='contact__content'>
                    <h3 className='contact__title'>Kontakt podaci</h3>

                    <div className='contact__info'>
                        <div className='contact__card'>
                            <MdEmail/>

                            <h3 className='contact__card-title'>E-mail adresa:</h3>
                            <span className='contact__card-data'>markodjukic@gmiail.com</span>

                        </div>

                        <div className='contact__card'>
                            <MdPhoneEnabled/>

                            <h3 className='contact__card-title'>Broj telefona:</h3>
                            <span className='contact__card-data'>+38169555666</span>

                        </div>

                        <div className='contact__card'>
                            <FaStreetView/>

                            <h3 className='contact__card-title'>Adresa:</h3>
                            <span className='contact__card-data'>Novi Sad, Serbia</span>

                        </div>
                    </div>
                </div>
                <div className='contact__content'>
                    <h3 className='contact__title'>Recite zdravo</h3>

                    <form className='contact__form'>
                        <div className='contact__form-div'>
                            <label className='contact__form-tag'>ime</label>
                            <input 
                            type="text" 
                            name='name' 
                            className='contact__form-input' 
                            placeholder='Unesite vase ime'/>
                        </div>
                        <div className='contact__form-div'>
                            <label className='contact__form-tag'>Mail</label>
                            <input 
                            type="email" 
                            name='email' 
                            className='contact__form-input' 
                            placeholder='Unesite vas mail'/>
                        </div>
                        <div className='contact__form-div contact__form-area'>
                            <label className='contact__form-tag'>Poruka</label>
                            <textarea 
                            name='message' 
                            cols="30" 
                            rows="10"
                            className='contact__form-input' 
                            placeholder='Napiste vasu poruku'
                            ></textarea>
                        </div>
                        <button className='button button-flex'>Posalji <MdSend/></button>

                    </form>
                </div>
            </div>
    </section>
  )
}

export default Contact
