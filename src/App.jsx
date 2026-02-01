import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Rocket, 
  BrainCircuit, 
  Palette, 
  Bot, 
  ChevronRight, 
  CheckCircle2, 
  Globe, 
  Layout, 
  MessageSquare 
} from 'lucide-react';

// --- Design System & Constants ---
const COLORS = {
  bg: 'bg-[#0B0D10]', // Preto profundo
  bgSecondary: 'bg-[#1A1D23]', // Cinza grafite
  accent: 'bg-[#2F6BFF]', // Azul Petróleo Tech
  accentText: 'text-[#2F6BFF]',
  textMain: 'text-white',
  textMuted: 'text-[#B5B8C5]', // Cinza claro
  border: 'border-[#2F333B]'
};

// Componente de Animação Reutilizável (Fade Up)
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- Components ---

const Button = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium transition-all duration-300 group";
  const variants = {
    primary: `${COLORS.accent} text-white hover:brightness-110 hover:shadow-[0_0_20px_rgba(47,107,255,0.3)]`,
    secondary: "bg-transparent border border-[#B5B8C5] text-white hover:bg-white/5",
    ghost: "text-[#B5B8C5] hover:text-white"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Processo', href: '#processo' },
    { name: 'Sobre', href: '#sobre' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0B0D10]/90 backdrop-blur-md border-b border-[#1A1D23] py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 z-50">
   <Logo className="w-8 h-8" showText={true} />
</a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[#B5B8C5] hover:text-white text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href='https://wa.me/5551998753027?text=Olá,%20gostaria%20de%20mais%20informações'><Button variant="primary" className="!py-2.5 !px-6 text-sm !rounded-lg">Falar com especialista</Button></a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-[#0B0D10] flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-white"
                >
                  {link.name}
                </a>
              ))}
              <Button onClick={() => setIsMobileMenuOpen(false)}>Falar com especialista</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className={`relative min-h-screen flex items-center pt-20 overflow-hidden ${COLORS.bg}`}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2F6BFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#6C5CE7]/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#1A1D23 1px, transparent 1px), linear-gradient(90deg, #1A1D23 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Content */}
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1D23] border border-[#2F333B] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2F6BFF] animate-pulse"></span>
              <span className="text-xs font-medium text-[#B5B8C5] tracking-wide uppercase">Tecnologia Premium</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Tecnologia que faz seu negócio <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F6BFF] to-[#6C5CE7]">escalar</span>.
            </h1>
            <p className="text-lg lg:text-xl text-[#B5B8C5] mb-8 leading-relaxed max-w-lg">
              Criamos sites, landing pages e automações inteligentes com foco em conversão, performance e crescimento real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <a href='https://wa.me/5551998753027?text=Olá,%20gostaria%20de%20mais%20informações'><Button>Falar com um especialista<ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Button></a>
              <a href='#solucoes'><Button variant="secondary">Ver soluções</Button></a>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Abstract Tech Visual */}
        <FadeIn delay={0.2} className="relative hidden lg:block">
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Abstract Cards Composition */}
            <div className="absolute inset-0 border border-[#2F333B] rounded-2xl bg-[#1A1D23]/50 backdrop-blur-sm z-10 transform rotate-3 scale-95 origin-center"></div>
            <div className="absolute inset-0 border border-[#2F6BFF]/30 rounded-2xl bg-[#0B0D10]/80 backdrop-blur-xl z-20 flex flex-col p-8 justify-between shadow-2xl shadow-[#2F6BFF]/10">
              <div className="flex justify-between items-start">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#2F6BFF]/20 text-[#2F6BFF] text-xs font-mono">
                  Status: Optimized
                </div>
              </div>
              
              <div className="space-y-4 my-8">
                <div className="h-2 bg-[#2F333B] rounded-full w-3/4"></div>
                <div className="h-2 bg-[#2F333B] rounded-full w-1/2"></div>
                <div className="flex gap-4 mt-8">
                  <div className="flex-1 p-4 rounded-lg bg-[#1A1D23] border border-[#2F333B]">
                    <div className="text-[#2F6BFF] font-bold text-2xl mb-1">+145%</div>
                    <div className="text-[#B5B8C5] text-xs">Conversão</div>
                  </div>
                  <div className="flex-1 p-4 rounded-lg bg-[#1A1D23] border border-[#2F333B]">
                    <div className="text-white font-bold text-2xl mb-1">0.4s</div>
                    <div className="text-[#B5B8C5] text-xs">Load Time</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#2F333B] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2F6BFF] flex items-center justify-center">
                    <Rocket size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Lançamento</div>
                    <div className="text-[#B5B8C5] text-xs">Pronto para escalar</div>
                  </div>
                </div>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#2F333B] text-white">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Rocket size={24} />,
      title: "Performance Extrema",
      desc: "Projetos rápidos, otimizados e pensados para entregar resultado desde o primeiro clique."
    },
    {
      icon: <BrainCircuit size={24} />,
      title: "Estratégia + Tech",
      desc: "Cada solução nasce de um diagnóstico claro e decisões técnicas bem fundamentadas."
    },
    {
      icon: <Palette size={24} />,
      title: "Design Premium",
      desc: "Interfaces modernas, limpas e alinhadas ao posicionamento da sua marca."
    },
    {
      icon: <Bot size={24} />,
      title: "Automação Inteligente",
      desc: "Chatbots e integrações que reduzem custo, aumentam eficiência e escalam o atendimento."
    }
  ];

  return (
    <section className={`py-24 ${COLORS.bgSecondary}`}>
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Por que escolher a Zynis Hub?</h2>
            <p className="text-[#B5B8C5] max-w-2xl mx-auto">
              Não entregamos apenas código. Entregamos a infraestrutura que o seu negócio precisa para crescer.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="h-full p-8 rounded-2xl bg-[#0B0D10] border border-[#2F333B] hover:border-[#2F6BFF]/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-[#1A1D23] flex items-center justify-center text-[#B5B8C5] group-hover:bg-[#2F6BFF] group-hover:text-white transition-all mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-[#B5B8C5] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Globe size={32} />,
      title: "Sites Institucionais",
      desc: "Presença digital profissional para marcas que precisam transmitir autoridade e confiança. Layouts exclusivos e otimizados para SEO.",
    },
    {
      icon: <Layout size={32} />,
      title: "Landing Pages",
      desc: "Páginas focadas em conversão, com estrutura validada, copywriting persuasivo e foco em resultado mensurável.",
    },
    {
      icon: <MessageSquare size={32} />,
      title: "Chatbots & Automações",
      desc: "Atendimento inteligente 24/7, integrações com CRM e processos automatizados para qualificar leads sem esforço humano.",
    }
  ];

  return (
    <section id="solucoes" className={`py-24 ${COLORS.bg}`}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 sticky top-24">
            <FadeIn>
              <h2 className="text-4xl font-bold text-white mb-6">Soluções digitais <br /><span className="text-[#2F6BFF]">sob medida</span></h2>
              <p className="text-[#B5B8C5] mb-8">
                Desenvolvemos o ecossistema digital que sua empresa precisa. Sem templates prontos, sem soluções rasas.
              </p>
              <Button>Ver todos serviços</Button>
            </FadeIn>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {services.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-2xl bg-[#1A1D23] border border-[#2F333B] flex flex-col md:flex-row gap-6 hover:translate-x-2 transition-transform duration-300">
                  <div className="shrink-0 w-16 h-16 rounded-xl bg-[#0B0D10] flex items-center justify-center text-[#2F6BFF]">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-[#B5B8C5] leading-relaxed mb-4">{service.desc}</p>
                    {/* <a href="#" className="inline-flex items-center text-sm font-medium text-white hover:text-[#2F6BFF] transition-colors">
                      Saiba mais <ChevronRight size={14} className="ml-1" />
                    </a> */}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: '01', title: 'Diagnóstico', text: 'Entendemos o seu negócio, objetivos e cenário atual.' },
    { num: '02', title: 'Planejamento', text: 'Definimos a melhor estratégia, estrutura e tecnologia.' },
    { num: '03', title: 'Execução', text: 'Design, desenvolvimento e automação com padrão premium.' },
    { num: '04', title: 'Otimização', text: 'Ajustes finos para garantir performance e crescimento contínuo.' },
  ];

  return (
    <section id="processo" className={`py-24 border-y border-[#2F333B] ${COLORS.bgSecondary}`}>
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Nosso Processo</h2>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-[#2F333B] -z-10"></div>
          
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="relative pt-4 md:pt-0">
                <div className="w-16 h-16 rounded-full bg-[#0B0D10] border border-[#2F333B] flex items-center justify-center text-xl font-bold text-[#2F6BFF] mb-6 z-10 mx-auto md:mx-0 shadow-[0_0_0_8px_#1A1D23]">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center md:text-left">{step.title}</h3>
                <p className="text-[#B5B8C5] text-sm text-center md:text-left">{step.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className={`py-24 ${COLORS.bg}`}>
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">
              A Zynis Hub nasceu para ser o seu <br/>
              <span className="text-[#B5B8C5]">parceiro de tecnologia.</span>
            </h2>
            <div className="w-24 h-1 bg-[#2F6BFF] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-[#B5B8C5] leading-relaxed mb-10">
              Unimos design, tecnologia e automação para criar estruturas digitais prontas para escalar.
              Não entregamos apenas projetos. Entregamos uma base sólida para crescimento.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-[#B5B8C5] text-sm uppercase tracking-widest font-medium">
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#2F6BFF]" /> Estratégia</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#2F6BFF]" /> Tecnologia</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#2F6BFF]" /> Resultado</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <FadeIn>
        <div className="container mx-auto bg-gradient-to-br from-[#1A1D23] to-[#0B0D10] border border-[#2F333B] rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-[#2F6BFF]/20 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Pronto para elevar o nível do seu digital?
            </h2>
            <p className="text-lg text-[#B5B8C5] mb-10">
              Vamos conversar sobre o seu projeto e entender como a tecnologia pode trabalhar a favor do seu crescimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href='https://wa.me/5551998753027?text=Olá,%20gostaria%20de%20mais%20informações'><Button className="w-full sm:w-auto">Solicitar proposta</Button></a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className={`py-12 border-t border-[#2F333B] ${COLORS.bg}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="#" className="flex items-center gap-2 z-50">
   <Logo className="w-8 h-8" showText={true} />
</a>
          
          <div className="flex gap-8 text-sm text-[#B5B8C5]">
            <a href="https://www.instagram.com/zynishub/" className="hover:text-white transition-colors">Instagram</a>
            <a href="mailto:zynishub@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
        <div className="mt-8 text-center md:text-left text-xs text-[#525560]">
          © {new Date().getFullYear()} Zynis Hub — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className={`min-h-screen ${COLORS.bg} font-sans selection:bg-[#2F6BFF] selection:text-white`}>
      <Header />
      <Hero />
      <Features />
      <Services />
      <Process />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;