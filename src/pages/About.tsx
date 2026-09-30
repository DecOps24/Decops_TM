import {
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaAward,
  FaShieldHalved,
} from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';
import { Card, CardDescription, CardHeader, CardTitle } from '../components/Card';

export default function About() {
  const values = [
    {
      icon: <FaRocket className="text-decops-pink text-2xl" />,
      title: 'Velocity & Innovation',
      desc: 'We engineer automated systems that allow software teams to ship features faster without sacrificing security or stability.',
    },
    {
      icon: <FaShieldHalved className="text-decops-pink text-2xl" />,
      title: 'Enterprise Reliability',
      desc: 'Our infrastructure designs prioritize high availability, zero-downtime deployments, and robust security protocols.',
    },
    {
      icon: <FaLightbulb className="text-decops-pink text-2xl" />,
      title: 'Pragmatic Modernization',
      desc: 'We do not just chase tech trends; we implement scalable architectures tailored specifically to your core business goals.',
    },
    {
      icon: <FaUsers className="text-decops-pink text-2xl" />,
      title: 'Transparent Collaboration',
      desc: 'We operate as an extension of your internal team with clear communication, detailed documentation, and direct access.',
    },
  ];

  const highlights = [
    'Specialized in Kubernetes, AWS, GCP, & DevOps Automation',
    'Tailored Microservices & Scalable Software Solutions',
    '24/7 Incident Management & Infrastructure Optimization',
    'End-to-End Security Auditing & Zero-Trust Compliance',
  ];

  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-gray-900 overflow-hidden">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden">

        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-decops-pink/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-24 text-center">

          {/* Section Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-decops-pink/10 border border-decops-pink/30 text-decops-pink mb-6">
            <FaAward className="text-[#FF2A85] text-sm" />
            <span>Pioneering IT Innovation</span>
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-[#1F2937]">
            Empowering Modern Enterprises with
            <br />
            <span className="bg-decops-text-gradient bg-clip-text text-transparent">
              Smart Cloud & Software Engineering
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg font-medium leading-relaxed text-[#4B5563] max-w-3xl mx-auto">
            Decops Pvt Ltd is an IT startup & technology innovation lab
            dedicated to simplifying complex infrastructure, accelerating
            software delivery, and building scalable digital products.
          </p>
        </div>
      </section>


      {/* =========================================================
          OUR MISSION & STORY
      ========================================================= */}
      <section className="relative py-20 md:py-24 border-t border-gray-200 overflow-hidden">

        {/* Background glows */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-100 h-100 bg-decops-purple/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="absolute bottom-0 right-0 w-100 h-100 bg-decops-pink/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* =====================================================
                LEFT — COMPANY CARD
            ===================================================== */}
            <Card className="relative p-8 md:p-10 rounded-3xl overflow-hidden group hover:border-decops-pink/50 hover:shadow-xl">

              {/* Card glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-decops-pink/5 rounded-full blur-2xl group-hover:bg-decops-pink/10 transition-all duration-500 pointer-events-none" />

              {/* Company heading */}
              <CardHeader className="relative mb-8">
                  <CardTitle className="text-2xl">
                    DECOPS PVT LTD
                  </CardTitle>

                  <p className="text-xs text-decops-pink uppercase tracking-widest font-semibold mt-1">
                    Cloud Automation & Software Lab
                  </p>
              </CardHeader>

              {/* Company description */}
              <CardDescription className="text-gray-600 text-sm md:text-base leading-relaxed mb-7"> 
                Founded with a mission to bridge the gap between software development and operational excellence, 
                Decops transforms how businesses build, deploy, and scale their applications. 
              </CardDescription>

              {/* Highlights */}
              <div className="space-y-4">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-sm font-medium text-gray-600"
                  >
                    <FaCheckCircle className="text-decops-pink shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>


            {/* =====================================================
                RIGHT — MISSION DETAILS
            ===================================================== */}
            <div className="space-y-6">

              <span className="inline-flex text-decops-pink font-semibold text-xs tracking-widest uppercase bg-decops-pink/10 px-3 py-1.5 rounded-full border border-decops-pink/20">
                Our Driven Purpose
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">
                Architecting the Future of
                <br />
                <span className="bg-decops-text-gradient bg-clip-text text-transparent">
                  Automated IT Infrastructure
                </span>
              </h2>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Modern software demands continuous reliability. At Decops, we
                eliminate tech debt and deployment bottlenecks by engineering
                automated CI/CD pipelines, containerized environments, and
                custom enterprise applications.
              </p>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Whether you are a startup scaling your MVP or an enterprise
                modernizing legacy systems, our engineers deliver tailored IT
                solutions engineered for resilience, speed, and cost
                efficiency.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          CORE VALUES
      ========================================================= */}
      <section className="relative py-20 md:py-24 bg-[#FAF9F6] overflow-hidden">

        {/* Background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-100 h-100 bg-decops-purple/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">

            <span className="inline-flex text-decops-pink font-semibold text-xs tracking-widest uppercase bg-decops-pink/10 px-3 py-1.5 rounded-full border border-decops-pink/20">
              Guiding Principles
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mt-5 mb-4">
              The Values That Drive{' '}
              <span className="bg-decops-text-gradient bg-clip-text text-transparent">
                Decops
              </span>
            </h2>

            <p className="text-gray-600 text-sm md:text-base font-medium">
              How we approach engineering, partnership, and technological
              excellence.
            </p>
          </div>


          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {values.map((val, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-decops-pink/60 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >

                {/* Card glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-decops-pink/5 rounded-full blur-xl group-hover:bg-decops-pink/15 transition-all duration-500 pointer-events-none" />

                {/* Icon */}
                <div className="relative w-12 h-12 rounded-xl bg-decops-pink/10 border border-decops-pink/30 flex items-center justify-center mb-6 group-hover:bg-decops-gradient transition-all duration-300 shadow-md">
                  {val.icon}
                </div>

                {/* Title */}
                <h3 className="relative text-lg font-bold text-gray-900 mb-3 group-hover:text-decops-pink transition-colors">
                  {val.title}
                </h3>

                {/* Description */}
                <p className="relative text-gray-600 text-sm leading-relaxed">
                  {val.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}
