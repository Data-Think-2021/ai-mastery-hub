import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center py-24 md:py-32">
      <div className="container max-w-4xl mx-auto text-center">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-display font-bold tracking-tighter text-5xl md:text-7xl lg:text-8xl text-foreground text-balance leading-[0.95]"
        >
          Master AI and Build Real Solutions — Even If You're Not Technical
        </motion.h1>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed"
        >
          Practical AI learning programs for builders, professionals, parents, and innovators.
          Learn how to use AI tools, build your own solutions, and automate real workflows.
        </motion.p>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 text-base text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed"
        >
          Whether you want to systematically learn AI, experiment with vibe coding, help your children
          understand AI, or automate your work, these sessions will help you move from curiosity to capability.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <a
            href="#programs"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-display font-semibold text-base transition-all hover:opacity-90 text-primary-foreground"
            style={{ background: "var(--gradient-primary)" }}
          >
            Start Learning AI
            <ArrowRight size={18} />
          </a>
          <a
            href="#programs"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border bg-card font-display font-semibold text-base text-foreground transition-colors hover:bg-secondary"
          >
            See All Programs
            <ChevronDown size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
