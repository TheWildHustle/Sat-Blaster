import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import NostrLogin from '@/shared/components/NostrLogin';
import NIP60Wallet from '@/shared/components/NIP60Wallet';

const Dashboard = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Engagement Metrics',
        data: [],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  });

  const [topInteractions, setTopInteractions] = useState('zappers');

  useEffect(() => {
    // Fetch data for the graph and top interactions
    // This is a placeholder. Replace with actual data fetching logic.
    setData({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Engagement Metrics',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.2)',
        },
      ],
    });
  }, []);

  const handleToggle = (type) => {
    setTopInteractions(type);
    // Fetch and update top interactions based on the type
  };

  return (
    <div className="dashboard">
      <h1>Creator Dashboard</h1>
      <NostrLogin />
      <NIP60Wallet />
      <div className="graph-container">
        <Line data={data} />
      </div>
      <div className="top-interactions">
        <button onClick={() => handleToggle('zappers')}>Top Zappers</button>
        <button onClick={() => handleToggle('likers')}>Top Likers</button>
        <button onClick={() => handleToggle('reposters')}>Top Reposters</button>
        <button onClick={() => handleToggle('commenters')}>Top Commenters</button>
        <div className="interaction-list">
          {/* Render the list of top interactions based on the selected type */}
          <p>Showing top {topInteractions}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
