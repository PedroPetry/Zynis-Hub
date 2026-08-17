"use client";

import { useState } from "react";

const faqs = [
  { question: "Qual é a diferença entre a Zynis Hub e uma agência tradicional?", answer: "Nós não utilizamos construtores genéricos, templates prontos ou plataformas lentas. Somos um hub de tecnologia focado em engenharia de software e inteligência artificial. Criamos infraestruturas sob medida com código limpo, garantindo alta performance, segurança e conversão máxima para o seu projeto." },
  { question: "Qual o tempo médio de desenvolvimento de um projeto?", answer: "Como desenvolvemos soluções personalizadas, o prazo varia conforme a complexidade técnica. Landing pages de alta performance geralmente levam de 2 a 4 semanas. Sistemas mais complexos e automações com Inteligência Artificial podem levar de 4 a 8 semanas. Nosso foco é a excelência da entrega, e não a produção em massa." },
  { question: "Vocês oferecem suporte após o projeto ser entregue?", answer: "Com certeza. Após o deploy (lançamento) da sua plataforma, garantimos que tudo funcione com estabilidade. Também oferecemos pacotes de manutenção contínua para otimizar servidores, aplicar atualizações de segurança e implementar novas funcionalidades conforme o seu negócio escala." },
  { question: "Como funciona a integração com Inteligência Artificial?", answer: "Conectamos o seu ecossistema digital a APIs avançadas (como a da OpenAI) para automatizar processos reais do seu negócio. Isso inclui desde a criação de assistentes virtuais de atendimento e triagem de clientes 24/7 até automações internas que reduzem o tempo gasto com tarefas operacionais." }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="w-full py-24 px-6 bg-neutral-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Perguntas Frequentes <span className="text-blue-500">?</span></h2>
          <p className="text-neutral-400 text-lg font-light">Tudo o que você precisa saber sobre o nosso processo de desenvolvimento.</p>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`glass border rounded-2xl transition-all duration-300 overflow-hidden ${isOpen ? "border-blue-500/50 bg-white/10" : "border-white/5 hover:border-white/20"}`}>
                <button onClick={() => toggleFAQ(index)} className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none">
                  <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-transform duration-300 ${isOpen ? "border-blue-500 text-blue-500 rotate-180" : "border-white/20 text-neutral-400"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />}
                    </svg>
                  </span>
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-neutral-400 font-light leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}