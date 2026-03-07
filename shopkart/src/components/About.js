import React from 'react';

function About() {
  return (
    <div className="container" style={{ marginTop: '40px', marginBottom: '40px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Main Heading */}
        <h1 className="display-5" style={{ color: '#2c3e50', marginBottom: '20px' }}>
          About Shopkart
        </h1>
        
        {/* Introductory Paragraph */}
        <p className="lead" style={{ fontSize: '1.2rem', color: '#555' }}>
          Welcome to <strong>Shopkart</strong>, your ultimate destination for seamless online shopping. 
          We are dedicated to providing you with the very best digital retail experience, with an emphasis on 
          premium quality products, rock-solid security, and exceptional customer service.
        </p>
        
        <hr style={{ margin: '30px 0', borderColor: '#ddd' }} />
        
        {/* Mission Section */}
        <h3 style={{ color: '#34495e' }}>Our Tech-Driven Mission</h3>
        <p style={{ lineHeight: '1.7', color: '#666' }}>
          Founded with a passion for connecting people with the products they love, Shopkart aims to 
          modernize the e-commerce space. By leveraging fast, modern web technologies and robust data 
          security protocols, we ensure your shopping journey is safe, efficient, and highly personalized 
          from the moment you browse to the second your package arrives.
        </p>

        {/* Features List */}
        <h3 style={{ marginTop: '30px', color: '#34495e' }}>Why Choose Shopkart?</h3>
        <ul style={{ lineHeight: '2', fontSize: '1.1rem', color: '#555', marginTop: '15px' }}>
          <li>
            <strong>Ironclad Security:</strong> Your privacy, identity, and payment data are protected using state-of-the-art encryption.
          </li>
          <li>
            <strong>Vast Selection:</strong> A curated marketplace featuring everything from cutting-edge electronics to daily essentials.
          </li>
          <li>
            <strong>Lightning Fast Delivery:</strong> Optimized logistics networks designed to get your items to your doorstep without delay.
          </li>
          <li>
            <strong>24/7 Support:</strong> A dedicated support team ready to resolve your queries around the clock.
          </li>
        </ul>

        {/* Footer Callout */}
        <div style={{ 
          marginTop: '40px', 
          padding: '25px', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '8px',
          borderLeft: '5px solid #0d6efd' 
        }}>
          <h4 style={{ margin: '0 0 10px 0' }}>Join the Shopkart Family</h4>
          <p style={{ margin: 0, color: '#555' }}>
            We hope you enjoy our platform as much as we enjoyed building it for you. 
            If you have any questions, feedback, or business inquiries, please don't hesitate to visit our Contact page.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;