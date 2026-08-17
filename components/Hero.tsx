import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10 opacity-60 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10 opacity-40 pointer-events-none"></div>

      <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 font-medium tracking-wide">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        Inovação e Tecnologia Premium
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white max-w-4xl mx-auto leading-[1.1]">
        Engenharia Digital para <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
          Marcas que Lideram o Futuro
        </span>
      </h1>

      <p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light">
        Construímos infraestruturas web de alta performance, landing pages focadas em conversão e ecossistemas inteligentes para escalar seu negócio.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
        <Link href="#projetos" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors">
          Explorar Portfólio
        </Link>
        <Link href="#contato" className="w-full sm:w-auto px-8 py-3.5 rounded-full glass text-white font-medium hover:bg-white/10 transition-all border border-blue-500/30 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]">
          Solicitar Diagnóstico
        </Link>
      </div>
    </section>
  );
}