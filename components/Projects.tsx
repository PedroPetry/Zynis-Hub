import Link from "next/link";
import Image from "next/image"; // IMPORTANTE: Essa importação precisa estar aqui

// Lista de projetos (Adicionei o campo "image" em todos eles)
const portfolioProjects = [
  {
    id: 1,
    title: "Landing Page: Apresentação e Venda de Consultoria",
    description: "Desenvolvimento de uma landing page premium para um consultor de empresas, focando em performance visual, SEO local e captura de leads qualificados.",
    tags: ["HTML", "Tailwind CSS", "JS", "Automação"],
    link: "https://fernandotambara.vercel.app/",
    image: "/Site_Fernando.png", // O nome exato da imagem que você colocar na pasta "public"
  },
  {
    id: 2,
    title: "Site de Portfólio para Engenheiro",
    description: "Desenvolvimento de website premium para empresa de engenharia, focando em performance visual, apresentação de projetos, SEO local e captura de leads qualificados.",
    tags: ["HTML", "JS", "Tailwind CSS",],
    link: "https://www.eckertengenharia.com.br/",
    image: "/Site_Jardel.png",
  },
  {
    id: 3,
    title: "Portfólio Zynis Hub",
    description: "Desenvolvimento de uma landing page premium para uma hub de tecnologia, focando em performance visual, SEO local, captura de leads qualificados e apresentação de projetos.",
    tags: ["Tailwind CSS","IA","TypeScript","Node"],
    link: "#",
    image: "/Site-zynishub.png",
  },
  {
    id: 4,
    title: "Projeto Futuro",
    description: "Em Desenvolvimento",
    tags: ["Qualidade",],
    link: "#",
    image: "/projeto-estetica.png",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="w-full py-24 px-6 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Nosso Trabalho <span className="text-blue-500">.</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl text-lg font-light">
            Soluções de engenharia digital projetadas para resolver problemas reais e escalar negócios. Explore nossos cases mais recentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((project) => (
            <div 
              key={project.id} 
              className="group glass p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] flex flex-col h-full"
            >
              
              {/* CAIXA DA IMAGEM ATUALIZADA AQUI */}
              <div className="w-full h-48 bg-neutral-900 rounded-lg mb-6 flex items-center justify-center border border-white/5 overflow-hidden relative">
                
                {/* O componente Image vai puxar a foto respectiva de cada projeto */}
                <Image 
                  src={project.image} 
                  alt={`Mockup do projeto ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Efeito de iluminação por cima da foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-neutral-400 mb-6 flex-grow font-light">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/20 rounded-full border border-blue-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link href={project.link} className="mt-auto inline-flex items-center text-sm font-semibold text-white hover:text-blue-400 transition-colors group-hover:translate-x-1 duration-300">
                Ver Detalhes do Projeto
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}