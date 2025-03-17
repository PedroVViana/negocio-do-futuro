import React from 'react';
import './Price.css';

function Price() {
  return (
    <section className='Price'>
      <ul className="container-price">
        <li>
          <div className="price-item">
            <h2>Bônus Imediato</h2>
            <p>Ao garantir seu acesso ao e-book, você receberá uma mentoria exclusiva de 30 dias comigo, onde vou te guiar para estruturar suas campanhas e evitar os erros mais comuns do iniciantes!</p>
          </div>
          <div className="price-item">
            <h2>Oportunidade Única!</h2>
            <p>Inscreva-se agora e comece sua jornada no tráfego pago!</p>
          </div>
        </li>
        <li>
          <div className="price-card">
            <h3>Se torne um mestre do tráfego por apenas</h3>
            <h4 className="price-parcelado"><span>5X</span><i>9</i>,40</h4>
            <h4 className="price-avista">ou por <span>R$ 47,00</span> à vista</h4>
            <a href="#" target="_blank" rel="noopener noreferrer">Garantir Agora!</a>
            <p>Produto 100% Digital | Ambiente Criptografado | 100% Seguro</p>
          </div>
        </li>
        <li>
          <p className='description'>Participe da mentoria gratuita e tenha suporte na sua jornada!</p>
        </li>
      </ul>
      <div className="legenda">
        <p>Este é sua chance de dominar o tráfego pago transformar sua carreira!</p>
        <p>Garanta seu e-book agora e tenha acesso imediato ao conteúdo!</p>
      </div>
    </section>
  );
}

export default Price;