import './App.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRedditData } from './features/userSlice';
import RedditDataDisplay from './dataDisplay'; 
import CommentsChart from './commentsChart'


function App() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const redditJsonData = useSelector((state) => state.user.data);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRedditData(username)); // ex user: FeatureIll729, FlippySSBM
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
        // <div>Display data here.</div>
      <div className='displayData'>
        <h1>User: {username}</h1>
        {/* <div>
          <RedditDataDisplay jsonData={redditJsonData} />
        </div> */}
        <div>
          CommentsChart
          <CommentsChart jsonData={redditJsonData} />
        </div>
      </div>
      )}
      {user.status === 'failed' && <p>Error: {user.error}</p>}
    </div>
  );
}

export default App;
