import { 
  FaEnvelope, 
  FaPhone, 
  FaLocationDot, 
  FaPaperPlane, 
  FaHeadset 
} from 'react-icons/fa6';
import { Card, CardDescription, CardHeader, CardTitle } from '../components/Card';

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-gray-900 overflow-hidden">
      
      {/* --- HERO BANNER SECTION --- */}
      <section className="relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-decops-pink/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-24 text-center">
          
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-decops-pink/10 border border-decops-pink/30 text-decops-pink mb-6">
            <FaHeadset className="text-[#FF2A85] text-sm" />
            <span>Get in Touch</span>
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-[#1F2937]">
            Contact <span className="bg-decops-text-gradient bg-clip-text text-transparent">Our Team</span>
          </h1>

          <p className="text-base md:text-lg font-medium leading-relaxed text-[#4B5563] max-w-2xl mx-auto">
            Have a project in mind or need assistance with your cloud infrastructure? Send us a message and our engineering team will get back to you shortly.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTACT CONTENT --- */}
      <section className="relative py-20 md:py-24 border-t border-gray-200 overflow-hidden">
        
        {/* Background Glows */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-100 h-100 bg-decops-purple/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-100 h-100 bg-decops-pink/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              
              <Card className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-decops-pink/50 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-decops-pink/10 border border-decops-pink/30 flex items-center justify-center mb-4">
                  <FaEnvelope className="text-decops-pink text-xl" />
                </div>
                <CardHeader className="p-0 mb-1">
                  <CardTitle className="text-lg font-bold text-gray-900">Email Us</CardTitle>
                </CardHeader>
                <CardDescription className="text-gray-600 text-xs mb-3">Our team typically responds within 24 hours.</CardDescription>
                <a href="mailto:contact@decops.com" className="text-decops-pink font-bold text-sm hover:underline">
                  contact@decops.com
                </a>
              </Card>

              <Card className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-decops-pink/50 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-decops-pink/10 border border-decops-pink/30 flex items-center justify-center mb-4">
                  <FaPhone className="text-decops-pink text-xl" />
                </div>
                <CardHeader className="p-0 mb-1">
                  <CardTitle className="text-lg font-bold text-gray-900">Call Us</CardTitle>
                </CardHeader>
                <CardDescription className="text-gray-600 text-xs mb-3">Mon-Fri from 9am to 6pm IST.</CardDescription>
                <p className="text-decops-pink font-bold text-sm">+91 (800) 123-4567</p>
              </Card>

              <Card className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-decops-pink/50 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-decops-pink/10 border border-decops-pink/30 flex items-center justify-center mb-4">
                  <FaLocationDot className="text-decops-pink text-xl" />
                </div>
                <CardHeader className="p-0 mb-1">
                  <CardTitle className="text-lg font-bold text-gray-900">Headquarters</CardTitle>
                </CardHeader>
                <CardDescription className="text-gray-600 text-xs mt-1">
                  Decops Pvt Ltd,<br />
                  Tech Innovation Park, Bengaluru, India
                </CardDescription>
              </Card>

            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 p-8 md:p-12 rounded-3xl bg-white border border-gray-200 hover:border-decops-pink/50 hover:shadow-xl transition-all duration-300">
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-gray-600 text-xs md:text-sm mb-8">
                Fill out the form below and we will get back to you with a tailored solution.
              </CardDescription>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-decops-pink focus:ring-1 focus:ring-decops-pink transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-decops-pink focus:ring-1 focus:ring-decops-pink transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    placeholder="Cloud Automation Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-decops-pink focus:ring-1 focus:ring-decops-pink transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us about your project or requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-decops-pink focus:ring-1 focus:ring-decops-pink transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-decops-gradient text-white shadow-xl shadow-decops-pink/30 hover:scale-105 transition-transform cursor-pointer"
                >
                  <span>Submit Message</span>
                  <FaPaperPlane />
                </button>
              </form>
            </Card>

          </div>
        </div>
      </section>

    </div>
  );
}