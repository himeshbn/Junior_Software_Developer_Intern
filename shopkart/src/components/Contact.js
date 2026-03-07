import React from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // In a real app, you would send this to your backend server
    console.log("Customer Message Submitted:", data);
    
    // Show a success message to the user
    alert("Thank you for reaching out to Shopkart! We will get back to you shortly.");
    
    // Clear the form
    reset(); 
  };

  return (
    <div className="container" style={{ marginTop: '40px', marginBottom: '40px', maxWidth: '600px' }}>
      
      {/* Page Header */}
      <h1 className="display-5" style={{ color: '#2c3e50', marginBottom: '10px' }}>Contact Us</h1>
      <p className="lead" style={{ marginBottom: '30px', color: '#555' }}>
        Have a question about an order or want to leave feedback? Send the Shopkart team a message!
      </p>

      {/* Contact Form inside a styled "Card" */}
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '30px', 
          borderRadius: '8px', 
          border: '1px solid #dee2e6',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)' 
        }}
      >
        
        {/* Name Input */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Full Name</label>
          <input 
            type="text"
            className="form-control"
            placeholder="e.g. John Doe"
            {...register("name", { required: "Please tell us your name" })} 
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {errors.name && <span style={{ color: "red", fontSize: '0.9rem', marginTop: '5px', display: 'block' }}>{errors.name.message}</span>} 
        </div>

        {/* Email Input */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Email Address</label>
          <input 
            type="email"
            className="form-control"
            placeholder="john@example.com"
            {...register("email", { 
              required: "Email is required so we can reply to you",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email address"
              }
            })} 
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {errors.email && <span style={{ color: "red", fontSize: '0.9rem', marginTop: '5px', display: 'block' }}>{errors.email.message}</span>} 
        </div>
        
        {/* Message Textarea */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Your Message</label>
          <textarea 
            rows="5"
            className="form-control"
            placeholder="How can we help you today?"
            {...register("message", { 
              required: "Please write a message",
              minLength: {
                value: 10,
                message: "Your message must be at least 10 characters long"
              }
            })} 
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
          />
          {errors.message && <span style={{ color: "red", fontSize: '0.9rem', marginTop: '5px', display: 'block' }}>{errors.message.message}</span>} 
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="btn btn-primary" 
          style={{ width: '100%', padding: "10px", fontSize: '1.1rem', marginTop: '10px' }}
        >
          Send Message
        </button>

      </form>
    </div>
  );
}

export default Contact;