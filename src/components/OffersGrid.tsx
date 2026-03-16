import { Zap, Code, Users, Workflow } from "lucide-react";
import OfferCard from "./OfferCard";

const offers = [
  {
    icon: Zap,
    format: "6 Weeks",
    title: "AI Kickstart Sprint — Build Your AI Foundation",
    description: [
      "A structured program for people who want to systematically learn AI and build real things with it.",
      "Instead of random tutorials and tools, this sprint gives you a clear roadmap from understanding AI fundamentals to creating your own AI-powered workflows and small tools.",
    ],
    features: [
      "How modern AI tools actually work",
      "How to use AI effectively in daily work and projects",
      "How to design useful prompts and workflows",
      "How to build simple AI-powered tools and automations",
      "How to think like an AI builder",
    ],
    audiences: ["Professionals", "Curious builders", "Entrepreneurs"],
    cta: "Join the AI Kickstart Sprint",
  },
  {
    icon: Code,
    format: "2 Sessions",
    title: "Vibe Coding Lab — Build with AI",
    description: [
      "This hands-on workshop focuses on vibe coding — building projects quickly using AI-assisted development.",
      "You will experiment, prototype, and create working tools using modern AI development workflows.",
    ],
    features: [
      "Build simple apps using AI coding assistants",
      "Turn ideas into working prototypes quickly",
      "Learn how non-programmers can build tools with AI",
      "Understand the mindset of rapid AI prototyping",
    ],
    audiences: ["Makers", "Startup founders", "Curious builders"],
    cta: "Join the Vibe Coding Lab",
  },
  {
    icon: Users,
    format: "Free • 1 Hour",
    title: "AI for Parents & Teens",
    description: [
      "AI will shape the future of education, work, and creativity. This session helps parents and teenagers understand AI in a practical and responsible way.",
    ],
    features: [
      "What AI actually is (without technical jargon)",
      "How teenagers are already using AI tools",
      "Opportunities and risks of AI in education",
      "How families can use AI productively and responsibly",
    ],
    audiences: ["Parents", "Teenagers", "Families"],
    cta: "Reserve Free Spot",
  },
  {
    icon: Workflow,
    format: "3-Hour Intensive",
    title: "AI Automation Deep Dive",
    description: [
      "This session focuses on how to automate real workflows using AI and modern automation tools.",
      "You will learn how to connect AI with your daily processes and eliminate repetitive work.",
    ],
    features: [
      "How to design AI-powered workflows",
      "How to automate research, writing, and data tasks",
      "How to combine AI with automation tools",
      "Real examples of productivity systems",
    ],
    audiences: ["Professionals", "Freelancers", "Entrepreneurs"],
    cta: "Join Automation Intensive",
  },
];

const OffersGrid = () => {
  return (
    <section id="programs" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-foreground">
            Choose Your AI Learning Path
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            Different people have different goals with AI. Choose the program that best fits your current stage and interest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer, i) => (
            <OfferCard key={i} {...offer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersGrid;
