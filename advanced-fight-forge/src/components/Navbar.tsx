import { useState } from "react";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="C.T. Advanced Fighting" className="w-10 h-10 rounded object-cover" width={40} height={40} />
          <span className="font-heading text-lg font-bold text-foreground tracking-wide">C.T. ADVANCED FIGHTING</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#modalidades" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Modalidades</a>
          <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contato</a>
          <a
            href="#contato"
            className="bg-accent text-accent-foreground font-heading text-sm font-bold uppercase px-5 py-2 rounded-sm hover:scale-105 transition-transform"
          >
            Aula Grátis
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 flex flex-col gap-3">
          <a href="#modalidades" onClick={() => setOpen(false)} className="text-sm text-muted-foreground">Modalidades</a>
          <a href="#contato" onClick={() => setOpen(false)} className="text-sm text-muted-foreground">Contato</a>
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="bg-accent text-accent-foreground font-heading text-sm font-bold uppercase px-5 py-2 rounded-sm text-center"
          >
            Aula Grátis
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
