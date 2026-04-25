import { motion } from 'framer-motion';
import { Shield, Zap, Target, FlaskConical } from 'lucide-react';

const NutritionItem = ({ label, value, percentage }) => (
  <div className="flex flex-col gap-2 p-4 border border-white/5 bg-true-black/50 group hover:border-nvidia-green/20 transition-all duration-300">
    <div className="flex justify-between items-center mb-1">
      <span className="text-[10px] uppercase tracking-widest text-pure-white/40">{label}</span>
      <span className="text-nvidia-green font-display font-bold">{value}</span>
    </div>
    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, delay: 0.2 }}
        className="h-full bg-nvidia-green shadow-[0_0_10px_rgba(118,185,0,0.5)]"
      />
    </div>
  </div>
);

const About = () => {
  return (
    <div className="flex flex-col py-16 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-8 leading-[0.9]">
              BIOTECNOLOGIA <br />
              <span className="text-nvidia-green">DE ALTO GANHO</span>
            </h2>
            <p className="text-lg text-pure-white/60 mb-8 leading-relaxed">
              Nossa missão é redefinir o limite humano através da química de precisão. Não criamos apenas bebidas; projetamos upgrades biológicos para atletas digitais que exigem 100% de performance, 100% do tempo.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <FlaskConical className="text-nvidia-green mt-1" size={24} />
                <div>
                  <h4 className="font-display font-bold uppercase text-sm mb-1">Lab Tested</h4>
                  <p className="text-xs text-pure-white/30">Pureza garantida em cada lote.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="text-nvidia-green mt-1" size={24} />
                <div>
                  <h4 className="font-display font-bold uppercase text-sm mb-1">Elite Grade</h4>
                  <p className="text-xs text-pure-white/30">Padrões industriais de qualidade.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-8 border border-nvidia-green/20 bg-surface-near-black/50 backdrop-blur-xl relative"
          >
            <div className="absolute -top-4 -left-4 px-4 py-1 bg-nvidia-green text-true-black font-display font-black text-xs uppercase italic tracking-widest">
              Dados Analíticos v2.4
            </div>
            
            <h3 className="font-display font-bold text-2xl uppercase mb-8 flex items-center gap-3">
              <Zap className="text-nvidia-green" size={24} />
              Tabela Nutricional <span className="text-nvidia-green">Interativa</span>
            </h3>

            <div className="flex flex-col gap-4">
              <NutritionItem label="Cafeína Anidra" value="150mg" percentage={85} />
              <NutritionItem label="Taurina Pura" value="1000mg" percentage={95} />
              <NutritionItem label="Complexo B" value="100% IDR" percentage={100} />
              <NutritionItem label="Açúcares" value="0g" percentage={0} />
              <NutritionItem label="Foco Mental (Cognizin)" value="250mg" percentage={75} />
            </div>

            <p className="mt-8 text-[10px] uppercase tracking-widest text-pure-white/20 italic">
              * Valores baseados em uma dose padrão de 10g. Formulação protegida por patente industrial.
            </p>
          </motion.div>
        </section>

        {/* Vision Section */}
        <section className="py-24 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-nvidia-green/10 flex items-center justify-center mb-6 border border-nvidia-green/20">
                <Target className="text-nvidia-green" size={32} />
              </div>
              <h4 className="font-display font-bold text-xl uppercase mb-4 text-nvidia-green">Precisão</h4>
              <p className="text-sm text-pure-white/40 leading-relaxed">Desenvolvido com miligramagem exata para evitar o jitter e maximizar a sinapse neural.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-nvidia-green/10 flex items-center justify-center mb-6 border border-nvidia-green/20">
                <Zap className="text-nvidia-green" size={32} />
              </div>
              <h4 className="font-display font-bold text-xl uppercase mb-4 text-nvidia-green">Energia</h4>
              <p className="text-sm text-pure-white/40 leading-relaxed">Carregamento rápido de glicogênio cerebral sem o crash pós-sessão.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-nvidia-green/10 flex items-center justify-center mb-6 border border-nvidia-green/20">
                <Shield className="text-nvidia-green" size={32} />
              </div>
              <h4 className="font-display font-bold text-xl uppercase mb-4 text-nvidia-green">Resistência</h4>
              <p className="text-sm text-pure-white/40 leading-relaxed">Minerais eletrolíticos que mantêm a hidratação mesmo sob overclock metabólico.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
