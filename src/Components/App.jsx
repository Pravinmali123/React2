import Welcome from "../Welcome";   
import { useState } from 'react';
function App1() {
     const [name, setName] = useState('Pravin');
  const [age, setAge] = useState(22);
    const [city, setCity] = useState('Pune');

    const changecity = () => {
    setCity('Mumbai');
     };

  const changeUser = () => {
    setName('Rahul');
    setAge(25);

     };
     
     
    const resetUser = () => {
    setName('Rahul');
    setAge(25);
    setCity('Mumbai');
     };
  return (
    <div>
    <div style={{ border: '2px solid gray', padding: '20px', borderRadius: '10px', width: '250px', textAlign: 'center' }}>
      <h2>User Card</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <button onClick={changeUser}>changeUser</button>
      <button onClick={changecity} style={{ marginLeft: '10px' }}>changecity</button>
      <button onClick={resetUser} style={{ marginLeft: '10px' }}>Reset User</button>
    </div>
      <Welcome />
    </div>
  );
}

export default App1;
