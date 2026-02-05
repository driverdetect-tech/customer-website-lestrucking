
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="py-40 px-4 max-w-5xl mx-auto bg-[var(--bg-light)] text-[var(--text-main)]">
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--accent)] mb-4 italic tracking-tighter uppercase">Terms of Service</h1>
      </div>

      <div className="prose max-w-none text-[var(--text-muted)] leading-relaxed space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-[var(--accent)] mb-6 flex items-center gap-3">
            COMPANY INFORMATION
          </h2>
          <div className="grid md:grid-cols-2 gap-6 bg-[var(--bg-subtle)] p-6 rounded-2xl border border-[var(--border-color)]">
            <div className="space-y-2">
              <p><span className="text-[var(--accent)] font-semibold">Company Name:</span> LES TRUCKING OF DOWNERS GROVE LLC</p>
              <p><span className="text-[var(--accent)] font-semibold">MC Number:</span> 519268</p>
              <p><span className="text-[var(--accent)] font-semibold">DOT Number:</span> 1350955</p>
            </div>
            <div className="space-y-2">
              <p><span className="text-[var(--accent)] font-semibold">Telephone:</span> (224) 526-5606</p>
              <p><span className="text-[var(--accent)] font-semibold">Website:</span> safetylestrucking@gmail.com</p>
              <p><span className="text-[var(--accent)] font-semibold">Mailing Address:</span> 3601 W ALGONQUIN RD SUITE 620, ROLLING MEADOWS, IL 60008</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--accent)] mb-4 flex items-center gap-3">
            ACCEPTANCE OF TERMS
          </h2>
          <p>
            By accessing or using the services provided by LES TRUCKING OF DOWNERS GROVE LLC ("Company," "we," "us," or "our"), including but not limited to our website, mobile applications, SMS/text messaging services, and transportation services, you ("User," "you," or "your") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--accent)] mb-4 flex items-center gap-3">
            DESCRIPTION OF SERVICES
          </h2>
          <p>
            LES TRUCKING OF DOWNERS GROVE LLC provides freight transportation, trucking, logistics, and related services. We may communicate with you regarding our services through various channels, including but not limited to email, telephone, and SMS/text messaging, but only after obtaining your explicit consent.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-[var(--accent)] mb-4 flex items-center gap-3">
            SMS/TEXT MESSAGING TERMS AND CONDITIONS
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[var(--accent)] mb-3 italic">Program Description</h3>
              <p className="mb-4">LES TRUCKING OF DOWNERS GROVE LLC offers an SMS/text messaging program to provide you with important updates related to our transportation services and employment opportunities. By opting in, you consent to receive automated text messages related to:</p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[var(--bg-subtle)] p-5 rounded-xl border border-[var(--border-color)]">
                  <h4 className="text-[var(--secondary)] font-bold text-xs uppercase mb-3">Operational</h4>
                  <ul className="text-xs space-y-2 list-disc pl-4">
                    <li>Load status updates</li>
                    <li>Delivery confirmations</li>
                    <li>Account notifications</li>
                    <li>Appointment reminders</li>
                  </ul>
                </div>
                <div className="bg-[var(--bg-subtle)] p-5 rounded-xl border border-[var(--border-color)]">
                  <h4 className="text-[var(--secondary)] font-bold text-xs uppercase mb-3">Recruitment</h4>
                  <ul className="text-xs space-y-2 list-disc pl-4">
                    <li>Application status</li>
                    <li>Interview scheduling</li>
                    <li>Opportunity notifications</li>
                    <li>Onboarding steps</li>
                  </ul>
                </div>
                <div className="bg-[var(--bg-subtle)] p-5 rounded-xl border border-[var(--border-color)]">
                  <h4 className="text-[var(--secondary)] font-bold text-xs uppercase mb-3">Compliance</h4>
                  <ul className="text-xs space-y-2 list-disc pl-4">
                    <li>FMCSA/DOT updates</li>
                    <li>Safety reminders</li>
                    <li>License renewals</li>
                    <li>HOS compliance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[var(--primary)]/10 p-6 rounded-2xl border border-[var(--primary)]/20">
              <h3 className="text-lg font-bold text-[var(--accent)] mb-3 italic">Consent Requirement — We Will Never Contact You Without Your Permission</h3>
              <p className="text-[var(--accent)] font-semibold mb-3 underline uppercase">IMPORTANT: LES TRUCKING OF DOWNERS GROVE LLC will NEVER send you unsolicited text messages.</p>
              <p>We will only send SMS/text messages to you after you have provided your explicit opt-in consent. We do not send spam, purchase phone lists, or engage in deceptive practices.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[var(--bg-subtle)] p-6 rounded-2xl border border-[var(--border-color)]">
                <h3 className="text-lg font-bold text-[var(--accent)] mb-3 italic">Message Frequency</h3>
                <p>Message frequency varies based on interaction. You may receive approximately 2-10 messages per month.</p>
              </div>
              <div className="bg-[var(--bg-subtle)] p-6 rounded-2xl border border-[var(--border-color)]">
                <h3 className="text-lg font-bold text-[var(--accent)] mb-3 italic">Opt-In Consent</h3>
                <p>By providing your number, you expressly consent to receive recurring automated SMS. Consent is voluntary and revocable.</p>
              </div>
            </div>

            <div className="bg-[var(--bg-subtle)] p-6 rounded-2xl border border-[var(--border-color)]">
              <h3 className="text-lg font-bold text-[var(--accent)] mb-3 italic">Opt-Out & Support</h3>
              <p>Opt out anytime by replying <span className="text-[var(--accent)] font-bold">STOP</span>, UNSUBSCRIBE, or QUIT. Reply <span className="text-[var(--accent)] font-bold">HELP</span> for support, visit our website, or call (314) 866-5805.</p>
            </div>

            <p className="text-sm">Message and data rates may apply. No mobile information will be shared with third parties for marketing purposes.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--accent)] mb-4 flex items-center gap-3">
            ANTI-SPAM COMMITMENT
          </h2>
          <p>
            LES TRUCKING OF DOWNERS GROVE LLC is committed to responsible messaging. We strictly prohibit unsolicited commercial messages (spam) and comply with all applicable regulations including TCPA and CTIA best practices.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 border-t border-[var(--border-color)] pt-12">
          <div>
            <h2 className="text-2xl font-bold text-[var(--accent)] mb-4 flex items-center gap-3">
              USER RESPONSIBILITIES
            </h2>
            <p className="text-sm">Users must provide accurate information, maintain account confidentiality, notify us of unauthorized use, and comply with all lawful use regulations.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--accent)] mb-4 flex items-center gap-3">
              PROHIBITED USES
            </h2>
            <p className="text-sm">You may not violate laws, transmit objectionable content, disrupt services, impersonate entities, or damage our infrastructure in any way.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--accent)] mb-4 flex items-center gap-3">
            INTELLECTUAL PROPERTY
          </h2>
          <p>
            All content, trademarks, logos, and intellectual property are the property of LES TRUCKING OF DOWNERS GROVE LLC or their respective owners. Reproduction without consent is prohibited.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-[var(--bg-subtle)] p-8 rounded-3xl border border-[var(--border-color)]">
            <h2 className="text-xl font-bold text-[var(--accent)] mb-4">DISCLAIMER</h2>
            <p className="text-xs uppercase leading-relaxed">Our services are provided "as is" and "as available" without warranties of any kind. We do not warrant that our services will be uninterrupted or error-free.</p>
          </section>
          <section className="bg-[var(--bg-subtle)] p-8 rounded-3xl border border-[var(--border-color)]">
            <h2 className="text-xl font-bold text-[var(--accent)] mb-4">LIMITATION</h2>
            <p className="text-xs uppercase leading-relaxed">LES TRUCKING OF DOWNERS GROVE LLC shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of our services.</p>
          </section>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-[var(--accent)] mb-4 flex items-center gap-3">
            GOVERNING LAW
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of Missouri. Any disputes shall be subject to the exclusive jurisdiction of the state and federal courts located in Jackson County, Missouri.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
