import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ChevronRight } from 'lucide-react';

const faqs = [
  {
    cmd: "execute freq_consumo.exe",
    response: "[SYSTEM]: Máximo recomendado de 2 unidades por ciclo diário de 24h. A biologia humana possui hard-limits que devem ser respeitados para manter o hardware seguro."
  },
  {
    cmd: "query shipping_delay --uf SP",
    response: "[SYSTEM]: Logística de alta velocidade ativada. Drop direto na sua base em 2 a 5 dias úteis. Frete classificado como GRÁTIS para loadouts acima de R$100."
  },
  {
    cmd: "check ingredients.sugar",
    response: "[SYSTEM]: ERROR 404 - AÇÚCAR NÃO ENCONTRADO. A engine Goro opera exclusivamente em Zero Sugar, utilizando apenas sucralose premium para adoçamento."
  },
  {
    cmd: "ping goro_effects",
    response: "[SYSTEM]: PING SUCCESS. Efeitos previstos: aumento drástico de foco, redução de tempo de resposta motora, stamina sustentada por até 6 horas. Sem packet loss mental."
  }
];

export default function TerminalFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-surface-near-black border border-border-gray rounded-sm overflow-hidden font-mono shadow-[0_0_30px_rgba(118,185,0,0.05)]">
          {/* Terminal Header */}
          <div className="bg-[#1a1a1a] border-b border-border-gray p-3 flex items-center gap-2">
            <Terminal size={16} className="text-gray-400" />
            <span className="text-gray-400 text-xs tracking-widest uppercase">root@goro-system:~# FAQ_TERMINAL.exe</span>
          </div>

          {/* Terminal Body */}
          <div className="p-6">
            <div className="mb-6 text-nvidia-green text-sm opacity-80">
              <p>Goro OS v1.0.42</p>
              <p>Establishing secure connection... DONE</p>
              <p>Type command or click to execute query:</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                
                return (
                  <div key={index} className="border-b border-border-gray/30 pb-4 last:border-0">
                    <button 
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="w-full text-left flex items-center gap-2 text-pure-white hover:text-nvidia-green transition-colors py-2 focus:outline-none"
                    >
                      <ChevronRight size={16} className={`text-nvidia-green transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
                      <span className="text-sm font-bold tracking-wider">&gt; {faq.cmd}</span>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-6 pt-2 pb-2 text-gray-400 text-sm leading-relaxed border-l border-nvidia-green/30 ml-2 mt-1">
                            {/* Simulando efeito maquina de escrever via CSS puro seria complexo aqui, usaremos slide suave */}
                            {faq.response}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
            
            {/* Blinking Cursor */}
            <div className="mt-8 flex items-center gap-2 text-nvidia-green">
              <span>&gt;</span>
              <motion.div 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="w-2 h-4 bg-nvidia-green"
              ></motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
