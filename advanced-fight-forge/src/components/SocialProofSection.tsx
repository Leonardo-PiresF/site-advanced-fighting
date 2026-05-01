import teamPhoto from "@/assets/team-photo.png";

const SocialProofSection = () => {
  return (
    <section className="py-24 bg-secondary relative grunge-overlay">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              MAIS QUE UMA ACADEMIA.<br />
              <span className="text-gradient-red">UMA FAMÍLIA.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              No C.T. Advanced Fighting, cada aluno é parte da equipe. Aqui você encontra um ambiente
              acolhedor, com respeito e parceria, desde o primeiro dia no tatame até as competições.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossa comunidade já formou centenas de alunos em Maceió, desde crianças até adultos,
              todos unidos pela paixão pelas artes marciais.
            </p>

          </div>
          <div className="relative">
            <img
              src={teamPhoto}
              alt="Equipe C.T. Advanced Fighting"
              className="w-full rounded-sm shadow-2xl"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
