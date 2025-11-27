import { useState, useEffect } from 'react'; // 👈 IMPORTACIÓN CORREGIDA
import Map from './components/Map';
import Header from './components/Header';
import ResetButton from './components/ResetButton';
import LoginButton from './components/LoginButton';
import ConflictPanel from './components/ConflictPanel';

function App() {
  // --- ESTADOS DE AUTENTICACIÓN (NUEVOS) ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState(null);
  // ------------------------------------------

  const [showResetButton, setShowResetButton] = useState(false);
  const [selectedConflict, setSelectedConflict] = useState(null);

  // 1. LÓGICA PARA LEER LA URL (AUTENTICACIÓN)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userFromURL = params.get('user');

    if (userFromURL) {
      setUserName(userFromURL);
      setIsAuthenticated(true);
      
      // Limpiar la URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []); 

  // 2. LÓGICA DE LOGOUT
  const handleLogout = () => {
    // Limpiar el estado en React
    setIsAuthenticated(false);
    setUserName(null);
    // La redirección a logout.php ocurre en LoginButton.jsx
  };

  // 3. OTRAS FUNCIONES...
  const handleResetClick = () => {
    window.resetMapView();
    setSelectedConflict(null); 
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
      
      {/* Pasar el estado y la función de logout al botón */}
      <LoginButton 
          isAuthenticated={isAuthenticated} 
          userName={userName}
          onLogout={handleLogout} 
      />
      
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