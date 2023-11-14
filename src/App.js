import './App.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from './features/userSlice';


function App() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUserData(username));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Reddit username"
        />
        <button type="submit">Get User Data</button>
      </form>

      {/* Display user data */}
      {user.status === 'loading' && <p>Loading...</p>}
      {user.status === 'succeeded' && (
        // Display user data here
        <div>Display data here.</div>
      )}
      {user.status === 'failed' && <p>Error: {user.error}</p>}
    </div>
  );
}

export default App;
