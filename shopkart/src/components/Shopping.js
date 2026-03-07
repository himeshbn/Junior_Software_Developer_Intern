import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

// Assuming you have these or will create them!
 
import About from './About';
import Contact from './Contact';
import Products from './Products';
 

function Shopping() {
  return (
    <div className='container' style={{ marginTop: '20px' }}>
      
      {/* Navigation Bar */}
      <nav style={{ marginBottom: '30px', paddingBottom: '10px', borderBottom: '2px solid #eee' }}>
        <ul style={{ 
          display: 'flex', 
          gap: '20px', 
          listStyleType: 'none', 
          padding: 0, 
          margin: 0 
        }}>
          
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* The "Screen" where components render */}
      <Routes>
        {/* Default route that loads when you first open the app */}
        
        
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        
        {/* The asterisk (*) acts as a catch-all for any URL that doesn't match above */}
{/* Just drop this at the bottom of your <Routes> list */}
<Route 
  path='*' 
  element={<h2 style={{ color: 'red', marginTop: '20px' }}>404: Page Not Found!</h2>} 
/>        
      </Routes>
      
    </div>
  );
}

export default Shopping;