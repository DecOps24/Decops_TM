import { Link } from 'react-router-dom';
import {
  FaCloudArrowUp,
  FaCode,
  FaServer,
  FaRocket,
  FaShieldHalved,
  FaBrain,
  FaGears,
} from 'react-icons/fa6';
import { Button } from '../components/Button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/Card';

export default function Home() {
  const services = [
    {
      icon: (
        <FaCloudArrowUp className="text-decops-pink text-2xl group-hover:scale-110 transition-transform" />
      ),
      title: 'DevOps & Cloud Automation',
      desc: 'Accelerate deployment velocity with automated CI/CD pipelines, Kubernetes orchestration, and Infrastructure as Code.',
      tags: ['AWS / GCP', 'Kubernetes', 'Docker', 'Terraform'],
    },
    {
      icon: (
        <FaCode className="text-decops-pink text-2xl group-hover:scale-110 transition-transform" />
      ),
      title: 'Custom Software Architecture',
      desc: 'Scalable web applications, cloud-native APIs, and high-performance microservices crafted with modern tech stacks.',
      tags: ['React / Next.js', 'Node.js', 'Python', 'Microservices'],
    },
    {
      icon: (
        <FaShieldHalved className="text-decops-pink text-2xl group-hover:scale-110 transition-transform" />
      ),
      title: 'Cybersecurity & Governance',
      desc: 'Proactive threat monitoring, vulnerability assessments, and zero-trust security architectures to keep your data compliant.',
      tags: ['Zero-Trust', 'Pen Testing', 'ISO 27001', 'SOC2'],
    },
    {
      icon: (
        <FaBrain className="text-decops-pink text-2xl group-hover:scale-110 transition-transform" />
      ),
      title: 'AI & Data Engineering',
      desc: 'Transform raw enterprise data into predictive insights using custom ML models, automated pipelines, and analytics platforms.',
      tags: ['LLM Integration', 'ETL Pipelines', 'BigData', 'PyTorch'],
    },
    {
      icon: (
        <FaServer className="text-decops-pink text-2xl group-hover:scale-110 transition-transform" />
      ),
      title: 'Managed IT Operations',
      desc: 'Proactive 24/7 infrastructure monitoring, rapid incident response, and cloud optimization around the clock.',
      tags: ['24/7 Monitoring', 'SLA Support', 'Cost Optimization'],
    },
    {
      icon: (
        <FaGears className="text-decops-pink text-2xl group-hover:scale-110 transition-transform" />
      ),
      title: 'IT Strategy & Transformation',
      desc: 'Expert technical consulting to modernize legacy systems, streamline IT budgets, and architect future-proof enterprise roadmap.',
      tags: ['System Audit', 'Legacy Modernization', 'Cloud Migration'],
    },
  ];

  return (
    <div className="relative min-h-screen text-gray-900">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-decops-pink/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-15 text-center">

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-decops-pink/10 border border-decops-pink/30 text-decops-pink mb-6">
            <FaRocket className="text-[#FF2A85] text-sm"/>
            <span>IT Startup & Innovation Lab</span>
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-[#1F2937]">
            Transforming Complex Workflows into
            <br />

            <span className="bg-decops-text-gradient bg-clip-text text-transparent">
              Scalable IT Products & Services
            </span>
          </h1>

          <p className="text-base md:text-lg font-medium leading-relaxed text-[#4B5563] max-w-2xl mx-auto mb-10">
            Decops Pvt Ltd blends custom software development with enterprise
            cloud automation to power modern IT infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Partner With Us
              </Button>
            </Link>
            
            <Link to="/about">
              <Button variant="secondary" size="lg">
              Learn About Decops
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="relative overflow-hidden">

        {/* Background Glow Effects */}
        <div className="absolute top-1/2 left-0 w-100 h-100 bg-decops-purple/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="absolute bottom-0 right-0 w-100 h-100 bg-decops-pink/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* SECTION HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-16">

            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-decops-pink/10 border border-decops-pink/30 text-decops-pink mb-6">
              Enterprise Capabilities
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-[#1F2937]">
              Our Core{' '}
              <span className="bg-decops-text-gradient bg-clip-text text-transparent">
                IT Services
              </span>
            </h1>

            <p className="text-base md:text-lg font-medium leading-relaxed text-[#4B5563] max-w-2xl mx-auto mb-10">
              End-to-end technical execution designed for high-growth startups
              and enterprise transformations.
            </p>

          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group relative flex flex-col justify-between overflow-hidden border-gray-200 hover:border-decops-pink/60 hover:shadow-decops-pink/10 hover:-translate-y-2 p-8 shadow-lg transition-all duration-300">
                {/* Card Glow Background */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-decops-pink/5 rounded-full blur-xl group-hover:bg-decops-pink/20 transition-all duration-500 pointer-events-none" />
                {/* Header & Main Content */}
                <CardHeader className="mb-0 gap-0">
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-decops-pink/10 border border-decops-pink/30 flex items-center justify-center group-hover:bg-decops-gradient transition-all duration-300 shadow-md">
                      {service.icon}
                    </div>
                    <span className="text-2xl font-black text-gray-200 group-hover:text-decops-pink/40 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {/* Title */}
                  <CardTitle className="mb-3 group-hover:text-decops-pink transition-colors">
                    {service.title}
                  </CardTitle>

                  {/* Description */}
                  <CardDescription className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6">
                    {service.desc}
                  </CardDescription>
                </CardHeader>

                {/* Technology Tags (Card Footer) */}
                <CardFooter className="mt-0 pt-4 border-t border-gray-200 flex-wrap justify-start gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[10px] font-medium text-gray-600 px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 group-hover:border-decops-purple/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <Card className="mt-16 p-8 text-center flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl border-gray-200">
            <div className="text-left">
              <CardTitle className="text-xl font-bold text-gray-900">
                Need a custom IT solution tailored for your team?
              </CardTitle>

              <CardDescription className="text-xs text-gray-500 mt-1">
                Our architects will analyze your infrastructure and provide a custom roadmap.
              </CardDescription>
            </div>

            <Link to="/contact">
              <Button
                variant="primary"
                size="md"
                className="text-xs font-bold uppercase tracking-wider whitespace-nowrap"
              >
                Schedule a Consultation
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}