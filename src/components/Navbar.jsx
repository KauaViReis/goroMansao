import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, LogOut, User } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useAuthStore } from '../store/authStore';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  
  const { user, logout } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'CATÁLOGO', path: '/catalog' },
    { name: 'SOBRE', path: '/about' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-black/95 backdrop-blur-md border-border-gray py-4 shadow-sm" 
          : "bg-black border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border-2 border-nvidia-green flex items-center justify-center rounded-sm transition-colors duration-300 group-hover:bg-nvidia-green/10">
            <span className="text-nvidia-green font-display font-bold text-xl leading-none">G</span>
          </div>
          <span className="font-display font-bold text-xl tracking-widest text-pure-white uppercase">
            GORO
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-xs font-bold tracking-widest transition-colors hover:text-nvidia-green uppercase pb-1 border-b-2",
                location.pathname === link.path ? "text-nvidia-green border-nvidia-green" : "text-gray-300 border-transparent"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="w-px h-6 bg-border-gray"></div>

          {user ? (
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-xs font-bold tracking-wide text-pure-white bg-surface-high px-3 py-1.5 rounded-sm border border-border-gray uppercase">
                <User size={14} className="text-nvidia-green" />
                {user.name}
              </span>
              <button 
                onClick={handleLogout}
                className="text-xs font-bold tracking-widest text-red-500 hover:text-red-400 transition-colors flex items-center gap-1 uppercase"
              >
                <LogOut size={16} />
                Sair
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-xs font-bold tracking-widest text-gray-300 hover:text-nvidia-green transition-colors uppercase">
                Entrar
              </Link>
              <Link to="/register" className="text-xs font-bold tracking-widest bg-transparent border-2 border-nvidia-green text-nvidia-green px-4 py-2 rounded-sm hover:bg-nvidia-green hover:text-true-black transition-colors uppercase">
                Cadastrar
              </Link>
            </div>
          )}

          <Link to="/checkout" className="relative p-2 hover:bg-surface-high rounded-sm transition-colors group border border-transparent hover:border-border-gray">
            <ShoppingCart size={20} className="text-gray-300 group-hover:text-nvidia-green transition-colors" />
            {itemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-nvidia-green text-true-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-sm border border-true-black"
              >
                {itemCount}
              </motion.span>
            )}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <Link to="/checkout" className="relative p-2 text-gray-300 hover:text-nvidia-green">
            <ShoppingCart size={24} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-nvidia-green text-true-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-sm">
                {itemCount}
              </span>
            )}
          </Link>
          <button 
            className="p-2 text-gray-300 hover:text-nvidia-green"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-surface-near-black border-b border-border-gray p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-bold tracking-widest text-pure-white hover:text-nvidia-green transition-colors py-2 uppercase"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-border-gray my-2"></div>
            {user ? (
              <>
                <div className="text-gray-300 font-bold tracking-widest py-2 text-xs uppercase">
                  USUÁRIO: {user.name}
                </div>
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-sm font-bold tracking-widest text-red-500 text-left py-2 flex items-center gap-2 uppercase"
                >
                  <LogOut size={18} />
                  Sair
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-3 mt-2">
                <Link 
                  to="/login" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-sm border border-border-gray text-pure-white font-bold tracking-widest uppercase hover:border-nvidia-green transition-colors"
                >
                  Entrar
                </Link>
                <Link 
                  to="/register" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-sm border-2 border-nvidia-green bg-transparent text-nvidia-green font-bold tracking-widest uppercase hover:bg-nvidia-green hover:text-true-black transition-colors"
                >
                  Cadastrar
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
