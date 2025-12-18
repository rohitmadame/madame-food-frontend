import React, { useState } from 'react';

function TestConnection() {
  const [message, setMessage] = useState('Click button to test connection');
  const [loading, setLoading] = useState(false);

  const testDjango = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/hello/');
      const data = await response.json();
      setMessage(`✅ SUCCESS: ${data.message}`);
    } catch (error) {
      setMessage(`❌ ERROR: ${error.message}`);
    }
    setLoading(false);
  };

  return (
    <div style={{
      padding: '20px',
      margin: '20px',
      border: '2px solid #4CAF50',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>Test Django Connection</h2>
      <button 
        onClick={testDjango} 
        disabled={loading}
        style={{
          padding: '10px 20px',
          backgroundColor: loading ? '#ccc' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Testing...' : 'Test Connection'}
      </button>
      <p style={{ marginTop: '10px' }}>{message}</p>
      
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p><strong>Expected:</strong> Click button → Should show "✅ SUCCESS: Hello from Django!"</p>
        <p><strong>If error:</strong> Check if Django is running at http://localhost:8000/api/hello/</p>
      </div>
    </div>
  );
}

export default TestConnection;