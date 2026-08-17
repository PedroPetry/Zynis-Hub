import Link from "next/link";
import Image from "next/image";
// A linha de importação (import Logo from...) foi apagada!

export function Header() {
  return (
    <header className="fixed top-0 w-full z-[99] bg-neutral-950/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-white">
          <Image 
            src="/Logo.png" /* <-- Caminho direto para a pasta public */
            alt="Logo Zynis Hub" 
            width={120}
            height={120} 
            quality={100}
            unoptimized
            priority
            className="w-40 h-auto object-contain"
          />
          {/* <span>Zynis Hub <span className="text-blue-500">_</span></span> */}
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
          <Link href="#sobre" className="hover:text-white transition-colors">Sobre o Hub</Link>
          <Link href="#metodologia" className="hover:text-white transition-colors">Metodologia</Link>
          <Link href="#projetos" className="hover:text-white transition-colors">Projetos</Link>
        </nav>

        <Link 
          href="#contato" 
          className="hidden md:inline-flex bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]"
        >
          Iniciar Projeto
        </Link>

        <button className="md:hidden text-neutral-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

      </div>
    </header>
  );
}