"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  X
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const navItems = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" }
];

const tickerItems = [
  "PYTHON",
  "SOFTWARE ENGINEER",
  "AWS",
  "FASTAPI",
  "REACT",
  "POSTGRESQL",
  "KAFKA",
  "CLOUD ENGINEERING",
  "CONTINUOUS LEARNER"
];

const skills = {
  Languages: ["Python", "TypeScript", "JavaScript", "SQL", "C#", "HTML5", "CSS3"],
  Frameworks: ["FastAPI", "React", "Node.js", "Pydantic", "SQLAlchemy"],
  "Cloud & Data": ["AWS", "S3", "Lambda", "SageMaker", "PostgreSQL", "Snowflake", "Databricks", "Kafka", "Redis"],
  "AI / ML": ["Generative AI", "LLMs", "RAG", "LangChain", "NLP", "Embeddings", "Agentic AI"],
  "Developer Tools": ["Git", "GitHub", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins"],
  Testing: ["pytest", "Unit Testing", "Integration Testing", "REST API Testing"]
};

const projects = [
  {
    number: "01",
    category: "BACKEND · AI",
    title: "Document Intelligence Platform",
    bullets: [
      "Built an NLP-powered financial document intelligence solution using OCR, embeddings, and semantic search across 100K+ regulatory filings and research reports.",
      "Created RAG-based retrieval workflows for risk reports, compliance documents, and portfolio insights.",
      "Reduced analyst research effort by 40% and improved information discovery accuracy by 30%."
    ],
    stack: "Python, NLP, RAG, LangChain, Embeddings, AWS",
    visual: "documents"
  },
  {
    number: "02",
    category: "CLOUD · ML",
    title: "Paper Plane Performance ML Pipeline",
    bullets: [
      "Built an end-to-end machine learning pipeline to predict paper-plane flight performance.",
      "Used S3, Lambda, Step Functions, SageMaker Processing and Training Jobs with Random Forest and XGBoost models.",
      "Containerized a Flask inference API and connected the workflow to AWS-native services."
    ],
    stack: "AWS, SageMaker, S3, Lambda, XGBoost, Flask",
    visual: "ml"
  },
  {
    number: "03",
    category: "BACKEND · API",
    title: "Project & Task Management API",
    bullets: [
      "Developed a production-style REST API with Python and FastAPI for project and task management workflows.",
      "Implemented JWT authentication and role-based authorization for Admin, Manager, and User roles.",
      "Added PostgreSQL persistence, pagination, filtering, sorting, Docker support, and pytest unit/integration testing."
    ],
    stack: "Python, FastAPI, PostgreSQL, Docker, JWT, pytest",
    visual: "api"
  },
  {
    number: "04",
    category: "AI · AGENTIC",
    title: "Multi-Agent Decision Workflow",
    bullets: [
      "Built an agentic AI system using GPT-4, LangChain, and RAG to automate multi-step reasoning and decision workflows.",
      "Implemented vector retrieval with Pinecone and coordinated specialized agents for task execution.",
      "Focused the system on reliable context retrieval and repeatable workflow automation."
    ],
    stack: "GPT-4, LangChain, RAG, Pinecone, Python",
    visual: "agents"
  }
];

const education = [
  {
    school: "Cumberland University",
    degree: "Master of Science in Information Technology",
    dates: "Expected Aug 2026",
    detail: "Graduate studies focused on software engineering, cloud technologies, data platforms, and applied AI."
  }
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "documents") {
    return (
      <div className="preview preview-documents">
        <div className="preview-top"><span /> <span /> <span /></div>
        <div className="doc-grid">
          <div className="doc-panel">
            <div className="doc-line w-70" />
            <div className="doc-line w-90" />
            <div className="doc-line w-60" />
            <div className="doc-line w-80" />
            <div className="doc-line w-50" />
          </div>
          <div className="search-panel">
            <div className="search-box">Search regulatory filings...</div>
            <div className="result"><b>Risk report</b><small>Semantic match · 94%</small></div>
            <div className="result"><b>Compliance filing</b><small>Semantic match · 91%</small></div>
            <div className="result"><b>Portfolio document</b><small>Semantic match · 88%</small></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "ml") {
    return (
      <div className="preview preview-ml">
        <div className="chart-label">SageMaker Pipeline</div>
        <div className="pipeline">
          {["S3", "Processing", "Training", "XGBoost", "API"].map((x, i) => (
            <div key={x} className="pipeline-node">
              <span>{String(i + 1).padStart(2, "0")}</span>{x}
            </div>
          ))}
        </div>
        <div className="metric-row"><strong>Prediction</strong><span>Flight performance</span></div>
        <div className="fake-chart"><i /><i /><i /><i /><i /><i /><i /></div>
      </div>
    );
  }

  if (type === "api") {
    return (
      <div className="preview preview-api">
        <div className="api-header">Project API <span>200 OK</span></div>
        <div className="api-row"><b>POST</b><code>/auth/login</code><em>JWT</em></div>
        <div className="api-row"><b>GET</b><code>/projects</code><em>200</em></div>
        <div className="api-row"><b>GET</b><code>/tasks?page=1</code><em>200</em></div>
        <div className="api-row"><b>PATCH</b><code>/tasks/:id</code><em>200</em></div>
        <div className="api-footer"><span>PostgreSQL</span><span>FastAPI</span><span>Docker</span></div>
      </div>
    );
  }

  return (
    <div className="preview preview-agents">
      <div className="agent-center">RAG</div>
      <div className="agent a1">Planner</div>
      <div className="agent a2">Retriever</div>
      <div className="agent a3">Analyst</div>
      <div className="agent a4">Verifier</div>
      <div className="agent-line l1" />
      <div className="agent-line l2" />
      <div className="agent-line l3" />
      <div className="agent-line l4" />
    </div>
  );
}

function CursorFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      aria-hidden
      className="cursor-follower"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      <span />
    </div>
  );
}

export function Portfolio() {
  const [active, setActive] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const onScroll = () => {
      const y = window.scrollY + 180;
      let current = "about";
      for (const section of sections) {
        if (section.offsetTop <= y) current = section.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <CursorFollower />

      <header className="site-header">
        <nav className="nav-pill">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={active === item.id ? "nav-link active" : "nav-link"}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button className="mobile-menu" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open navigation">
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        {mobileOpen && (
          <div className="mobile-nav">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}>{item.label}</button>
            ))}
          </div>
        )}
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="hero-kicker">SOFTWARE ENGINEER · AI/ML · CLOUD</p>
              <h1>Hi, I&apos;m<br /><span>Sree Sowmya.</span></h1>
              <p className="hero-description">
                I&apos;m a Software Engineer and MS-IT graduate focused on building scalable backend systems,
                cloud-native applications, data platforms, and practical AI-powered products.
              </p>

              <div className="social-row">
                <a href="mailto:gaddamsreesowmya@gmail.com" className="social-pill"><Mail size={16} /> Email</a>
                <a href="https://www.linkedin.com/in/sreesowmya/" target="_blank" rel="noreferrer" className="social-pill"><Linkedin size={16} /> LinkedIn</a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-pill"><Github size={16} /> GitHub</a>
              </div>

              <div className="hero-actions">
                <Button asChild>
                  <a href="mailto:gaddamsreesowmya@gmail.com">Let&apos;s work together <ArrowUpRight size={17} /></a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#projects">View projects <ArrowDown size={16} /></a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="hero-art"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="orbit orbit-1" />
              <div className="orbit orbit-2" />
              <div className="skill-float f1">Python</div>
              <div className="skill-float f2">AWS</div>
              <div className="skill-float f3">FastAPI</div>
              <div className="skill-float f4">React</div>
              <div className="skill-float f5">SQL</div>
              <div className="profile-photo">
                <Image
                  src="/profile.jpeg"
                  alt="Sree Sowmya Gaddam"
                  fill
                  priority
                  sizes="(max-width: 900px) 240px, 315px"
                  className="profile-image"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <div className="ticker">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span key={`${item}-${index}`}><b>✦</b>{item}</span>
            ))}
          </div>
        </div>

        <section id="about" className="section about-section">
          <div className="section-heading">
            <p>ABOUT ME</p>
            <h2>Building reliable software<br />from idea to production.</h2>
            <span>I enjoy solving real engineering problems with clean architecture, measurable outcomes, and technology that serves the user.</span>
          </div>

          <div className="about-grid">
            <Card className="about-card">
              <div className="card-eyebrow">MY APPROACH</div>
              <h3>Engineering first.<br />Outcome always.</h3>
              <p>
                My experience spans Python microservices, distributed data pipelines, AWS infrastructure,
                REST APIs, NLP, RAG, and modern frontend development. I like taking complex requirements
                and turning them into maintainable systems with strong testing, security, and observability.
              </p>
              <div className="check-list">
                {[
                  "Scalable backend and API architecture",
                  "Cloud-native AWS development",
                  "Data and event-driven systems",
                  "Applied AI/ML and LLM integration"
                ].map((x) => <div key={x}><Check size={16} />{x}</div>)}
              </div>
            </Card>

            <Card className="experience-card">
              <div className="card-eyebrow">EXPERIENCE</div>
              <div className="experience-item">
                <div><h3>Software Engineer</h3><p>KCC Capital Partners</p></div>
                <span>2024 — Present</span>
              </div>
              <div className="experience-item">
                <div><h3>Software Engineer · Barclays Client</h3><p>KCC Capital Partners</p></div>
                <span>2022 — 2024</span>
              </div>
              <div className="experience-item">
                <div><h3>Research Assistant / Software Engineer</h3><p>Cumberland University</p></div>
                <span>2025 — Present</span>
              </div>
              <div className="impact-row">
                <div><strong>10TB+</strong><span>monthly data processed</span></div>
                <div><strong>500K+</strong><span>daily events</span></div>
                <div><strong>73%</strong><span>faster risk computation</span></div>
              </div>
            </Card>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading center">
            <p>PROJECTS</p>
            <h2>Selected work.</h2>
            <span>Real engineering projects across backend systems, cloud, data, and AI.</span>
          </div>

          <div className="projects-list">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="project-row"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
              >
                <div className="project-copy">
                  <p className="project-category">{project.number} — {project.category}</p>
                  <h3>{project.title}</h3>
                  <ul>
                    {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                  <div className="tech-stack"><strong>Tech Stack:</strong> {project.stack}</div>
                  <a className="project-link" href="https://github.com/" target="_blank" rel="noreferrer">
                    View GitHub <ArrowUpRight size={17} />
                  </a>
                </div>
                <div className="project-preview">
                  <ProjectVisual type={project.visual} />
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="education" className="section education-section">
          <div className="section-heading center">
            <p>EDUCATION</p>
            <h2>Education & skills.</h2>
            <span>Academic foundation and the technologies I work with.</span>
          </div>

          <div className="education-grid">
            {education.map((item) => (
              <Card key={item.school} className="education-card">
                <div className="education-icon"><GraduationCap size={24} /></div>
                <h3>{item.school}</h3>
                <h4>{item.degree}</h4>
                <p>{item.dates}</p>
                <div className="education-divider" />
                <span>{item.detail}</span>
              </Card>
            ))}
            <Card className="education-card">
              <div className="education-icon"><BriefcaseBusiness size={24} /></div>
              <h3>Professional Focus</h3>
              <h4>Software Engineering · Cloud · AI/ML</h4>
              <p>Backend & Full-Stack Development</p>
              <div className="education-divider" />
              <span>Focused on building production-ready services, data platforms, and intelligent applications.</span>
            </Card>
          </div>

          <div className="skills-heading">
            <p>TECHNICAL SKILLS</p>
            <h2>Tools and technologies I work with.</h2>
          </div>

          <div className="skills-grid">
            {Object.entries(skills).map(([name, items]) => (
              <Card key={name} className="skill-card">
                <h3>{name}</h3>
                <div className="skill-divider" />
                <div className="skill-tags">
                  {items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </Card>
            ))}
          </div>

          <div className="credentials">
            <div className="credential-card">
              <Sparkles size={20} />
              <div><strong>AI / ML</strong><span>RAG · NLP · LLMs · Agentic AI</span></div>
            </div>
            <div className="credential-card">
              <Sparkles size={20} />
              <div><strong>Cloud</strong><span>AWS · Docker · Kubernetes · Terraform</span></div>
            </div>
            <div className="credential-card">
              <Sparkles size={20} />
              <div><strong>Data</strong><span>PostgreSQL · Kafka · Snowflake · Databricks</span></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-inner">
            <p className="hero-kicker">CONTACT</p>
            <h2>Let&apos;s work<br />together.</h2>
            <p>Have a software engineering, AI/ML, backend, or cloud opportunity? I&apos;d love to connect.</p>
            <div className="social-row contact-socials">
              <a href="mailto:gaddamsreesowmya@gmail.com" className="social-pill"><Mail size={16} /> gaddamsreesowmya@gmail.com</a>
              <a href="https://www.linkedin.com/in/sreesowmya/" target="_blank" rel="noreferrer" className="social-pill"><Linkedin size={16} /> LinkedIn</a>
            </div>
            <Button asChild>
              <a href="mailto:gaddamsreesowmya@gmail.com">Get in touch <ArrowUpRight size={17} /></a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Sree Sowmya Gaddam</span>
        <span>Software Engineer · AI/ML · Cloud</span>
      </footer>
    </>
  );
}