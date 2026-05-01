import heroBg from "@/assets/hero.png";
import logo from "@/assets/logo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Treino de Jiu-Jitsu" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <img src={logo} alt="C.T. Advanced Fighting" className="w-32 h-32 mx-auto mb-8 rounded-lg shadow-2xl object-cover" width={128} height={128} />

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-foreground">
          SUPERE SEUS <span className="text-gradient-red">LIMITES</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
          Jiu-Jitsu • Muay Thai • Boxe
        </p>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          Treine com os melhores professores de Maceió. Desde iniciantes até competidores,
          aqui todo mundo evolui junto.
        </p>

        <a
          href="#contato"
          className="inline-block bg-accent text-accent-foreground font-heading text-lg md:text-xl font-bold uppercase px-10 py-4 rounded-sm hover:scale-105 hover:shadow-[0_0_28px_4px_hsla(0,80%,50%,0.45)] transition-all duration-300 shadow-[0_0_18px_2px_hsla(0,80%,50%,0.25)]"
        >
          Agendar aula experimental grátis
        </a>


      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;