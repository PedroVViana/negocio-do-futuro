import React from 'react'
import './Highlights.css'

function Highlights() {
  return (
    <section className='highlight'>
      <div className='highlight__container'>
        <h2 className='highlight__title'>Por que este <br />E-Book é diferente?</h2>
        <ul className='highlight__list'>
          <li className='highlight__item'><span className='Negrito'>Focado em Resultados:</span>Criado para quem quer aprender e ganhar dinheiro com tráfego pago</li>
          <li className='highlight__item'><span className='Negrito'>Linguagem Simples e Direta:</span>Sem termos complicados ou técnicos díficeis.</li>
          <li className='highlight__item'><span className='Negrito'>Didático e Prático:</span>Passo a passo para você aplicar no dia a dia.</li>
        </ul>
      </div>
    </section>
  )
}

export default Highlights