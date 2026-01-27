import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'tax',
      title: 'Income Tax & HST/GST',
      icon: '📊',
      items: [
        'Audits of Personal and Corporate Returns',
        'Net Worth Assessments',
        'Arbitrary Assessments',
        'Denial of Expenses',
        'Penalties',
        'Waiver of Interest & Penalties',
        'Director\'s Liability Issues',
        'Collection Issues',
        'Any other matter involving interactions with CRA'
      ]
    },
    {
      id: 'rights',
      title: 'Human Rights Legislation',
      icon: '⚖️',
      items: [
        'Human Rights Code & Canadian Human Rights Law',
        'Opinions on possible discrimination in Employment',
        'Education-related discrimination',
        'Policing and law enforcement interactions',
        'Business dealings',
        'Day-to-day life discrimination issues'
      ]
    },
    {
      id: 'immigration',
      title: 'Immigration & Citizenship',
      icon: '🛂',
      items: [
        'Opinions on whether a criminal record bars entry to Canada',
        'Admissibility assessments',
        'Entry documentation guidance'
      ]
    }
  ];

  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="logo-section">
            <h1 className="company-name">
              <span className="name-line">OGB Consulting</span>
              <span className="name-line">&amp; Expert Services</span>
            </h1>
            <div className="tagline">
              Four decades of principled advocacy
            </div>
          </div>
          
          <div className="hero-questions">
            <div className="question-card">
              <p>Seeking representation concerning interactions with Canada Revenue Agency (CRA)?</p>
            </div>
            <div className="question-card">
              <p>Do you wish to know whether your human rights have been violated?</p>
            </div>
            <div className="question-card">
              <p>Do you wish to know whether you can enter Canada despite a criminal record?</p>
            </div>
          </div>

          <div className="contact-primary">
            <div className="contact-name">Osborne G. Barnwell</div>
            <a href="tel:416-528-9521" className="phone-number">416-528-9521</a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="services">
        <h2 className="section-title">Areas of Practice</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`service-card ${activeService === service.id ? 'active' : ''}`}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              <div className="service-header">
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
              </div>
              <div className="service-details">
                <ul>
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2 className="section-title">About Osborne G. Barnwell</h2>
        <div className="about-content">
          <div className="credentials">
            <div className="credential-item">
              <span className="credential-number">40+</span>
              <span className="credential-label">Years of Experience</span>
              <p>Dealing with the Income Tax Act and Excise Tax Act</p>
            </div>
            <div className="credential-item">
              <span className="credential-number">32</span>
              <span className="credential-label">Years as Lawyer</span>
              <p>Advocacy in Income Tax, Excise Tax, Human Rights, and Immigration</p>
            </div>
          </div>

          <div className="qualifications">
            <h3>Academic Training</h3>
            <ul className="qual-list">
              <li>B.A. (Economics)</li>
              <li>Honours B.Comm</li>
              <li>Former Certified General Accountant (CGA)</li>
              <li>LLB (Bachelor of Laws)</li>
              <li>LLM (Master of Laws)</li>
            </ul>
          </div>

          <div className="philosophy">
            <h3>Guiding Principles</h3>
            <p>Conscientious about fairness, access, equal treatment, and ensuring you do not pay more than your fair share of tax and HST.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>OGB Consulting & Expert Services</h3>
            <p>Professional representation for tax, human rights, and immigration matters</p>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>Osborne G. Barnwell</p>
            <a href="tel:416-528-9521">416-528-9521</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} OGB Consulting & Expert Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
