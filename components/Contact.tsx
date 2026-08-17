import Link from "next/link";

export function Contact() {
  return (
    <section id="contato" className="w-full py-24 px-6 bg-neutral-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-t-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-4xl mx-auto glass p-10 md:p-16 rounded-3xl border border-white/10 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Pronto para escalar sua <br /><span className="text-blue-500">presença digital?</span></h2>
        <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto font-light">Vamos construir a infraestrutura que o seu negócio precisa para dominar o mercado. Entre em contato para um diagnóstico técnico gratuito do seu projeto.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="https://wa.me/5551998753027?text=Olá! Gostaria de falar sobre um projeto com a Zynis Hub." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
            Chamar no WhatsApp
          </a>
          <a href="mailto:zynishub@gmail.com" className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 hover:border-white/30 text-white font-medium transition-colors flex items-center justify-center">
          zynishub@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}