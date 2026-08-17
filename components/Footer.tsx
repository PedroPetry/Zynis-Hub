export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="w-full py-8 px-6 border-t border-white/5 bg-neutral-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-neutral-400 text-sm font-light">
            © {currentYear} <span className="text-white font-medium">Zynis Hub</span>. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <a href="https://www.instagram.com/zynishub/" className="hover:text-blue-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    );
  }