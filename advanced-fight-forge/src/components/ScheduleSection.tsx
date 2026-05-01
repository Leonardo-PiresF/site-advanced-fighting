import { Clock } from "lucide-react";

interface TimeSlot {
    time: string;
    note?: string;
}

interface DayGroup {
    days: string;
    times: TimeSlot[];
}

interface Modality {
    title: string;
    badge: string;
    color: string;
    schedule: DayGroup[];
}

const modalities: Modality[] = [
    {
        title: "Jiu-Jitsu",
        badge: "Adulto",
        color: "text-accent",
        schedule: [
            {
                days: "Seg, Qua e Sex",
                times: [
                    { time: "09:00 – 10:00" },
                    { time: "20:15 – 22:00", note: "Seg e Qua" },
                    { time: "20:00 – 21:00", note: "Soltinho · Sexta" },
                ],
            },
            {
                days: "Ter e Qui",
                times: [
                    { time: "06:00 – 07:00" },
                    { time: "16:00 – 17:00" },
                    { time: "21:00 – 22:00", note: "Treino NO GI · Toda Terça" },
                ],
            },
        ],
    },
    {
        title: "Jiu-Jitsu",
        badge: "Criança e Adolescente",
        color: "text-accent",
        schedule: [
            {
                days: "Seg, Qua e Sex",
                times: [
                    { time: "18:00 – 19:00", note: "6 a 9 anos" },
                    { time: "19:00 – 20:00", note: "A partir de 10 anos" },
                ],
            },
        ],
    },
    {
        title: "Boxe",
        badge: "Adulto",
        color: "text-accent",
        schedule: [
            {
                days: "Seg, Qua e Sex",
                times: [
                    { time: "10:00 – 11:00" },
                    { time: "13:00 – 14:00" },
                ],
            },
            {
                days: "Ter e Qui",
                times: [{ time: "19:30 – 21:00" }],
            },
        ],
    },
    {
        title: "Muay Thai",
        badge: "Adulto",
        color: "text-accent",
        schedule: [
            {
                days: "Seg, Qua e Sex",
                times: [{ time: "07:00 – 08:00" }],
            },
            {
                days: "Ter e Qui",
                times: [
                    { time: "17:00 – 18:00" },
                    { time: "18:00 – 19:30" },
                ],
            },
        ],
    },
];

const ScheduleSection = () => {
    return (
        <section id="horarios" className="py-24 relative grunge-overlay">
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
                    HORÁRIOS DE <span className="text-gradient-red">TREINO</span>
                </h2>
                <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16">
                    Escolha a modalidade e o melhor horário para encaixar o treino na sua rotina.
                </p>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {modalities.map((mod, index) => (
                        <div
                            key={index}
                            className="bg-card border border-border rounded-sm p-6 hover:border-accent/40 transition-colors duration-300 group"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-5">
                                <div>
                                    <span className="text-accent font-heading text-xs font-semibold uppercase tracking-widest">
                                        {mod.badge}
                                    </span>
                                    <h3 className="font-heading text-2xl font-bold text-foreground mt-0.5">
                                        {mod.title}
                                    </h3>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0 ml-4">
                                    <Clock className="w-5 h-5 text-accent" />
                                </div>
                            </div>

                            {/* Schedule groups */}
                            <div className="space-y-5">
                                {mod.schedule.map((group, gi) => (
                                    <div key={gi}>
                                        <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-2">
                                            {group.days}
                                        </p>
                                        <div className="space-y-2">
                                            {group.times.map((t, ti) => (
                                                <div
                                                    key={ti}
                                                    className="flex items-center gap-3 border-l-2 border-accent/30 pl-3"
                                                >
                                                    <div>
                                                        <span className="text-foreground font-heading font-semibold text-sm">
                                                            {t.time}
                                                        </span>
                                                        {t.note && (
                                                            <span className="text-muted-foreground text-xs ml-2">
                                                                · {t.note}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;