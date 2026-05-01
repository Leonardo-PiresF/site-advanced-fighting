import { Check } from "lucide-react";
import { useState } from "react";

interface Plan {
    label: string;
    monthlyPrice: number | null;
    totalPrice: number | null;
    period: "mês" | "trimestre" | "semestre" | "ano";
    highlight?: boolean;
    discount?: string;
}

interface Gender {
    title: "Feminino" | "Masculino" | "Kids e adolescentes";
    plans: Plan[];
}

interface Modality {
    id: string;
    title: string;
    genders: Gender[];
}

const modalities: Modality[] = [
    {
        id: "jiu-jitsu",
        title: "Jiu-Jitsu",
        genders: [
            {
                title: "Feminino",
                plans: [
                    {
                        label: "Mês a Mês",
                        monthlyPrice: 105,
                        totalPrice: null,
                        period: "mês",
                        discount: "R$ 5 de desconto pagando em dia",
                    },
                    {
                        label: "Trimestral",
                        monthlyPrice: 95,
                        totalPrice: 285,
                        period: "trimestre",
                    },
                    {
                        label: "Semestral",
                        monthlyPrice: 90,
                        totalPrice: 540,
                        period: "semestre",
                        highlight: true,
                    },
                    {
                        label: "Anual",
                        monthlyPrice: 85,
                        totalPrice: 1020,
                        period: "ano",
                    },
                ],
            },
            {
                title: "Masculino",
                plans: [
                    {
                        label: "Mês a Mês",
                        monthlyPrice: 120,
                        totalPrice: null,
                        period: "mês",
                        discount: "R$ 5 de desconto pagando em dia",
                    },
                    {
                        label: "Trimestral",
                        monthlyPrice: 105,
                        totalPrice: 315,
                        period: "trimestre",
                    },
                    {
                        label: "Semestral",
                        monthlyPrice: 100,
                        totalPrice: 600,
                        period: "semestre",
                        highlight: true,
                    },
                    {
                        label: "Anual",
                        monthlyPrice: 95,
                        totalPrice: 1140,
                        period: "ano",
                    },
                ],
            },
            {
                title: "Kids e adolescentes",
                plans: [
                    {
                        label: "Mês a Mês",
                        monthlyPrice: 120,
                        totalPrice: null,
                        period: "mês",
                        discount: "R$ 5 de desconto pagando em dia",
                    },
                    {
                        label: "Trimestral",
                        monthlyPrice: 105,
                        totalPrice: 315,
                        period: "trimestre",
                    },
                    {
                        label: "Semestral",
                        monthlyPrice: 100,
                        totalPrice: 600,
                        period: "semestre",
                        highlight: true,
                    },
                    {
                        label: "Anual",
                        monthlyPrice: 95,
                        totalPrice: 1140,
                        period: "ano",
                    },
                ],
            },
        ],
    },
    {
        id: "muay-thai",
        title: "Muay Thai",
        genders: [
            {
                title: "Feminino",
                plans: [
                    { label: "Mês a Mês", monthlyPrice: null, totalPrice: null, period: "mês", discount: "R$ 5 de desconto pagando em dia" },
                    { label: "Trimestral", monthlyPrice: null, totalPrice: null, period: "trimestre" },
                    { label: "Semestral", monthlyPrice: null, totalPrice: null, period: "semestre", highlight: true },
                    { label: "Anual", monthlyPrice: null, totalPrice: null, period: "ano" },
                ],
            },
            {
                title: "Masculino",
                plans: [
                    { label: "Mês a Mês", monthlyPrice: null, totalPrice: null, period: "mês", discount: "R$ 5 de desconto pagando em dia" },
                    { label: "Trimestral", monthlyPrice: null, totalPrice: null, period: "trimestre" },
                    { label: "Semestral", monthlyPrice: null, totalPrice: null, period: "semestre", highlight: true },
                    { label: "Anual", monthlyPrice: null, totalPrice: null, period: "ano" },
                ],
            },
        ],
    },
    {
        id: "boxe",
        title: "Boxe",
        genders: [
            {
                title: "Feminino",
                plans: [
                    { label: "Mês a Mês", monthlyPrice: null, totalPrice: null, period: "mês", discount: "R$ 5 de desconto pagando em dia" },
                    { label: "Trimestral", monthlyPrice: null, totalPrice: null, period: "trimestre" },
                    { label: "Semestral", monthlyPrice: null, totalPrice: null, period: "semestre", highlight: true },
                    { label: "Anual", monthlyPrice: null, totalPrice: null, period: "ano" },
                ],
            },
            {
                title: "Masculino",
                plans: [
                    { label: "Mês a Mês", monthlyPrice: null, totalPrice: null, period: "mês", discount: "R$ 5 de desconto pagando em dia" },
                    { label: "Trimestral", monthlyPrice: null, totalPrice: null, period: "trimestre" },
                    { label: "Semestral", monthlyPrice: null, totalPrice: null, period: "semestre", highlight: true },
                    { label: "Anual", monthlyPrice: null, totalPrice: null, period: "ano" },
                ],
            },
        ],
    },
];

const perks = [
    "Dinheiro, Pix ou Débito",
    "Crédito com acréscimo da maquineta",
    "Desconto por pontualidade",
];

const PricingSection = () => {
    const [activeTab, setActiveTab] = useState("jiu-jitsu");

    const activeModality = modalities.find((m) => m.id === activeTab)!;

    return (
        <section id="precos" className="py-24 bg-secondary relative grunge-overlay">
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
                    PLANOS E <span className="text-gradient-red">VALORES</span>
                </h2>
                <p className="text-muted-foreground text-center max-w-lg mx-auto mb-12">
                    Quanto mais você se compromete, mais você economiza. Escolha o plano ideal para você.
                </p>

                {/* Modality Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="flex border border-border rounded-sm overflow-hidden">
                        {modalities.map((mod) => (
                            <button
                                key={mod.id}
                                onClick={() => setActiveTab(mod.id)}
                                className={`font-heading text-xs font-bold uppercase tracking-widest px-6 py-3 transition-all duration-200 ${activeTab === mod.id
                                    ? "bg-accent text-accent-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:bg-card"
                                    }`}
                            >
                                {mod.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Gender sections */}
                <div className="max-w-5xl mx-auto space-y-12">
                    {activeModality.genders.map((gender) => (
                        <div key={gender.title}>
                            <h3 className="font-heading text-2xl font-bold text-foreground mb-6 uppercase tracking-widest border-b border-border pb-3">
                                <span className="text-accent">▸</span> {gender.title}
                            </h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {gender.plans.map((plan) => (
                                    <div
                                        key={plan.label}
                                        className={`relative bg-card rounded-sm p-6 flex flex-col transition-all duration-300 hover:border-accent/50 ${plan.highlight
                                            ? "border-2 border-accent"
                                            : "border border-border"
                                            }`}
                                    >
                                        {plan.highlight && (
                                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-heading font-bold uppercase px-3 py-1 rounded-sm tracking-widest whitespace-nowrap">
                                                Mais popular
                                            </span>
                                        )}

                                        <span className="text-accent font-heading text-xs font-semibold uppercase tracking-widest mb-3">
                                            {plan.label}
                                        </span>

                                        {plan.monthlyPrice !== null ? (
                                            <>
                                                <div className="mb-1">
                                                    <span className="text-muted-foreground text-xs">R$</span>
                                                    <span className="font-heading text-4xl font-bold text-foreground mx-1">
                                                        {plan.monthlyPrice}
                                                    </span>
                                                    <span className="text-muted-foreground text-xs">/mês</span>
                                                </div>
                                                {plan.totalPrice && (
                                                    <p className="text-muted-foreground text-xs mb-4">
                                                        R$ {plan.totalPrice.toLocaleString("pt-BR")},{" "}
                                                        <span className="text-foreground/60">no {plan.period}</span>
                                                    </p>
                                                )}
                                            </>
                                        ) : (
                                            <div className="mb-4 flex-1 flex flex-col justify-center">
                                                <span className="font-heading text-lg font-bold text-muted-foreground/50 uppercase tracking-widest">
                                                    A definir
                                                </span>
                                                <span className="text-xs text-muted-foreground/40 mt-1">
                                                    Em breve
                                                </span>
                                            </div>
                                        )}

                                        {plan.discount && (
                                            <p className="text-xs text-accent/80 mt-auto pt-4 border-t border-border">
                                                {plan.discount}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Formas de pagamento */}
                <div className="mt-14 max-w-xl mx-auto bg-card border border-border rounded-sm p-6">
                    <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-accent mb-4">
                        Formas de pagamento
                    </h4>
                    <ul className="space-y-2">
                        {perks.map((p) => (
                            <li key={p} className="flex items-center gap-2 text-muted-foreground text-sm">
                                <Check className="w-4 h-4 text-accent shrink-0" />
                                {p}
                            </li>
                        ))}
                    </ul>
                    <p className="text-xs text-muted-foreground/60 mt-4 border-t border-border pt-4">
                        Em caso de cancelamento de planos, será descontado 20% sobre as mensalidades restantes.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;