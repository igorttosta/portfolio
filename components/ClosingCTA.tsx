"use client";
import Typography from "@mui/material/Typography";
import SocialLinks from "@/components/SocialLinks";

const ClosingCTA = () => (
    <section className="w-full mx-auto px-8 md:px-10 lg:px-20 xl:px-32 pt-4 pb-20 flex flex-col items-center text-center gap-6">
        <Typography variant="h5" className="text-primary">
            Vamos conversar?
        </Typography>
        <Typography variant="body1" className="text-muted-foreground max-w-xl">
            Estou aberto a novas oportunidades. Fica à vontade para entrar em contato por aqui.
        </Typography>
        <SocialLinks />
    </section>
);

export default ClosingCTA;
