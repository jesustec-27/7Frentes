// src/App.jsx

import { useState } from 'react';
import Map from './components/Map';
import Header from './components/Header';
import ResetButton from './components/ResetButton';

function App() {
  const [showResetButton, setShowResetButton] = useState(false);

  const handleResetClick = () => {
    window.resetMapView();
  };

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Header />
      <ResetButton 
        isVisible={showResetButton} 
        onClick={handleResetClick}
      />
      <Map onZoomChange={setShowResetButton} />
    </div>
  );
}

export default App;