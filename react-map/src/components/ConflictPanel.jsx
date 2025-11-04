export default function ConflictPanel({ conflict, onClose }) {
  if (!conflict) return null;

  return (
    <>
      {/* Overlay oscuro */}
      <div className="panel-overlay" onClick={onClose} />
      
      {/* Panel lateral */}
      <div className="conflict-panel">
        {/* Botón de cerrar */}
        <button className="panel-close" onClick={onClose}>
          ✕
        </button>

        {/* Contenido del panel */}
        <div className="panel-content">
          {/* Header con tipo de conflicto */}
          <div className={`panel-type type-${conflict.type}`}>
            {conflict.type.toUpperCase()}
          </div>

          {/* Título */}
          <h2 className="panel-title">{conflict.title}</h2>

          {/* Barra de gravedad */}
          <div className="panel-severity">
            <div className="severity-label">Nivel de Gravedad</div>
            <div className="severity-bar-container">
              <div 
                className="severity-bar-fill" 
                style={{ width: `${conflict.severity}%` }}
              />
            </div>
            <div className="severity-percentage">{conflict.severity}%</div>
          </div>

          {/* Descripción */}
          <div className="panel-section">
            <h3>Descripción General</h3>
            <p>{conflict.description}</p>
          </div>

          {/* Información detallada - AQUÍ PUEDES AGREGAR MÁS CONTENIDO */}
          <div className="panel-section">
            <h3>Contexto e Impacto</h3>
            <p>{conflict.detailedInfo || 'Información detallada próximamente...'}</p>
          </div>

          {/* Datos clave */}
          {conflict.stats && (
            <div className="panel-section">
              <h3>Datos Clave</h3>
              <div className="stats-grid">
                {Object.entries(conflict.stats).map(([key, value]) => (
                  <div key={key} className="stat-item">
                    <div className="stat-label">{key}</div>
                    <div className="stat-value">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ubicación */}
          <div className="panel-section">
            <h3>Ubicación Geográfica</h3>
            <p>Coordenadas: {conflict.coordinates[1].toFixed(4)}°N, {Math.abs(conflict.coordinates[0]).toFixed(4)}°O</p>
          </div>

          {/* Fuentes */}
          {conflict.sources && (
            <div className="panel-section">
              <h3>Fuentes</h3>
              <div className="sources-list">
                {conflict.sources.map((source, idx) => (
                  <a 
                    key={idx} 
                    href={source.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="source-link"
                  >
                    📰 {source.name}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Timeline - OPCIONAL */}
          {conflict.timeline && (
            <div className="panel-section">
              <h3>Cronología</h3>
              <div className="timeline">
                {conflict.timeline.map((event, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-date">{event.date}</div>
                    <div className="timeline-description">{event.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}