import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import App from './App.jsx'

// Script para adicionar atributos estruturados aos links
const addStructuredData = () => {
  // Observar quando o DOM estiver carregado
  document.addEventListener('DOMContentLoaded', () => {
    // Configuração do GTM (se necessário futuramente)
    if (typeof window.dataLayer === 'undefined') {
      window.dataLayer = [];
    }
    
    // Event listener para rastrear cliques nos botões de compra
    document.addEventListener('click', (e) => {
      // Verificar se é um botão de compra
      if (e.target.closest('a[href*="kiwify"]')) {
        // Rastrear evento de clique no botão de compra
        if (typeof window.fbq !== 'undefined') {
          window.fbq('trackCustom', 'TEST60593', {
            event_category: 'Button',
            event_action: 'Click',
            event_label: 'Purchase Button'
          });
        }
      }
    });
  });
};

// Executar o script
addStructuredData();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
