export default function LoginButton() {
  const handleLogin = () => {
    window.location.href = 'http://localhost/ProyectoWeb/index.php';
  };

  return (
    <button className="login-button" onClick={handleLogin}>
      Iniciar Sesión
    </button>
  );
}