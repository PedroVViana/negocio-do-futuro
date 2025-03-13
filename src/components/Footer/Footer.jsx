import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <section className='Footer'>
      <h2>Ficou com alguma dúvida que não foi esclarecida por aqui? <br />Nos chame no WhatsApp que ajudaremos você!</h2>
      <a href="#" target="_blank" className='whatsapp-button' rel="noopener noreferrer"><FaWhatsapp className="whatsapp-icon" /> Chamar no WhatsApp</a>
    </section>
  )
}

export default Footer