import React, { useState, useEffect } from 'react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  // Explicitly hardcoded functions
  function handleScroll() {
    setIsScrolled(window.scrollY > 20);
  }

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function handleLeadSubmit(e) {
    e.preventDefault();
    if (email) {
      alert(`Application process initiated for: ${email}`);
      setEmail('');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="font-sans text-slate-900 overflow-x-hidden relative min-h-screen">
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-white shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container flex items-center justify-between">
          <a href="#" className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-2">
            Karo<span className="text-gradient">Pitch</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-600 hover:text-blue-600 font-bold transition-colors">About</a>
            <a href="#how-it-works" className="text-slate-600 hover:text-blue-600 font-bold transition-colors">Process</a>
            <a href="#startups" className="text-slate-600 hover:text-blue-600 font-bold transition-colors">Startups</a>
            <a href="#pricing" className="text-slate-600 hover:text-blue-600 font-bold transition-colors">Pricing</a>
            <a href="#investors" className="text-slate-600 hover:text-blue-600 font-bold transition-colors">Investors</a>
          </div>

          <div className="hidden md:block flex space-x-4 items-center">
             <a href="#login" className="text-slate-500 font-bold hover:text-slate-900 mr-6">Log in</a>
            <a href="#apply" className="btn btn-gradient px-7 py-2.5 rounded-xl text-sm shadow-sm hover:shadow-lg">
              Apply to Pitch
            </a>
          </div>

          <button 
            className="md:hidden text-slate-900"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl pt-24 px-6 flex flex-col space-y-6 md:hidden">
          <button onClick={closeMobileMenu} className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full text-slate-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <a href="#about" onClick={closeMobileMenu} className="text-2xl font-black text-slate-900">About</a>
          <a href="#how-it-works" onClick={closeMobileMenu} className="text-2xl font-black text-slate-900">Process</a>
          <a href="#startups" onClick={closeMobileMenu} className="text-2xl font-black text-slate-900">Startups</a>
          <a href="#pricing" onClick={closeMobileMenu} className="text-2xl font-black text-slate-900">Pricing</a>
          <a href="#investors" onClick={closeMobileMenu} className="text-2xl font-black text-slate-900">Investors</a>
          <a href="#login" onClick={closeMobileMenu} className="text-xl font-bold text-slate-600 mt-4">Log in</a>
          <a href="#apply" onClick={closeMobileMenu} className="btn btn-gradient w-full py-4 text-center mt-2 text-lg">Apply to Pitch</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32" id="home">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              <span className="text-sm font-extrabold text-blue-900 tracking-wide">Deal Flow Engine by KaroStartup 🇮🇳</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-slate-900 drop-shadow-sm">
              <span className="text-gradient leading-tight block pb-2">Pitch Your Startup</span> to India’s Top Investors.
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-semibold leading-relaxed">
              Karo Pitch is a platform where founders from across India—especially Tier-2, Tier-3 cities and Bharat—can pitch their startups and raise institutional funding.
            </p>
            
            {/* Commercial Lead Gen Block */}
            <form onSubmit={handleLeadSubmit} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-2 mt-8 w-full max-w-lg mx-auto lg:mx-0 relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="founder@startup.com" 
                className="w-full px-6 py-4 rounded-2xl border-2 border-white bg-white/70 backdrop-blur-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 text-lg font-bold transition-all" 
              />
              <button type="submit" className="btn btn-gradient text-lg px-8 py-4 whitespace-nowrap w-full sm:w-auto shadow-md">Apply to Pitch</button>
            </form>
            <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                 <a href="#startups" className="text-sm font-bold text-slate-500 hover:text-blue-600 underline underline-offset-4">Explore Startups</a>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-300 w-full sm:w-4/5 mx-auto lg:mx-0">
               <div>
                <h3 className="text-3xl font-black text-slate-900">₹150Cr<span className="text-emerald-500">+</span></h3>
                <p className="text-xs text-slate-500 font-bold mt-1 uppercase tracking-wider">Dry Powder</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900">200<span className="text-blue-500">+</span></h3>
                <p className="text-xs text-slate-500 font-bold mt-1 uppercase tracking-wider">Verified VCs</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900">10k<span className="text-indigo-500">+</span></h3>
                <p className="text-xs text-slate-500 font-bold mt-1 uppercase tracking-wider">Founders</p>
              </div>
            </div>
          </div>
          
          <div className="relative mt-12 lg:mt-0 h-[500px] lg:h-[600px] flex items-center justify-center">
             {/* Clean Dashboard Mockup  */}
            <div className="relative w-[95%] h-[85%] glass-panel p-6 flex flex-col z-10 hover:shadow-2xl transition-all duration-700 hover:scale-105 bg-white/90 border-2 border-white">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
                <div className="flex space-x-2">
                  <div className="h-4 w-24 bg-slate-800 rounded-md font-bold text-[10px] text-white flex items-center justify-center tracking-widest uppercase">KPI Dashboard</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                </div>
              </div>
              
               <div className="flex-1 flex flex-col space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center shadow-sm">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <div className="h-5 w-32 bg-slate-200 rounded-md mb-2"></div>
                    <div className="h-3 w-48 bg-slate-100 rounded-md"></div>
                  </div>
                </div>
                
                 <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                    <p className="text-xs font-bold text-emerald-600 uppercase mb-1">Total Raised</p>
                    <h4 className="text-xl font-black text-slate-900">$2.4M</h4>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <p className="text-xs font-bold text-blue-600 uppercase mb-1">Investor Viewings</p>
                    <h4 className="text-xl font-black text-slate-900">142</h4>
                  </div>
                </div>
                
                 <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex-1 flex flex-col justify-end">
                   {/* Fake bar chart */}
                   <div className="flex items-end justify-between space-x-2 h-16">
                     {[40, 70, 45, 90, 60, 100, 80].map((h, i) => (
                       <div key={i} className={`w-full rounded-t-sm ${i === 6 ? 'bg-gradient-to-t from-blue-400 to-indigo-500' : 'bg-slate-200'}`} style={{height: `${h}%`}}></div>
                     ))}
                   </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Badges */}
            <div className="absolute top-10 -right-4 glass-card p-3 flex items-center space-x-3 w-48 animate-float z-20 border-white bg-white/95 shadow-md">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-black flex items-center justify-center">✓</div>
              <div>
                <h4 className="font-extrabold text-sm text-slate-800">Verified Deal</h4>
                <p className="text-xs text-slate-500 font-bold">Term Sheet Signed</p>
              </div>
            </div>
            
            <div className="absolute bottom-10 -left-6 glass-card p-3 flex items-center space-x-3 w-64 animate-float-delayed z-20 border-white bg-white/95 shadow-md">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg">🤝</div>
              <div>
                <h4 className="font-extrabold text-sm text-slate-800">New Investor Connection</h4>
                <p className="text-xs text-blue-600 font-bold">Nexus requested introduction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Karo Pitch */}
      <section className="py-24 relative bg-white/50 border-y border-white backdrop-blur-md" id="about">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 lg:pr-10">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 border-l-8 border-blue-500 pl-6">About Karo Pitch</h2>
              <p className="text-slate-600 text-lg font-semibold leading-relaxed">
                Thousands of founders are building amazing businesses across Bharat, but lack access to investors, mentorship, and visibility.
              </p>
              <p className="text-slate-600 text-lg font-semibold leading-relaxed">
                <span className="font-black text-slate-900">Karo Pitch</span> connects these founders with investors through curated pitch events and a highly vetted discovery platform. We level the playing field, ensuring great products from Tier-2 and Tier-3 cities get the institutional spotlight they deserve.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="glass-card p-6 border-blue-100 bg-blue-50/50 hover:bg-blue-50">
                   <div className="text-4xl mb-4 text-blue-500">🌍</div>
                   <h3 className="font-black text-xl text-slate-900 mb-2">Bharat Mission</h3>
                   <p className="text-sm text-slate-500 font-bold">Uncovering gems across regional India.</p>
               </div>
               <div className="glass-card p-6 border-indigo-100 bg-indigo-50/50 hover:bg-indigo-50 mt-8">
                   <div className="text-4xl mb-4 text-indigo-500">🤝</div>
                   <h3 className="font-black text-xl text-slate-900 mb-2">Curated Matches</h3>
                   <p className="text-sm text-slate-500 font-bold">Direct access to relevant capital.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-transparent" id="how-it-works">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Your journey from application to capital in 4 streamlined steps.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "1", title: "Apply with your pitch deck", desc: "Submit your startup details, traction, and a comprehensive deck via our portal.", color: "from-blue-400 to-cyan-500", icon: "📄" },
              { num: "2", title: "Get shortlisted by KaroStartup", desc: "Our analyst team reviews applications and selects the most promising candidates.", color: "from-cyan-400 to-teal-500", icon: "⭐" },
              { num: "3", title: "Pitch live to investors", desc: "Present in a closed-room setting to active venture capital and angel syndicates.", color: "from-teal-400 to-emerald-500", icon: "🎤" },
              { num: "4", title: "Raise funding and scale", desc: "Secure term sheets and strategic partnerships to scale operations.", color: "from-emerald-400 to-green-500", icon: "🚀" }
            ].map((step, i) => (
              <div key={i} className="glass-card p-8 group relative overflow-hidden bg-white/90 border-slate-100 hover:border-blue-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl font-black text-white mb-6 shadow-md transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  {step.icon}
                </div>
                <div className="text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">Step {step.num}</div>
                <h3 className="text-xl font-black mb-3 text-slate-900 pr-4">{step.title}</h3>
                <p className="text-slate-600 font-semibold">{step.desc}</p>
                
                <div className="absolute -bottom-4 -right-2 text-9xl font-black text-slate-100/40 pointer-events-none group-hover:-translate-y-2 transition-transform duration-500">
                  {step.num}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Pricing/Commercial Section */}
      <section className="py-24 bg-white/60 border-y border-white backdrop-blur-md" id="pricing">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Transparent Partnership Models</h2>
            <p className="section-subtitle text-slate-600">Built for scale. We align our success completely with founders and capital allocators.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Startup Plan */}
            <div className="glass-card p-10 relative flex flex-col border-2 border-slate-200 bg-white shadow-sm hover:border-blue-200">
              <div>
                <span className="badge bg-slate-100 text-slate-600 mb-4 inline-block font-black border-slate-200">For Founders</span>
                <h3 className="text-3xl font-black mb-2 text-slate-900">Pitch & Raise</h3>
                <div className="text-5xl font-black text-slate-900 mb-6 drop-shadow-sm flex items-end">
                  Free<span className="text-lg text-slate-500 font-bold ml-2 mb-1">to apply</span>
                </div>
                <p className="text-slate-600 font-semibold mb-8">No upfront listing fees. We act as your capital partner.</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start text-slate-700 font-bold">
                    <svg className="w-6 h-6 text-emerald-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    Direct pitch access to institutional funds
                  </li>
                  <li className="flex items-start text-slate-700 font-bold">
                    <svg className="w-6 h-6 text-emerald-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    Fundraising deck audit and feedback
                  </li>
                  <li className="flex items-start text-blue-900 font-bold bg-blue-50 p-3 rounded-xl border border-blue-100 mt-4">
                    <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    2% success fee only on capital raised
                  </li>
                </ul>
              </div>
              <div className="mt-auto pt-8">
                <a href="#apply" className="btn btn-outline w-full text-lg border-2 border-slate-200 hover:border-blue-400 py-4 flex items-center justify-center">Start Free Application</a>
              </div>
            </div>

            {/* Investor Plan */}
            <div className="glass-card p-10 relative flex flex-col border-2 border-blue-400 shadow-[0_20px_50px_rgba(59,130,246,0.15)] transform md:-translate-y-4 bg-white z-20">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xs px-4 py-1.5 rounded-bl-2xl rounded-tr-2xl uppercase tracking-widest shadow-sm">
                Corporate
              </div>
              <div>
                <span className="badge badge-success mb-4 inline-block font-black border-emerald-300">For Investors</span>
                <h3 className="text-3xl font-black mb-2 text-slate-900">Pro Deal Flow</h3>
                <div className="text-5xl font-black text-slate-900 mb-6 drop-shadow-sm flex items-end">
                  $499<span className="text-lg text-slate-500 font-bold ml-2 mb-1">/ month</span>
                </div>
                <p className="text-slate-600 font-semibold mb-8">Exclusive access to highly vetted breakout startups.</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start text-slate-800 font-bold">
                    <svg className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    Guaranteed 10+ proprietary deals per month
                  </li>
                  <li className="flex items-start text-slate-800 font-bold">
                    <svg className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    First-look access 7 days before syndicates
                  </li>
                  <li className="flex items-start text-slate-800 font-bold">
                    <svg className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    Standardized data rooms & compliance checks
                  </li>
                </ul>
              </div>
              <div className="mt-auto pt-8">
                <button className="btn btn-gradient w-full text-lg py-4 shadow-lg">Partner as Investor</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-24 bg-transparent border-b border-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Who Can Apply</h2>
            <p className="section-subtitle">Categories making a fundamental impact on the economy.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🛍️", title: "D2C brands", desc: "Scaling consumer product operations." },
              { icon: "📱", title: "Consumer startups", desc: "Next-gen applications and commerce." },
              { icon: "🏭", title: "MSMEs", desc: "Small enterprises with high growth potential." },
              { icon: "💻", title: "SaaS startups", desc: "Software solving real business problems." },
              { icon: "🛠️", title: "Manufacturing businesses", desc: "Innovative factories and hardware." },
              { icon: "🇮🇳", title: "Bharat-focused startups", desc: "Solutions for Tier-2, Tier-3 and rural India." }
            ].map((cat, i) => (
              <div key={i} className="glass-card p-6 flex flex-col group cursor-pointer hover:border-blue-300 bg-white/80">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-3xl mb-4 shadow-sm group-hover:scale-110 transition-transform origin-bottom-left">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-black mb-1 text-slate-900">{cat.title}</h3>
                <p className="text-sm text-slate-600 font-semibold">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Startups / Portfolio */}
      <section className="py-24 bg-white/40 border-b border-white backdrop-blur-md" id="startups">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Featured Startups</h2>
            <p className="section-subtitle">A glimpse into our diverse ecosystem of highly-vetted businesses.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "EcoPack India", category: "Manufacturing business", desc: "Producing 100% biodegradable packaging alternatives for FMCG brands, completely replacing single-use plastics.", color: "from-blue-100 to-sky-200", icon:"📦" },
              { name: "KisanLink", category: "Bharat-focused startup", desc: "Direct farm-to-retail supply chain optimization for better farmer margins, serving 500+ farmers.", color: "from-slate-100 to-blue-100", icon:"🌾" },
              { name: "SaaSync Flow", category: "SaaS startup", desc: "Unified dashboard infrastructure for enterprises to manage remote subscriptions. Over-subscribed pre-seed round.", color: "from-indigo-100 to-blue-200", icon:"💻" }
            ].map((startup, i) => (
              <div key={i} className="glass-card overflow-hidden group p-0 hover:border-blue-300 flex flex-col bg-white">
                <div className={`h-40 w-full bg-gradient-to-br ${startup.color} flex flex-col items-center justify-center p-6 relative overflow-hidden border-b border-white`}>
                   <div className="text-5xl opacity-80 mix-blend-multiply drop-shadow-sm mb-2">{startup.icon}</div>
                   <h3 className="text-2xl font-black text-slate-800 z-10">{startup.name}</h3>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-xs font-black text-blue-600 mb-4 uppercase tracking-wider bg-blue-50 border border-blue-100 self-start px-2 py-1 rounded inline-block">{startup.category}</p>
                  <p className="text-slate-600 font-semibold text-sm leading-relaxed flex-1">{startup.desc}</p>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a href="#" className="text-sm font-black text-blue-600 group-hover:text-indigo-600 transition-colors flex items-center">
                      View Pitch Deck <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-32 relative overflow-hidden bg-white/70 backdrop-blur-3xl border-b border-white text-center" id="investors">
         <div className="container relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight drop-shadow-sm text-slate-900 max-w-4xl mx-auto">Meet Investors Looking for the Next Big Startup.</h2>
            <p className="text-slate-600 text-xl font-semibold mb-12 max-w-2xl mx-auto">
               Karo Pitch connects you with top active angel networks, venture funds, and micro-VCs actively deploying capital into Bharat.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70 hover:opacity-100 transition-all duration-500 mix-blend-multiply">
              <div className="text-3xl font-black font-sans text-slate-800">Nexus<span className="text-blue-600">VP</span></div>
              <div className="text-3xl font-bold font-serif text-slate-800">Sequoia</div>
              <div className="text-3xl font-black font-mono text-slate-800">BLUME</div>
            </div>
         </div>
      </section>

      {/* About KaroStartup */}
      <section className="py-24 relative overflow-hidden bg-transparent" id="about-karostartup">
         <div className="container">
            <div className="max-w-4xl mx-auto glass-card p-10 lg:p-14 bg-white border border-slate-200 shadow-sm hover:shadow-lg">
               <div className="flex flex-col md:flex-row items-center gap-10">
                   <div className="w-full md:w-1/3 flex justify-center">
                       <div className="w-40 h-40 rounded-3xl bg-blue-600 p-2 shadow-xl rotate-3 hover:rotate-0 transition-transform">
                           <div className="w-full h-full border-2 border-white/50 rounded-2xl flex flex-col items-center justify-center text-white">
                                <span className="text-2xl font-black italic">Karo</span>
                                <span className="text-lg font-bold tracking-widest text-blue-200">Startup</span>
                           </div>
                       </div>
                   </div>
                   <div className="w-full md:w-2/3 text-center md:text-left">
                       <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">About KaroStartup</h2>
                       <p className="text-slate-600 text-lg font-semibold leading-relaxed mb-4">
                           Over the past 5 years, KaroStartup has built one of India’s largest startup storytelling platforms, sharing thousands of founder journeys and inspiring entrepreneurs across the country.
                       </p>
                       <p className="text-slate-600 text-lg font-semibold leading-relaxed">
                           We have nurtured a massive and active founder community. Now, with Karo Pitch, we are launching our newest initiative to tangibly bridge the gap between this community and institutional capital.
                       </p>
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* Commercial Final Call To Action & Lead Gen */}
      <section className="py-32 relative overflow-hidden bg-white/60 border-t border-white" id="apply">
        <div className="container relative z-10 text-center">
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 drop-shadow-sm">Ready to Pitch Your Startup?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-bold drop-shadow-sm">
             Take the next big step in your founder journey. Enter your email to begin the comprehensive application process.
          </p>
          
          <form onSubmit={handleLeadSubmit} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-xl mx-auto p-2 bg-white/90 backdrop-blur-md rounded-[2rem] border border-blue-100 shadow-xl mb-6">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="founder@startup.com" 
              className="w-full px-6 py-4 rounded-3xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 text-lg font-bold transition-all" 
            />
            <button type="submit" className="btn btn-gradient text-lg px-10 py-4 w-full sm:w-auto shadow-md whitespace-nowrap rounded-[1.5rem]">Apply Now</button>
          </form>

          <div className="mt-8 flex justify-center">
             <a href="#partner" className="text-slate-500 font-bold hover:text-slate-900 flex items-center group bg-white/50 px-6 py-3 rounded-full border border-slate-200 transition-colors">
                 Investor? Partner With Us 
                 <svg className="w-5 h-5 ml-2 text-slate-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
             </a>
          </div>
        </div>
      </section>

      {/* Commercial Compliance Footer */}
      <footer className="bg-slate-900 text-slate-300 mt-auto pt-16 pb-8 border-t-4 border-blue-500">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <a href="#" className="text-3xl font-black tracking-tighter mb-4 inline-block text-white flex items-center gap-2">
                Karo<span className="text-blue-400">Pitch</span>
              </a>
              <p className="text-slate-400 max-w-sm font-semibold mb-6">Building India’s most accessible startup discovery and funding platform for Bharat entrepreneurs.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-500 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors">Instagram</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white uppercase tracking-wider text-sm">Platform</h4>
              <ul className="space-y-3 font-semibold text-sm">
                <li><a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">Founder Portal</a></li>
                <li><a href="#investors" className="text-slate-400 hover:text-blue-400 transition-colors">Investor Deal Flow</a></li>
                <li><a href="#pricing" className="text-slate-400 hover:text-blue-400 transition-colors">Pricing & Fees</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white uppercase tracking-wider text-sm">Company</h4>
              <ul className="space-y-3 font-semibold text-sm">
                <li><a href="#about-karostartup" className="text-slate-400 hover:text-blue-400 transition-colors">About KaroStartup</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white uppercase tracking-wider text-sm">Legal</h4>
              <ul className="space-y-3 font-semibold text-sm">
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Investor Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs font-semibold text-slate-500">
            <p>© {new Date().getFullYear()} KaroStartup. All rights reserved.</p>
            <p>Designed for Bharat. Built for the World.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
