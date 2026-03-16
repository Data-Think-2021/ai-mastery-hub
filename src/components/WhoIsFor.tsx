import { motion } from "framer-motion";
import { Briefcase, Lightbulb, Heart, Hammer } from "lucide-react";

const audiences = [
  { icon: Briefcase, label: "Professionals curious about AI" },
  { icon: Lightbulb, label: "Entrepreneurs and creators" },
  { icon: Heart, label: "Parents wanting to understand AI" },
  { icon: Hammer, label: "People who want to build, not just read" },
];

const WhoIsFor = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-foreground">
            Who This Is For
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card"
            >
              <div className="p-2.5 bg-primary-soft text-primary rounded-lg shrink-0">
                <a.icon size={20} strokeWidth={2} />
              </div>
              <p className="text-sm font-medium text-foreground leading-snug">{a.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsFor;
