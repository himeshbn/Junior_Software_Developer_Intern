import React, { useState } from 'react';

function Products() {
  // 1. Initial Product Data (Acting as our Vault)
  const [products] = useState([
    { id: 1, name: "Wireless Bluetooth Headphones", price: "$49.99" },
    { id: 2, name: "Smart Fitness Watch", price: "$79.99" },
    { id: 3, name: "Mechanical Gaming Keyboard", price: "$89.99" },
    { id: 4, name: "4K Ultra HD Action Camera", price: "$129.99" },
    { id: 5, name: "Portable Power Bank 20000mAh", price: "$29.99" },
    { id: 6, name: "Ergonomic Office Chair", price: "$199.99" },
    { id: 7, name: "Noise Cancelling Earbuds", price: "$89.99" },
    { id: 8, name: "Curved Gaming Monitor", price: "$249.99" }
  ]);

  // 2. State for the Search Bar and the Displayed Results
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(products);

  // 3. The Search Logic (From your screenshot!)
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const results = products.filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    
    setSearchResults(results);
  };

  return (
    <div className='container' style={{ marginTop: '40px', maxWidth: '800px' }}>
      
      <h1 className='display-5' style={{ color: '#2c3e50', marginBottom: '10px' }}>
        Shopkart Products
      </h1>
      <p className="lead" style={{ marginBottom: '30px', color: '#555' }}>
        Find exactly what you are looking for in our extensive catalog.
      </p>

      {/* The Search Bar */}
      <input
        type="text"
        className="form-control"
        placeholder="Search products by name..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ 
          marginBottom: '30px', 
          padding: '15px', 
          fontSize: '1.1rem',
          borderRadius: '8px',
          border: '2px solid #eee'
        }}
      />

      {/* The Product List */}
      {searchResults.length === 0 ? (
        <div style={{ textAlign: 'center', color: 'red', padding: '20px' }}>
          <h4>No products found matching "{searchTerm}"</h4>
        </div>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {searchResults.map(item => (
            <li 
              key={item.id} 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px',
                marginBottom: '10px',
                backgroundColor: '#f8f9fa',
                border: '1px solid #dee2e6',
                borderRadius: '8px'
              }}
            >
              <strong style={{ fontSize: '1.2rem', color: '#333' }}>{item.name}</strong>
              <span style={{ 
                fontWeight: 'bold', 
                color: '#0d6efd', 
                fontSize: '1.2rem' 
              }}>
                {item.price}
              </span>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default Products;