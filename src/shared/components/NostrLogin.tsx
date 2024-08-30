import React, { useState } from 'react';

const NostrLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement Nostr login logic here
    setIsLoggedIn(true);
  };

  return (
    <div className="nostr-login">
      {isLoggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <button onClick={handleLogin}>Login with Nostr</button>
      )}
    </div>
  );
};

export default NostrLogin;
