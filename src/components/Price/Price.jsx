import React from 'react';
import { FaBook, FaRocket } from 'react-icons/fa'; // Importando ícones do react-icons
import './Price.css';

function Price() {
  // Função para rastrear evento de compra 
  const handlePurchaseClick = () => {
    // Verificar se o fbq está disponível
    if (typeof window.fbq !== 'undefined') {
      // Rastrear evento de início de checkout
      window.fbq('track', 'InitiateCheckout', {
        value: 47.00,
        currency: 'BRL',
        content_name: 'E-Book Negócio do Futuro',
        content_type: 'product',
        content_ids: ['ebook-negocio-futuro']
      });
      
      // Rastrear evento personalizado
      window.fbq('trackCustom', 'TEST60593', {
        action: 'purchase_click',
        product: 'E-Book Negócio do Futuro'
      });
    }
  };

  return (
    <section className='Price' id="price">
      <div className="seo-title" style={{display: 'none'}}>
        <h1>E-Book Negócio do Futuro - Tráfego Pago</h1>
      </div>
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
            <h4 className="price-parcelado"><span>5X</span><i>10</i>,26</h4>
            <h4 className="price-avista">ou por <span>R$ 47,00</span> à vista</h4>
            <a 
              href="https://pay.kiwify.com.br/dpIL4Av" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handlePurchaseClick}
              aria-label="Clique para comprar o E-Book de Tráfego Pago"
            >
              Garantir Agora!
            </a>
            <p>Produto 100% Digital | Ambiente Criptografado | 100% Seguro</p>
          </div>
        </li>
        <li>
          <p className='description'>Participe da mentoria gratuita e tenha suporte na sua jornada!</p>
        </li>
      </ul>
      <div className="legenda">
        <div className="legenda-card">
          <FaBook className="legenda-icon" aria-hidden="true" />
          <p>Este é sua chance de dominar o tráfego pago e transformar sua carreira!</p>
        </div>
        <div className="legenda-card">
          <FaRocket className="legenda-icon" aria-hidden="true" />
          <p>Garanta seu e-book agora e tenha acesso imediato ao conteúdo!</p>
        </div>
      </div>
    </section>
  );
}

export default Price;