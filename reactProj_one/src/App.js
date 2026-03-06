import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [customers, setCustomers] = useState([]); // Master list from JSON
  const [searchTerm, setSearchTerm] = useState(""); // What the user types
  const [isLoading, setIsLoading] = useState(true);

  // Load the JSON data on mount
  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => {
        setCustomers(data.customers);
        setIsLoading(false);
      })
      .catch(err => console.error("Could not load customers", err));
  }, []);

  // Filter logic: This runs every time 'searchTerm' or 'customers' changes
  const searchResults = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container" style={{ marginTop: '40px', padding: '20px' }}>
      <h1 className='display-5'>Search customer name:</h1>
      
      {/* Search Bar */}
      <input
        type="text"
        className="form-control"
        placeholder="Type a name (e.g., 'N')..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ 
            padding: '12px', 
            width: '100%', 
            fontSize: '18px',
            marginBottom: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc'
        }}
      />

      {/* Results Section - Appears right under the bar */}
      <div className="results-container">
        {isLoading ? (
          <p>Loading customers...</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {searchResults.map((item) => (
              <li key={item.id} style={{
                padding: '10px',
                borderBottom: '1px solid #eee',
                backgroundColor: '#f9f9f9'
              }}>
                <strong>{item.name}</strong>
              </li>
            ))}
          </ul>
        )}

        {/* Feedback if nothing matches */}
        {!isLoading && searchTerm && searchResults.length === 0 && (
          <p style={{ color: 'red' }}>No results found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
}

export default App;