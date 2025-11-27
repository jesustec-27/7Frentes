// src/components/LoginButton.jsx

// Este componente debe seguir recibiendo las props isAuthenticated y userName
export default function LoginButton({ isAuthenticated, userName, onLogout }) { 

  const handleLogout = () => {
    // 1. Ejecutar la función de logout que viene de App.jsx
    if (onLogout) {
      onLogout();
    }
    
    // 2. Redirigir al archivo de PHP que destruye la sesión (Ver Paso 1.2)
    window.location.href = 'http://localhost/7Frentes/logout.php';
  };

  const handleLogin = () => {
    // Si no está autenticado, redirigir al formulario de login de PHP
    if (!isAuthenticated) {
      window.location.href = 'http://localhost/7Frentes/index.php';
    } else {
      // Si está autenticado, llamar a la función de logout
      handleLogout();
    }
  };

  return (
    <button 
      className="login-button" 
      onClick={handleLogin}
    >
      {/* 🚩 SOLO MOSTRAR CERRAR SESIÓN si está autenticado */}
      {isAuthenticated ? 'Cerrar Sesión' : 'Iniciar Sesión'}
    </button>
  );
}