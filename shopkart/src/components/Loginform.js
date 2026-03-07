import React from 'react';
import { useForm } from 'react-hook-form';

function Loginform() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // The 'data' object will now perfectly capture { username, email, password }
    console.log("Secure registration data ready to send:", data);
    reset(); 
  };

  return (
    <form style={{ marginLeft: "40px", marginTop: "20px" }} onSubmit={handleSubmit(onSubmit)}>
      
      {/* 1. The New Username Field */}
      <div style={{ marginBottom: "15px" }}>
        <label>Enter Username: </label>
        <input 
          type="text"
          {...register("username", { 
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters long"
            },
            pattern: {
              // Regex to only allow alphanumeric characters and underscores (no spaces)
              value: /^[a-zA-Z0-9_]+$/,
              message: "Only letters, numbers, and underscores are allowed"
            }
          })} 
        />
        {errors.username && <span style={{ color: "red", marginLeft: "10px" }}>{errors.username.message}</span>} 
      </div>

      {/* 2. The Email Field (With Domain Restrictions) */}
      <div style={{ marginBottom: "15px" }}>
        <label>Enter Email: </label>
        <input 
          type="email"
          {...register("email", { 
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/i,
              message: "Please enter a valid Gmail, Yahoo, or Outlook address"
            }
          })} 
        />
        {errors.email && <span style={{ color: "red", marginLeft: "10px" }}>{errors.email.message}</span>} 
      </div>
      
      {/* 3. The Password Field (With Strict Complexity) */}
      <div style={{ marginBottom: "15px" }}>
        <label>Enter Password: </label>
        <input 
          type="password"
          {...register("password", { 
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long"
            },
            pattern: {
              value: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
              message: "Must include uppercase, lowercase, number, and special character (!@#$%^&*)"
            }
          })} 
        />
        {errors.password && <span style={{ color: "red", marginLeft: "10px" }}>{errors.password.message}</span>} 
      </div>
      
      <button type="submit" style={{ marginLeft: "110px", padding: "5px 15px" }}>
        Create Account
      </button>

    </form>
  );
}

export default Loginform;