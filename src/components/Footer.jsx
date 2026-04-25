import { Link } from 'react-router-dom';
import { Zap, Camera, MessageSquare, Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface-near-black border-t border-nvidia-green/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-nvidia-green flex items-center justify-center rounded-sm">
                <Zap className="text-true-black fill-current" size={20} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight uppercase">
                Goró <span className="text-nvidia-green">Mansão</span>
              </span>
            </div>
            <p className="text-pure-white/50 max-w-sm mb-8 leading-relaxed">
              O combustível definitivo para quem não aceita o lag. Formulação industrial, precisão de elite e sabor que desafia a física.
            </p>
            <div className="flex gap-4">
              {[Camera, MessageSquare, Cpu].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-nvidia-green/20 rounded-sm flex items-center justify-center hover:bg-nvidia-green hover:text-true-black transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6 text-nvidia-green">Links</h4>
            <ul className="flex flex-col gap-4 text-sm text-pure-white/60">
              <li><Link to="/" className="hover:text-pure-white transition-colors">Início</Link></li>
              <li><Link to="/catalog" className="hover:text-pure-white transition-colors">Produtos</Link></li>
              <li><Link to="/about" className="hover:text-pure-white transition-colors">Sobre Nós</Link></li>
              <li><Link to="/checkout" className="hover:text-pure-white transition-colors">Checkout</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6 text-nvidia-green">Legal</h4>
            <ul className="flex flex-col gap-4 text-sm text-pure-white/60">
              <li><a href="#" className="hover:text-pure-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-pure-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-pure-white transition-colors">Devoluções</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-nvidia-green/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-pure-white/30">
          <p>© 2026 GORÓ MANSÃO. ALL RIGHTS RESERVED.</p>
          <p>ENGINEERED FOR ELITE PERFORMANCE.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
