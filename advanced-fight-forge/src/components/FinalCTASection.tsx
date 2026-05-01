const FinalCTASection = () => {
  return (
    <section id="contato" className="py-24 bg-secondary relative grunge-overlay">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
          PRONTO PARA <span className="text-gradient-red">COMEÇAR?</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-10">
          Sua primeira aula é por nossa conta. Venha conhecer o C.T. Advanced Fighting
          e descubra do que você é capaz.
        </p>

        <a
          href="https://api.whatsapp.com/send?phone=5582988460142&text=Oi%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%E2%80%A6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent text-accent-foreground font-heading text-lg md:text-xl font-bold uppercase px-12 py-5 rounded-sm hover:scale-105 hover:shadow-[0_0_28px_4px_hsla(0,80%,50%,0.45)] transition-all duration-300 shadow-[0_0_18px_2px_hsla(0,80%,50%,0.25)]"
        >
          Agendar aula experimental grátis
        </a>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto text-left">
          <div>
            <h4 className="font-heading text-accent font-semibold mb-2 uppercase text-sm tracking-widest">Endereço</h4>
            <p className="text-muted-foreground text-sm">Maceió, Alagoas<br />Brasil</p>
          </div>
          <div>
            <h4 className="font-heading text-accent font-semibold mb-2 uppercase text-sm tracking-widest">Horários</h4>
            <p className="text-muted-foreground text-sm">Seg a Sex: 06h - 22h<br />Sáb: 08h - 12h</p>
          </div>
          <div>
            <h4 className="font-heading text-accent font-semibold mb-2 uppercase text-sm tracking-widest">Contato</h4>
            <p className="text-muted-foreground text-sm">WhatsApp: (82) 98846-0142<br />Instagram: @ctadvancedfighting</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;