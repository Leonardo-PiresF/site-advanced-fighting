import profDecio from "@/assets/prof_decio.png";
import profLary from "@/assets/prof_lary.png";
import profPrimata from "@/assets/prof_primata.png";
import profBruna from "@/assets/prof_bruna.png";

interface Teacher {
    id: number;
    name: string;
    martialArt: string;
    role: string;
    image: string;
}

const teachers: Teacher[] = [
    {
        id: 1,
        name: "Décio Marques",
        martialArt: "Faixa preta 2°grau",
        role: "jiu-jitsu",
        image: profDecio,
    },
    {
        id: 2,
        name: "Laryssa Marques",
        martialArt: "Faixa roxa 3º grau",
        role: "Jiu-jitsu kids e adolescentes",
        image: profLary,
    },
    {
        id: 3,
        name: "Primata Boxe",
        martialArt: "Professor extremamente experiente e conceituado no mundo do boxe",
        role: "Boxe",
        image: profPrimata,
    },
    {
        id: 4,
        name: "Bruna Santiago",
        martialArt: "Prajied preto",
        role: "Muay Thai",
        image: profBruna,
    },
];

const TeachersSection = () => {
    return (
        <section className="py-24 relative grunge-overlay">
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
                    NOSSOS <span className="text-gradient-red">INSTRUTORES</span>
                </h2>
                <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16">
                    Conheça os profissionais que vão guiar sua jornada nas artes marciais.
                </p>

                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {teachers.map((teacher) => (
                        <div
                            key={teacher.id}
                            className="group relative overflow-hidden rounded-sm bg-card border border-border hover:border-accent/50 transition-all duration-300"
                        >
                            <div className="aspect-[3/4] overflow-hidden">
                                <img
                                    src={teacher.image}
                                    alt={teacher.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                    width={800}
                                    height={1024}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <span className="text-accent font-heading text-sm font-semibold uppercase tracking-widest">
                                    {teacher.role}
                                </span>
                                <h3 className="font-heading text-3xl font-bold text-foreground mt-1 mb-2">
                                    {teacher.name}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {teacher.martialArt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeachersSection;