import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-pure-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block border border-nvidia-green bg-nvidia-green/10 px-3 py-1">
              <span className="text-nvidia-green font-bold text-xs tracking-[0.2em] uppercase">Nova Fórmula 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-pure-white leading-[1.1] uppercase">
              POTÊNCIA <br />
              <span className="text-nvidia-green">INDUSTRIAL.</span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-lg font-body leading-relaxed">
              Foco absoluto sem distrações. A energia que abastece o seu setup. Desenvolvido com precisão técnica para máxima performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/catalog" className="bg-nvidia-green hover:bg-[#5a8f00] text-true-black font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-200 text-center text-sm border-2 border-nvidia-green">
                EXPLORAR CATÁLOGO
              </Link>
              <Link to="/about" className="bg-transparent hover:bg-surface-near-black text-pure-white border border-border-gray hover:border-nvidia-green font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-200 text-center text-sm">
                VER ESPECIFICAÇÕES
              </Link>
            </div>
            
            <div className="pt-8 border-t border-border-gray flex gap-8">
              <div>
                <p className="text-3xl font-display font-bold text-pure-white">0G</p>
                <p className="text-xs font-bold text-gray-300 tracking-widest uppercase mt-1">AÇÚCAR</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-pure-white">200MG</p>
                <p className="text-xs font-bold text-gray-300 tracking-widest uppercase mt-1">CAFEÍNA</p>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center">
            {/* Ambient light effect behind the can */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-nvidia-green/20 rounded-full blur-[100px]"></div>
            
            <img 
              src="/assets/hyper_focus.png" 
              alt="Goro Energy Hyper Focus" 
              className="relative z-10 w-full max-w-[500px] h-auto object-contain drop-shadow-[0_0_30px_rgba(118,185,0,0.3)] transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
