import { motion } from "framer-motion";

const points = [
  { num: "01", title: "Practical, not theoretical", desc: "Every session is built around real tasks and workflows you can apply immediately." },
  { num: "02", title: "Small groups", desc: "Interactive sessions with direct access to expert guidance and peer learning." },
  { num: "03", title: "Real-world focus", desc: "No abstract lectures. Every example comes from actual business and creative use cases." },
  { num: "04", title: "For everyone", desc: "Designed for both non-technical and technical participants to learn together." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const WhyDifferent = () => {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-foreground">
            Why These Sessions Are Different
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {points.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`p-8 ${i < points.length - 1 ? "lg:border-r lg:border-border" : ""}`}
            >
              <span className="text-accent font-mono text-sm font-medium">{p.num}</span>
              <h3 className="text-lg font-display font-bold text-foreground mt-3 mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
