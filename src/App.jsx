import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email with form data and proper formatting
    const subject = encodeURIComponent("Inquiry from AREKHAM Website");
    const body = encodeURIComponent(`Dear AREKHAM Team,

I hope this message finds you well. I am reaching out to inquire about your IT consultancy services.

Contact Details:
Name: ${formData.name || '[Name not provided]'}
Email: ${formData.email || '[Email not provided]'}

Message:
${formData.message || 'I am interested in learning more about your services. Please contact me to discuss how AREKHAM can assist with my IT needs.'}

I am particularly interested in:
• Cloud Solutions & Migration
• Cybersecurity Services  
• Digital Transformation
• IT Infrastructure Management
• Software Development
• Technology Training

Please let me know your availability for a consultation.

Best regards,
${formData.name || '[Your Name]'}

---
This email was sent from the AREKHAM website contact form.
Contact Address: Tejas Residency, Flat No. 302, Mansarovar, Jaipur, Rajasthan-302`);

    // Open email client with pre-filled data
    window.location.href = `mailto:rekhabhatt.arekham@arekhamitconsultancyandservices.co?subject=${subject}&body=${body}`;
    
    // Clear form after sending
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="grid-overlay"></div>
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className={`hero ${isLoaded ? 'loaded' : ''}`} style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', zIndex: 10}}>
        <div className="container" style={{maxWidth: '900px', margin: '0 auto', padding: '2rem'}}>
          <div className="hero-content" style={{textAlign: 'center', color: 'white'}}>
            {/* Company Logo */}
            <div className="hero-logo" style={{marginBottom: '2rem'}}>
              <img 
                src="/arekham_logo.png" 
                alt="AREKHAM Logo" 
                className="company-logo-img"
                style={{width: '120px', height: '120px', objectFit: 'contain', borderRadius: '20px'}}
              />
            </div>
            
            <h1 className="company-name" style={{fontSize: '4rem', marginBottom: '1rem', background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>AREKHAM</h1>
            <p className="tagline" style={{fontSize: '1.2rem', color: '#a1a1aa', marginBottom: '3rem'}}>IT Consultancy & Educational Services</p>
            
            {/* Hero Card */}
            <div className="hero-card glass-card">
              <div className="card-content">
                <h2 className="hero-title">Empowering Minds, Building Futures</h2>
                <p className="hero-subtitle">
                  Leading provider of innovative technology solutions and comprehensive education programs
                </p>
                
                <div className="hero-services">
                  <div className="service-badge">
                    <span className="badge-icon">🤖</span>
                    <span>AI & ML Solutions</span>
                  </div>
                  <div className="service-badge">
                    <span className="badge-icon">📊</span>
                    <span>Data Analytics</span>
                  </div>
                  <div className="service-badge">
                    <span className="badge-icon">🌐</span>
                    <span>Web Development</span>
                  </div>
                  <div className="service-badge">
                    <span className="badge-icon">☁️</span>
                    <span>Cloud Services</span>
                  </div>
                </div>
                
                <div className="hero-actions">
                  <button className="cta-button primary">
                    <span>Explore Services</span>
                    <span className="button-arrow">→</span>
                  </button>
                  <button className="cta-button secondary">
                    <span>View Courses</span>
                    <span className="button-arrow">→</span>
                  </button>
                </div>
              </div>
              
              <div className="card-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <div className="container">
          <div className="content-grid">
            {/* Services */}
            <div className="services-section glass-card">
              <h3 className="section-title">Our Services</h3>
              <div className="services-list">
                <div className="service-item">
                  <div className="service-icon">🤖</div>
                  <div className="service-content">
                    <h4>AI & Machine Learning</h4>
                    <p>Custom AI solutions and intelligent automation systems tailored to your business needs.</p>
                  </div>
                </div>
                
                <div className="service-item">
                  <div className="service-icon">📊</div>
                  <div className="service-content">
                    <h4>Data Analytics</h4>
                    <p>Transform your data into actionable insights with advanced analytics and visualization.</p>
                  </div>
                </div>
                
                <div className="service-item">
                  <div className="service-icon">🌐</div>
                  <div className="service-content">
                    <h4>Web Development</h4>
                    <p>Modern, responsive web applications built with cutting-edge technologies.</p>
                  </div>
                </div>
                
                <div className="service-item">
                  <div className="service-icon">☁️</div>
                  <div className="service-content">
                    <h4>Cloud Solutions</h4>
                    <p>Scalable cloud infrastructure and deployment strategies for modern applications.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Academy */}
            <div className="academy-section glass-card">
              <h3 className="section-title">Learning Academy</h3>
              <p className="academy-description">
                Comprehensive training programs designed to advance your technical skills
              </p>
              <div className="courses-list">
                <div className="course-item">
                  <div className="course-info">
                    <h4>Full Stack Development</h4>
                    <span className="duration">6 months</span>
                  </div>
                  <div className="course-progress"></div>
                </div>
                
                <div className="course-item">
                  <div className="course-info">
                    <h4>Data Science & Analytics</h4>
                    <span className="duration">4 months</span>
                  </div>
                  <div className="course-progress"></div>
                </div>
                
                <div className="course-item">
                  <div className="course-info">
                    <h4>Machine Learning</h4>
                    <span className="duration">8 months</span>
                  </div>
                  <div className="course-progress"></div>
                </div>
                
                <div className="course-item">
                  <div className="course-info">
                    <h4>Cloud Computing</h4>
                    <span className="duration">5 months</span>
                  </div>
                  <div className="course-progress"></div>
                </div>
              </div>
              
              <div className="learning-modes">
                <div className="mode-item">
                  <span className="mode-icon">💻</span>
                  <span>Online</span>
                </div>
                <div className="mode-item">
                  <span className="mode-icon">🏢</span>
                  <span>In-Person</span>
                </div>
                <div className="mode-item">
                  <span className="mode-icon">🔄</span>
                  <span>Hybrid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info glass-card">
              <h3 className="section-title">Get In Touch</h3>
              <div className="contact-list">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p className="email-address">rekhabhatt.arekham@arekhamitconsultancyandservices.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <p>+91 8209791315</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">🌍</div>
                  <div className="contact-details">
                    <h4>Website</h4>
                    <p>www.arekhamitconsultancyandservices.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h4>Location</h4>
                    <p>Tejas Residency, Flat No. 302<br />Mansarovar, Jaipur, Rajasthan-302</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form glass-card">
              <h3 className="section-title">Send Message</h3>
              <form className="form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="input-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-input"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send 
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 AREKHAM. All rights reserved.</p>
            <div className="footer-status">
              <div className="status-dot"></div>
              <span>System Online</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
