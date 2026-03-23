export const portfolioData = {
  // Replace these with your details
  personal: {
    name: "[YOUR_NAME]",
    tagline: "Web Developer & AI/Automation Engineer",
    shortIntro:
      "I build fast, polished web applications and architect intelligent automations that save time and amplify impact. Passionate about beautiful UI, scalable systems, and integrating AI into practical workflows.",
    resumeLink: "/resume.pdf", // Place your resume.pdf in the public/ folder
    email: "hello@example.com",
    linkedinUrl: "https://linkedin.com/in/[YOUR_PROFILE]",
    githubUrl: "https://github.com/[YOUR_USERNAME]",
    location: "Remote / [YOUR_CITY]",
  },

  about: {
    professionalSummary:
      "With a hybrid background in both frontend architecture and backend systems, I focus on delivering seamless user experiences powered by robust, automated infrastructure. I thrive in environments where I can leverage my expertise in modern web stacks (like React/Next.js) alongside cutting-edge AI integrations to solve complex product challenges.",
    principles: [
      {
        title: "Ship Quality Fast",
        description: "Balancing speed with maintainability through automated testing and clean code.",
      },
      {
        title: "User-Centric AI",
        description: "AI should feel like magic, not a hurdle. I build intuitive interfaces for complex models.",
      },
      {
        title: "Robust Architecture",
        description: "Component-driven design on the frontend, scalable microservices and serverless functions on the backend.",
      },
    ]
  },

  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Python", "PostgreSQL", "Redis", "REST/GraphQL APIs"],
    aiAutomation: ["OpenAI API", "LangChain", "Vector Databases", "Make/Zapier", "Custom Webhooks"],
    tools: ["Git", "Docker", "Vercel", "AWS", "CI/CD Pipelines"],
  },

  projects: [
    {
      id: "project-1",
      title: "AI Support Agent Dashboard",
      description: "A full-stack dashboard for monitoring and routing AI customer support agents, built to handle 10k+ daily queries with real-time analytics.",
      techStack: ["Next.js", "TypeScript", "Tailwind", "OpenAI API", "Supabase"],
      role: "Lead Full Stack Engineer",
      impact: "Reduced manual ticket triage time by 40% and improved response times.",
      liveLink: "https://example.com",
      githubLink: "https://github.com/example/project1",
      categories: ["AI / Automation", "Full Stack"],
    },
    {
      id: "project-2",
      title: "E-Commerce Micro-Frontend",
      description: "A highly performant, modular checkout flow built with a modern React stack, designed to be embedded across multiple partner sites seamlessly.",
      techStack: ["React", "Zustand", "Tailwind", "Stripe API"],
      role: "Frontend Architect",
      impact: "Increased conversion rate by 15% through a frictionless checkout experience.",
      liveLink: "https://example.com",
      githubLink: "https://github.com/example/project2",
      categories: ["Web Development", "Frontend"],
    },
    {
      id: "project-3",
      title: "Automated Content Pipeline",
      description: "A serverless pipeline that automatically curates, summarizes, and publishes industry news using LLMs and automated workflows.",
      techStack: ["Python", "AWS Lambda", "LangChain", "GitHub Actions"],
      role: "Automation Engineer",
      impact: "Saved marketing teams 15 hours per week of manual content generation.",
      liveLink: "https://example.com",
      githubLink: "https://github.com/example/project3",
      categories: ["AI / Automation", "Backend"],
    },
  ],

  experience: [
    {
      id: "exp-1",
      role: "Senior Software Engineer",
      company: "[Company Name]",
      period: "2021 - Present",
      description: "Led the development of a unified analytics platform. Spearheaded the integration of LLM-based query systems, allowing users to ask natural language questions about their data.",
    },
    {
      id: "exp-2",
      role: "Frontend Developer",
      company: "[Agency Name]",
      period: "2019 - 2021",
      description: "Built performant, animated, and accessible web applications for high-profile clients using React and modern CSS architectures.",
    },
    {
      id: "exp-3",
      role: "Freelance Automation Consultant",
      company: "Self-Employed",
      period: "2018 - 2019",
      description: "Designed automated workflows connecting CRMs, marketing platforms, and databases for small businesses.",
    },
  ],

  process: [
    {
      step: "01",
      title: "Discover & Architect",
      description: "Understanding the exact problem, mapping out user flows, and choosing the right tech stack to ensure long-term scalability without over-engineering."
    },
    {
      step: "02",
      title: "Build & Iterate",
      description: "Component-driven development with frequent check-ins. Implementing functional, accessible UI alongside robust backend services and APIs."
    },
    {
      step: "03",
      title: "Polish & Launch",
      description: "Focusing on the final 10%—smooth animations, performance profiling, responsive design edge cases, and comprehensive error handling."
    }
  ],
};
