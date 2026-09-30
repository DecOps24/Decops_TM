import { Link } from 'react-router-dom';
import { FaEye, FaBullseye, FaCompass, FaArrowRight } from 'react-icons/fa6';
import { Card, CardHeader, CardTitle, CardDescription } from '../components/Card';

export default function Vision() {
  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-gray-900 overflow-hidden">
      
      {/* --- HERO BANNER SECTION --- */}
      <section className="relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-decops-pink/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-24 text-center">
          
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-decops-pink/10 border border-decops-pink/30 text-decops-pink mb-6">
            <FaCompass className="text-[#FF2A85] text-sm" />
            <span>Our Strategic Blueprint</span>
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-[#1F2937]">
            Vision & <span className="bg-decops-text-gradient bg-clip-text text-transparent">Mission</span>
          </h1>

          <p className="text-base md:text-lg font-medium leading-relaxed text-[#4B5563] max-w-2xl mx-auto">
            Empowering businesses through automated cloud management and reliable, scalable software solutions.
          </p>
        </div>
      </section>

      {/* --- VISION & MISSION CARDS --- */}
      <section className="relative py-20 md:py-24 border-t border-gray-200 overflow-hidden">
        
        {/* Background Glows */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-100 h-100 bg-decops-purple/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-100 h-100 bg-decops-pink/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Vision Card */}
            <Card className="relative p-8 md:p-10 rounded-3xl bg-white border border-gray-200 hover:border-decops-pink/50 hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-decops-pink/5 rounded-full blur-2xl group-hover:bg-decops-pink/10 transition-all duration-500 pointer-events-none" />

              <div className="w-16 h-16 rounded-2xl bg-decops-pink/10 border border-decops-pink/30 flex items-center justify-center mb-8 group-hover:bg-decops-gradient transition-all duration-300 shadow-md">
                <FaEye className="text-decops-pink text-3xl group-hover:text-white transition-colors" />
              </div>

              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-decops-pink transition-colors">
                  Our Vision
                </CardTitle>
              </CardHeader>

              <CardDescription className="text-gray-600 text-sm md:text-base leading-relaxed">
                To become a globally recognized IT startup that powers the next generation of cloud-native systems, enabling businesses to scale seamlessly with zero operational friction.
              </CardDescription>
            </Card>

            {/* Mission Card */}
            <Card className="relative p-8 md:p-10 rounded-3xl bg-white border border-gray-200 hover:border-decops-pink/50 hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-decops-pink/5 rounded-full blur-2xl group-hover:bg-decops-pink/10 transition-all duration-500 pointer-events-none" />

              <div className="w-16 h-16 rounded-2xl bg-decops-pink/10 border border-decops-pink/30 flex items-center justify-center mb-8 group-hover:bg-decops-gradient transition-all duration-300 shadow-md">
                <FaBullseye className="text-decops-pink text-3xl group-hover:text-white transition-colors" />
              </div>

              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-decops-pink transition-colors">
                  Our Mission
                </CardTitle>
              </CardHeader>

              <CardDescription className="text-gray-600 text-sm md:text-base leading-relaxed">
                To deliver robust, secure, and automated software & infrastructure solutions that lower operational overhead and accelerate engineering speed for companies worldwide.
              </CardDescription>
            </Card>

          </div>

          {/* Bottom Call to Action */}
          <div className="mt-16 text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-decops-gradient text-white shadow-xl shadow-decops-pink/30 hover:scale-105 transition-transform"
            >
              <span>Partner With Us</span>
              <FaArrowRight />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}