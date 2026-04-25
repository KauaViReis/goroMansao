import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';

export default function AgeVerification() {
  const [isVisible, setIsVisible] = useState(false);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('goro_age_verified');
    if (!verified) {
      // Delay slight for aesthetic loading
      setTimeout(() => setIsVisible(true), 500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('goro_age_verified', 'true');
    setIsVisible(false);
  };

  const handleDeny = () => {
    setDenied(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
          
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-surface-near-black border-2 border-nvidia-green p-8 max-w-lg w-full relative z-10 shadow-[0_0_50px_rgba(118,185,0,0.2)]"
          >
            {!denied ? (
              <>
                <div className="flex justify-center mb-6">
                  <div className="bg-nvidia-green/10 p-4 border border-nvidia-green rounded-full">
                    <ShieldAlert size={48} className="text-nvidia-green" />
                  </div>
                </div>
                
                <h2 className="text-3xl font-display font-bold text-pure-white text-center tracking-widest uppercase mb-4">
                  PROTOCOLO DE SEGURANÇA
                </h2>
                
                <p className="text-gray-300 text-center font-body text-sm mb-8">
                  ESTE SISTEMA CONTÉM SUPLEMENTAÇÃO DE ALTA PERFORMANCE. 
                  VOCÊ CONFIRMA POSSUIR 18 ANOS DE IDADE OU MAIS PARA ACESSAR OS DADOS CLASSIFICADOS?
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={handleAccept}
                    className="flex-1 bg-nvidia-green hover:bg-[#5a8f00] text-true-black font-bold tracking-widest uppercase py-4 transition-colors border-2 border-transparent"
                  >
                    SIM, ACESSAR
                  </button>
                  <button 
                    onClick={handleDeny}
                    className="flex-1 bg-transparent hover:bg-red-500/10 text-gray-400 hover:text-red-500 border border-border-gray hover:border-red-500 font-bold tracking-widest uppercase py-4 transition-colors"
                  >
                    NÃO, ABORTAR
                  </button>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <ShieldAlert size={48} className="text-red-500 mx-auto mb-4" />
                <h2 className="text-2xl font-display font-bold text-red-500 tracking-widest uppercase mb-2">
                  ACESSO NEGADO
                </h2>
                <p className="text-gray-400 text-sm">
                  O sistema restringe o acesso para menores de idade. Conexão encerrada.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
