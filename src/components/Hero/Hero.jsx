import React, { useRef } from 'react';
import './Hero.css';
import HeroImg from '../../assets/Photo/imgHero.png';

function Hero() {
  const heroRef = useRef(null);
  const imgRef = useRef(null);

  return (
    <section 
      className="hero" 
      ref={heroRef}
    >
      <div className="contentHero">
        <div className="heroImg">
          <img 
            src={HeroImg} 
            alt="E-book" 
            className="highlight-element"
            ref={imgRef}
          />
        </div>
        <div className="heroText">
        <h2>Torne-se um Especialista em <span className='text-gradient'>Tráfego pago</span> Conquiste Sua <span className='text-gradient'>Liberdade Financeira!</span></h2>
        <h3>Descubra o passo a passo para entrar no mercado de tráfego pago de forma simples e didática, mesmo que você esteja <span className='text-gradient'>começando do zero!</span></h3>
        <div className="heroButton">
          <p>garanta seu e-book agora e comece sua jornada no tráfego pago!</p>
          <a href="#'" target="_blank" rel="noopener noreferrer">Garantir E-Book</a>
        </div>
        </div>
      </div>
      
      {/* Separador de seção com linha horizontal e seta indicadora */}
      <div className="section-divider">
        <div className="scroll-indicator" onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>
          <div className="scroll-circle">
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 