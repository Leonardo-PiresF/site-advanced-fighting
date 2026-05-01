import { Shield, Flame, Brain } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Disciplina Mental",
    description: "Artes marciais desenvolvem foco, resiliência e autoconfiança que se refletem em todas as áreas da sua vida.",
  },
  {
    icon: Flame,
    title: "Condicionamento Físico",
    description: "Treinos intensos que queimam gordura, ganham massa muscular e melhoram resistência cardiovascular.",
  },
  {
    icon: Shield,
    title: "Defesa Pessoal",
    description: "Aprenda técnicas reais de proteção pessoal com aplicação prática e segurança no dia a dia.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 relative grunge-overlay">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          POR QUE <span className="text-gradient-red">TREINAR</span> CONOSCO?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-card border border-border rounded-sm p-8 text-center hover:border-accent/40 transition-colors duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <b.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
