import React from 'react'
import './About.css';
import star from '../../assets/Photo/about-star.png';
import perfil from '../../assets/Photo/perfil.png';

function About() {
  return (
    <section className='About'>
      <div className="starBG1"><img src={star} alt="" /></div>
      <div className="about-container">
        <div className="about-content">
          <h2><span className='text-gradient'>Quem Sou EU</span> Para Te Ensinar Tudo Isso?</h2>
          <p>Meu nome é João e <span className='Negrito'>Já investi mais de R$1.000.000,00 em anúncios pagos,</span> ajudando inúmeras pessoas a darem os primeiros passos no tráfego pago e a conquistarem resultados reais.</p>
          <p>Minha missão é <span className='Negrito'>tornar o trafego pago acessivel para todos</span> que querem mudar de vida e alcançar independência financeira.</p>
        </div>
        <div className="ImgAbout">
          <img src={star} alt="" className='Star1' />
          <img src={perfil} alt="" className='perfil'/>
        </div>
      </div>
      <div className="starBG2"><img src={star} alt="" /></div>
    </section>
  )
}

export default About