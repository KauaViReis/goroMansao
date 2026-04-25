import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Droplets } from 'lucide-react';

const specs = [
  {
    icon: <Cpu size={32} />,
    title: "OVERCLOCK MENTAL",
    desc: "500mg de Nootrópicos Ativos. Aumente seu APM (Actions Per Minute) e reduza o lag cognitivo nas horas críticas."
  },
  {
    icon: <Droplets size={32} />,
    title: "LIQUID COOLING",
    desc: "Fórmula de resfriamento em alta octanagem. Mantenha as temperaturas corporais estáveis mesmo nos clutch rounds decisivos."
  },
  {
    icon: <Zap size={32} />,
    title: "ZERO CRASH ENGINE",
    desc: "Energia sustentável sem o efeito rebote do açúcar. Grinde no servidor a madrugada inteira sem dropar sua performance."
  }
];

export default function TechSpecs() {
  return (
    <section className="py-24 bg-true-black border-t border-border-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-pure-white tracking-widest uppercase mb-4">
            SYSTEM ARCHITECTURE
          </h2>
          <div className="w-24 h-1 bg-nvidia-green mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className="bg-surface-near-black border border-border-gray hover:border-nvidia-green/50 p-8 group transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-nvidia-green transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              
              <div className="text-nvidia-green mb-6 bg-nvidia-green/10 inline-block p-4 rounded-sm border border-nvidia-green/20">
                {spec.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-pure-white tracking-widest uppercase mb-4">
                {spec.title}
              </h3>
              <p className="text-gray-400 font-body leading-relaxed text-sm">
                {spec.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
