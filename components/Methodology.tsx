export function Methodology() {
    const steps = [
      {
        id: "01",
        title: "Mapeamento & Diagnóstico",
        description: "Antes de escrever qualquer linha de código, estruturamos a arquitetura da informação e mapeamos os gargalos do seu negócio. Foco em alinhar a tecnologia com objetivos reais de conversão e eficiência operacional.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" /></svg>,
      },
      {
        id: "02",
        title: "Engenharia Web & IA",
        description: "Desenvolvimento do front-end e integrações de back-end utilizando as stacks mais modernas do mercado. Criamos desde interfaces responsivas e de altíssima performance até automações nativas com Inteligência Artificial para otimizar operações.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" /></svg>,
      },
      {
        id: "03",
        title: "Escala & Alta Disponibilidade",
        description: "Testes rigorosos de velocidade (Lighthouse), SEO avançado e deploy em servidores de alta capacidade. Entregamos uma infraestrutura digital robusta e pronta para receber alto volume de tráfego sem perda de performance.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.452.82.82 0 0 1 .061-.311L12 12Z" /></svg>,
      },
    ];
  
    return (
      <section id="metodologia" className="w-full py-24 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 font-medium">O Hub Tecnológico</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">Não somos uma agência comum. <br className="hidden md:block"/><span className="text-blue-500">Somos construtores.</span></h2>
            <p className="text-neutral-400 font-light mb-8 leading-relaxed">A Zynis Hub nasceu da necessidade de entregar tecnologia que realmente converte. Unimos lógica de programação avançada, design estratégico e automação inteligente para criar ecossistemas digitais que funcionam como verdadeiras máquinas de venda e produtividade para os nossos parceiros.</p>
            <div className="flex gap-4">
              <div className="flex flex-col"><span className="text-3xl font-bold text-white mb-1">100<span className="text-blue-500">%</span></span><span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Foco em Performance</span></div>
              <div className="w-px bg-white/10 mx-2"></div>
              <div className="flex flex-col"><span className="text-3xl font-bold text-white mb-1">IA</span><span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Integração Nativa</span></div>
            </div>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-8">
            {steps.map((step) => (
              <div key={step.id} className="group glass p-8 rounded-2xl border border-white/5 relative overflow-hidden transition-all hover:border-blue-500/30">
                <span className="absolute -top-6 -right-4 text-9xl font-extrabold text-white/5 select-none transition-transform group-hover:scale-110 duration-500">{step.id}</span>
                <div className="relative z-10 flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center border border-blue-500/20">{step.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-neutral-400 font-light leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }