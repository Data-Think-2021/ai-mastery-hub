import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-foreground">
            Start Your AI Journey
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-balance">
            AI is becoming a fundamental skill — like using the internet or computers.
            These programs are designed to help you move from curiosity to capability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-foreground text-background font-display font-semibold text-base transition-colors hover:bg-foreground/90"
            >
              Join a Program
              <ArrowRight size={18} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border bg-background font-display font-semibold text-base text-foreground transition-colors hover:bg-card"
            >
              Contact for Questions
              <Mail size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
