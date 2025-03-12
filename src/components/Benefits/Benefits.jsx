import React, { useEffect } from 'react';
import './Benefits.css';
import Img1 from '../../assets/Photo/icons/1.png';
import Img2 from '../../assets/Photo/icons/2.png';
import Img3 from '../../assets/Photo/icons/3.png';
import Img4 from '../../assets/Photo/icons/4.png';
import Img5 from '../../assets/Photo/icons/5.png';
import Img6 from '../../assets/Photo/icons/6.png';

const benefitsData = [
  {
    icon: Img1,
    title: 'Os fundamentos essenciais do tráfego pago para iniciantes.',
    description: 'Aprenda os conceitos básicos, como funcionam as plataformas de anúncios e a importancia do tráfego pago para negócios digitais.'
  },
  {
    icon: Img2,
    title: 'Como configurar suas primeiras campanhas de forma eficiente.',
    description: 'Passo a passo para criar, configurar e otimizar campanhas nas principais plataformas de anúncios.'
  },
  {
    icon: Img3,
    title: 'Estratégias para gerar resultados consistentes e previsíveis.',
    description: 'Métodos comprovados para alcançar leads qualificados e aumentar suas conversões.'
  },
  {
    icon: Img4,
    title: 'Erros comuns que iniciantes cometem e como evitá-los.',
    description: 'Identifique e corrija os principais erros que podem comprometer seus investimentos em anúncios pagos.'
  },
  {
    icon: Img5,
    title: 'Dicas práticas para escalar suas campanhas e aumentar seus lucros.',
    description: 'Descubra como otimizar seus anúncios para expandir seus alcance e maximizar o retorno sobre o investimento.'
  },
  {
    icon: Img6,
    title: 'Métricas e análise de desempenho para otimização contínua.',
    description: 'Saiba como interpretar os dados das suas campanhas e ajustar estratégias para melhorar seus resultados de forma constante.'
  }
];

function Benefits() {

  return (
    <section className="benefits-section">
      <div className="container">
        <h2 className="section-title">O que você vai aprender no E-Book?</h2>
        
        <div className="benefits-grid">
          {benefitsData.map((benefit, index) => (
            <div className="benefit-card" key={index} data-aos="fade-up">
              <div className="icon-container">
                <img src={benefit.icon} alt={benefit.title} className="benefit-icon" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{benefit.title}</h3>
                <p className="card-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;