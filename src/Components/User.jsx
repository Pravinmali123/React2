import { useState } from 'react';

function UserInput() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');

  const handleChange = (event) => setName(event.target.value);
  const handleCityChange = (event) => setCity(event.target.value);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Type Your Name and City </h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        style={{ padding: '8px', borderRadius: '5px', fontSize: '16px', marginRight: '10px' }}
      />
      <input
        type="text"
        placeholder="Enter your city"
        value={city}
        onChange={handleCityChange}
        style={{ padding: '8px', borderRadius: '5px', fontSize: '16px' }}
      />
      <h3>
        Hello, {name || ''}{city ? ` from ${city}` : ''} 
      </h3>
    </div>
  );
}

export default UserInput;
