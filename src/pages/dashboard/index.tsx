import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import NostrLogin from '@/shared/components/NostrLogin';
import NIP60Wallet from '@/shared/components/NIP60Wallet';
import './Dashboard.css';

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
    fetch('/api/engagement-metrics')
      .then(response => response.json())
      .then(data => {
        setData({
          labels: data.labels,
          datasets: [
            {
              label: 'Engagement Metrics',
              data: data.values,
              borderColor: 'rgba(75,192,192,1)',
              backgroundColor: 'rgba(75,192,192,0.2)',
            },
          ],
        });
      });
  }, []);

  const handleToggle = (type) => {
    setTopInteractions(type);
    // Fetch and update top interactions based on the type
    fetch(`/api/top-interactions?type=${type}`)
      .then(response => response.json())
      .then(data => {
        // Update the state with the fetched data
      });
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
