import { motion } from "framer-motion";
import { Check, type LucideIcon } from "lucide-react";

interface OfferCardProps {
  icon: LucideIcon;
  format: string;
  title: string;
  description: string[];
  features: string[];
  audiences: string[];
  cta: string;
  index: number;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  }),
};

const OfferCard = ({ icon: Icon, format, title, description, features, audiences, cta, index }: OfferCardProps) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="p-8 border border-border bg-card rounded-xl shadow-sm flex flex-col gap-6 hover:border-primary transition-colors duration-300"
    >
      <div className="flex justify-between items-start">
        <div className="p-3 bg-primary-soft text-primary rounded-lg">
          <Icon size={24} strokeWidth={2} />
        </div>
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground font-mono">
          {format}
        </span>
      </div>

      <h3 className="text-2xl font-display font-bold tracking-tight text-foreground">{title}</h3>

      {description.map((p, i) => (
        <p key={i} className="text-muted-foreground text-pretty leading-relaxed text-sm">
          {p}
        </p>
      ))}

      <ul className="space-y-2.5">
        {features.map((f, i) => (
          <li key={i} className="text-sm flex gap-2.5 items-start text-foreground">
            <Check size={16} className="text-primary mt-0.5 shrink-0" strokeWidth={2.5} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-4">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Best for</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {audiences.map((a, i) => (
            <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
              {a}
            </span>
          ))}
        </div>
        <a
          href="#contact"
          className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-foreground text-background font-display font-semibold text-sm transition-colors hover:bg-foreground/90"
        >
          {cta}
        </a>
      </div>
    </motion.div>
  );
};

export default OfferCard;
