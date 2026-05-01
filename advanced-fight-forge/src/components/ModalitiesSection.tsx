import bjjImg from "@/assets/bjj.jpg";
import muaythaiImg from "@/assets/muaythai.png";
import boxingImg from "@/assets/boxing.jpg";
import bjjkidsImg from "@/assets/bjj-kid.jpg";


const modalities = [
  {
    title: "Jiu-Jitsu",
    subtitle: "A arte suave",
    description: "Domine técnicas de solo, controle e finalização. Ideal para defesa pessoal e condicionamento mental.",
    image: bjjImg,
  },
  {
    title: "Muay Thai",
    subtitle: "A arte das 8 armas",
    description: "Socos, chutes, joelhadas e cotoveladas. Treino completo que trabalha corpo e mente.",
    image: muaythaiImg,
  },
  {
    title: "Boxe",
    subtitle: "O nobre esporte",
    description: "Agilidade, reflexo e potência. Melhore seu condicionamento físico enquanto aprende a se defender.",
    image: boxingImg,
  },
  {
    title: "jiu-jitsu kids e adolescentes",
    subtitle: "Jiu-Jitsu para crianças e adolescentes",
    description: "Desenvolva disciplina, respeito e habilidades de defesa pessoal desde cedo. Aulas adaptadas para todas as idades.",
    image: bjjkidsImg,
  },
];

const ModalitiesSection = () => {
  return (
    <section id="modalidades" className="py-24 relative grunge-overlay">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          NOSSAS <span className="text-gradient-red">MODALIDADES</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16">
          Escolha sua arte marcial e comece a transformar sua vida hoje.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {modalities.map((mod) => (
            <div
              key={mod.title}
              className="group relative overflow-hidden rounded-sm bg-card border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={mod.image}
                  alt={mod.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={1024}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-accent font-heading text-sm font-semibold uppercase tracking-widest">
                  {mod.subtitle}
                </span>
                <h3 className="font-heading text-3xl font-bold text-foreground mt-1 mb-2">{mod.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{mod.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalitiesSection;
