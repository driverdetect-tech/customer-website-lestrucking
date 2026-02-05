
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-[var(--bg-light)] text-[var(--text-main)]">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 max-w-4xl tracking-tight text-[var(--accent)]">
              Bringing The <br />
              World Closer, Fast <br />
              <span className="text-[var(--secondary)]">Freight Solutions</span>
            </h1>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-sm">
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                  Global logistics designed for speed, precision, and trust — powered by technology and driven by people.
                </p>
                <div className="flex items-center gap-3">
                  <Link to="/contact" className="bg-[var(--primary)] text-[var(--accent)] px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[var(--secondary)] hover:text-white transition-all">
                    Get a Quote
                  </Link>
                  <button className="w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center hover:border-[var(--primary)] transition-all group">
                    <svg className="w-5 h-5 group-hover:text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Counter Badges */}
              <div className="flex gap-4">
                <div className="bg-[var(--primary)] rounded-2xl p-6 min-w-[180px] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-20">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M13 17h-2v-4h2v4zm0-6h-2V7h2v4zm1 10H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v16l-4-4z" /></svg>
                  </div>
                  <p className="text-xs uppercase font-bold text-[var(--accent)] mb-4 opacity-80">Shipments<br />Delivered</p>
                  <p className="text-5xl font-extrabold text-[var(--accent)]">20k<span className="opacity-60">+</span></p>
                </div>
                <div className="bg-[var(--secondary)] text-white rounded-2xl p-6 min-w-[180px]">
                  <p className="text-xs uppercase font-bold text-white/60 mb-4">States<br />Covered</p>
                  <p className="text-5xl font-extrabold">50<span className="text-white/30"></span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image Block */}
          <div className="relative rounded-[40px] overflow-hidden aspect-[21/9] bg-[var(--bg-subtle)] shadow-2xl shadow-[var(--primary)]/5">
            <img
              src="/truck_fleet.png"
              alt="Vibrant semi truck fleet"
              className="w-full h-full object-cover transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-light)] via-transparent to-transparent opacity-40"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 md:px-8 border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-10 leading-tight text-[var(--accent)]">
              Empowering Global <span className="text-[var(--text-muted)]">Trade with</span> <br />
              Smarter Logistics
            </h2>
            <p className="text-xl text-[var(--text-muted)] leading-relaxed mb-8">
              LES TRUCKING OF DOWNERS GROVE LLC is a trusted trucking company specializing in hauling cars to retail customers across the United States. We provide exceptional Customer Support with order information, service updates, and guidance throughout the entire process.
            </p>
            <div className="p-6 bg-[var(--bg-subtle)] rounded-2xl border border-[var(--border-color)]">
              <p className="text-sm text-[var(--text-muted)] italic">
                "When you consent to receive messaging from LES TRUCKING OF DOWNERS GROVE LLC, you are providing it only to LES TRUCKING OF DOWNERS GROVE LLC, not any third parties. Your SMS opt-in data will never be shared/sold to third parties."
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-subtle)]">
                <img
                  src="/red_truck_driving.png"
                  className="w-full h-full object-cover"
                  alt="Red semi truck driving perspective"
                />
              </div>
              <div className="bg-[var(--primary)] aspect-square rounded-3xl p-8 flex flex-col justify-end">
                <span className="text-5xl font-bold mb-2 text-[var(--accent)]">05k+</span>
                <span className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">Clients Served</span>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="bg-[var(--secondary)] aspect-square rounded-3xl p-8 flex flex-col justify-end text-white">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span className="text-sm font-semibold uppercase tracking-widest text-white/70">Expand Your Reach</span>
              </div>
              <div className="h-64 rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-subtle)]">
                <img
                  src="/truck_detail.png"
                  className="w-full h-full object-cover"
                  alt="Truck detail shot"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 md:px-8 bg-[var(--bg-subtle)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl font-bold text-[var(--accent)]">Why Choose Us? Core <br /><span className="text-[var(--text-muted)]">Values</span> That Deliver</h2>
            <Link to="/contact" className="text-[var(--secondary)] font-bold flex items-center gap-2 group">
              Get A Quote Today
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Auto Transport', desc: 'Professional car hauling services across the United States', icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z' },
              { title: 'Fully Insured', desc: 'Complete coverage for peace of mind during transport', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
              { title: 'Customer Support', desc: 'Dedicated team ready to assist with your needs', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' },
              { title: 'Nationwide', desc: 'Serving customers throughout the continental US', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
            ].map((f, i) => (
              <div key={i} className="p-10 bg-white rounded-3xl border border-[var(--border-color)] hover:border-[var(--primary)] transition-all hover:-translate-y-2 group shadow-sm">
                <div className="w-14 h-14 bg-[var(--primary)]/10 text-[var(--primary)] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--primary)] group-hover:text-[var(--accent)] transition-all">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={f.icon} /></svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[var(--accent)]">{f.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 border-y border-[var(--border-color)] overflow-hidden bg-white">
        <div className="flex whitespace-nowrap animate-pulse">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[var(--accent)] text-2xl font-black uppercase tracking-tighter mx-10 italic opacity-80">
              Fast Delivery • Reliable Service • Secure Transport • Professional Support •
            </span>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 md:px-8 text-center bg-gradient-to-b from-[var(--bg-light)] to-[var(--bg-subtle)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-8 italic text-[var(--accent)]">Ready to optimize your transport?</h2>
          <p className="text-xl text-[var(--text-muted)] mb-12">Join the thousands of retail customers who trust LES TRUCKING OF DOWNERS GROVE LLC for their nationwide hauling needs.</p>
          <Link to="/contact" className="inline-block bg-[var(--primary)] text-[var(--accent)] px-12 py-5 rounded-full font-bold text-lg hover:bg-[var(--secondary)] hover:text-white transition-all transform hover:scale-105 shadow-xl shadow-[var(--primary)]/20">
            Book Your Schedule
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
