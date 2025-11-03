export default function ResetButton({ isVisible, onClick }) {
  return (
    <button 
      className={`reset-button ${isVisible ? 'visible' : ''}`}
      onClick={onClick}
    >
      ← Regresar a vista original
    </button>
  );
}