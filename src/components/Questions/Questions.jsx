import React from 'react'
import './Questions.css'

function Questions() {
  return (
    <section className='Questions'>
      <h2>Dúvidas Frequentes</h2>
      <ul>
        <li>
          <h3>Preciso ter experiência para aplicar o que está no e-book?</h3>
          <p>Não! O conteúdo é didático e pensado para quem está começando do zero</p>
        </li>
        <li>
        <h3>O livro é teórico ou prático?</h3>
        <p>Ele traz um passo a passo prático para você aplicar imediatamente.</p>
        </li>
        <li>
        <h3>Como funciona a mentoria de 30 dias?</h3>
        <p>Ao se Inscrever, você recebe acesso a um grupo exclusivo e materiais extras para potencializar seus resultados.</p>
        </li>
      </ul>
    </section>
  )
}

export default Questions