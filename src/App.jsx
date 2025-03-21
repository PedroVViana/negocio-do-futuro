import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import './App.css'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Benefits from './components/Benefits/Benefits'
import Highlights from './components/Highlights/Highlights'
import Price from './components/Price/Price'
import Questions from './components/Questions/Questions'
import Footer from './components/Footer/Footer'

function App() {
  useEffect(() => {
    // Função para verificar se elementos estão visíveis na tela
    const handleVisibilityChange = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        
        // Se a seção estiver visível e tiver ID, rastrear visualização
        if (isVisible && section.id && typeof window.fbq !== 'undefined') {
          window.fbq('trackCustom', 'SectionView', {
            section_id: section.id,
            section_name: section.id.charAt(0).toUpperCase() + section.id.slice(1)
          });
        }
      });
    };
    
    // Adicionar listener de scroll
    window.addEventListener('scroll', handleVisibilityChange);
    
    // Rastrear tempo no site
    let timeOnSite = 0;
    const timeTracker = setInterval(() => {
      timeOnSite += 30;
      // A cada 30 segundos
      if (typeof window.fbq !== 'undefined') {
        window.fbq('trackCustom', 'TimeOnSite', {
          seconds: timeOnSite
        });
      }
    }, 30000);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleVisibilityChange);
      clearInterval(timeTracker);
    };
  }, []);

  return (
    <div className="app">
      <Helmet>
        <html lang="pt-BR" />
        <title>Negócio do Futuro | Especialista em Tráfego Pago</title>
        <meta name="description" content="Torne-se um especialista em tráfego pago e conquiste sua liberdade financeira. Aprenda a ganhar dinheiro online mesmo começando do zero!" />
        <link rel="canonical" href="https://negociodofuturo.com.br" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Hero />
      <Benefits id="benefits" />
      <About id="about" />
      <Highlights id="highlights" />
      <Price id="price" />
      <Questions id="questions" />
      <Footer />
      {/* Aqui você pode adicionar mais seções do site conforme necessário */}
    </div>
  )
}

export default App
