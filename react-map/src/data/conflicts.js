export const conflicts = [
  {
    id: 1,
    title: 'Violencia del Crimen Organizado',
    description: 'Guerra entre cárteles (Sinaloa y CJNG) ha escalado dramáticamente. México clasificado como el 4to país con conflicto más extremo.',
    type: 'violencia',
    severity: 95,
    coordinates: [-107.394, 24.8092]
  },
  {
    id: 2,
    title: 'Crisis Hídrica Nacional',
    description: '71% del territorio enfrenta presión hídrica alta. 300 municipios con algún grado de sequía. Monterrey experimentó su "día cero".',
    type: 'ambiental',
    severity: 85,
    coordinates: [-100.3161, 25.6866]
  },
  {
    id: 3,
    title: 'Conflicto Tren Maya',
    description: 'Más de 50 amparos por daños ambientales. 10 millones de árboles talados. Afecta 20 áreas naturales protegidas y derechos indígenas.',
    type: 'ambiental',
    severity: 80,
    coordinates: [-89.07186, 20.86565]
  },
  {
    id: 4,
    title: 'Tren Interoceánico',
    description: 'Deforestación masiva y contaminación de agua. Activista Arnoldo Nicolás Romero asesinado en enero 2025 por defender el territorio.',
    type: 'ambiental',
    severity: 75,
    coordinates: [-95.0167, 16.35]
  },
  {
    id: 5,
    title: 'Violencia Electoral',
    description: '37 candidatos asesinados en 2024. Cárteles y grupos de poder buscan controlar elecciones para proteger sus intereses.',
    type: 'politico',
    severity: 90,
    coordinates: [-99.1332, 19.4326]
  },
  {
    id: 6,
    title: 'Conflictos Territoriales',
    description: 'Disputas por 25,000 hectáreas entre Nayarit y Jalisco. Caso Los Chimalapas (Oaxaca-Chiapas). Invasión de tierras por empresas privadas.',
    type: 'social',
    severity: 70,
    coordinates: [-104.04922, 21.2328]
  },
  {
    id: 7,
    title: 'Crisis Migratoria y Presiones EE.UU.',
    description: 'Trump amenaza con tarifas del 25% si México no controla migración y fentanilo. Tensión con T-MEC y soberanía nacional.',
    type: 'politico',
    severity: 80,
    coordinates: [-106.485, 31.7619]
  }
];

// Función helper para obtener color según tipo
export const getMarkerColor = (type) => {
  const colors = {
    violencia: '#ff6b6b',
    ambiental: '#4cd137',
    social: '#3498db',
    politico: '#9b59b6'
  };
  return colors[type] || '#ffffff';
};