// src/App.jsx

import { useState } from 'react';
import Map from './components/Map';
import Header from './components/Header';
import ResetButton from './components/ResetButton';
import LoginButton from './components/LoginButton';
import ConflictPanel from './components/ConflictPanel';

function App() {
  const [showResetButton, setShowResetButton] = useState(false);
  const [selectedConflict, setSelectedConflict] = useState(null);

  const handleResetClick = () => {
    window.resetMapView();
    setSelectedConflict(null); // Cerrar panel también
  };

  const handleConflictSelect = (conflict) => {
    setSelectedConflict(conflict);
  };

  const handleClosePanel = () => {
    setSelectedConflict(null);
  };

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Header />
      <LoginButton />
      <ResetButton 
        isVisible={showResetButton} 
        onClick={handleResetClick}
      />
      <Map 
        onZoomChange={setShowResetButton}
        onConflictSelect={handleConflictSelect}
      />
      <ConflictPanel 
        conflict={selectedConflict}
        onClose={handleClosePanel}
      />
    </div>
  );
}

export default App;