// src/data/conflicts.js

export const conflicts = [
  {
    id: 1,
    title: 'Violencia del Crimen Organizado',
    description: 'Guerra entre cárteles (Sinaloa y CJNG) ha escalado dramáticamente. México clasificado como el 4to país con conflicto más extremo.',
    detailedInfo: 'La fragmentación del Cártel de Sinaloa tras la captura de varios líderes ha desatado una guerra interna entre facciones. Los enfrentamientos entre "Los Chapitos" y "Los Mayitos" han cobrado miles de vidas. Paralelamente, el Cártel Jalisco Nueva Generación (CJNG) continúa expandiendo su presencia territorial, generando choques violentos con organizaciones rivales. Esta situación ha colocado a México como el cuarto país con el conflicto más extremo a nivel mundial, según el Índice de Paz Global.',
    type: 'violencia',
    severity: 95,
    coordinates: [-107.394, 24.8092],
    stats: {
      'Muertes 2024': '30,000+',
      'Estados afectados': '15',
      'Homicidios por 100k hab': '54'
    },
    sources: [
      { name: 'Animal Político', url: '#' },
      { name: 'El País México', url: '#' },
      { name: 'Índice de Paz Global', url: '#' }
    ],
    timeline: [
      { date: 'Enero 2024', description: 'Captura de líderes del Cártel de Sinaloa' },
      { date: 'Julio 2024', description: 'Escalada de violencia en Sinaloa y Sonora' },
      { date: 'Noviembre 2024', description: 'México clasificado 4to en conflicto extremo' }
    ]
  },
  {
    id: 2,
    title: 'Crisis Hídrica Nacional',
    description: '71% del territorio enfrenta presión hídrica alta. 300 municipios con algún grado de sequía. Monterrey experimentó su "día cero".',
    detailedInfo: 'La crisis hídrica en México se ha intensificado debido al cambio climático, la sobreexplotación de acuíferos y la gestión inadecuada del recurso. Monterrey vivió su "día cero" en 2022, cuando el suministro se redujo a 6 horas diarias. Actualmente, más del 71% del territorio nacional enfrenta presión hídrica alta o muy alta, afectando a cerca de 300 municipios. Los estados del norte son los más vulnerables, con sequías recurrentes que amenazan tanto el consumo humano como las actividades agrícolas e industriales.',
    type: 'ambiental',
    severity: 85,
    coordinates: [-100.3161, 25.6866],
    stats: {
      'Territorio afectado': '71%',
      'Municipios en sequía': '300',
      'Acuíferos sobreexplotados': '157'
    },
    sources: [
      { name: 'CONAGUA', url: '#' },
      { name: 'The Guardian', url: '#' },
      { name: 'BBC Mundo', url: '#' }
    ]
  },
  {
    id: 3,
    title: 'Conflicto Tren Maya',
    description: 'Más de 50 amparos por daños ambientales. 10 millones de árboles talados. Afecta 20 áreas naturales protegidas y derechos indígenas.',
    detailedInfo: 'El Tren Maya es un megaproyecto ferroviario de 1,500 km que atraviesa la península de Yucatán. Ha generado más de 50 amparos por parte de comunidades indígenas y organizaciones ambientalistas debido a los graves impactos ecológicos: se estima que se han talado más de 10 millones de árboles, y el proyecto atraviesa 20 áreas naturales protegidas, poniendo en riesgo ecosistemas únicos como cenotes, selvas y hábitats de especies en peligro. La ONU ha expresado preocupación por la violación de los derechos de consulta previa a pueblos indígenas mayas.',
    type: 'ambiental',
    severity: 80,
    coordinates: [-89.07186, 20.86565],
    stats: {
      'Árboles talados': '10 millones',
      'Áreas protegidas': '20',
      'Amparos legales': '50+'
    },
    sources: [
      { name: 'ONU Derechos Humanos', url: '#' },
      { name: 'Greenpeace México', url: '#' },
      { name: 'Centro Mexicano de Derecho Ambiental', url: '#' }
    ]
  },
  {
    id: 4,
    title: 'Tren Interoceánico',
    description: 'Deforestación masiva y contaminación de agua. Activista Arnoldo Nicolás Romero asesinado en enero 2025 por defender el territorio.',
    detailedInfo: 'El Corredor Interoceánico del Istmo de Tehuantepec conecta los océanos Pacífico y Atlántico a través de Oaxaca y Veracruz. El proyecto ha enfrentado severas críticas por la deforestación masiva y la contaminación de fuentes hídricas en comunidades zapotecas y mixes. En enero de 2025, el defensor ambiental Arnoldo Nicolás Romero fue desaparecido y encontrado muerto cuatro días después, evidenciando la peligrosa situación de quienes defienden el territorio. Las Manifestaciones de Impacto Ambiental no fueron presentadas adecuadamente, violando normativas mexicanas.',
    type: 'ambiental',
    severity: 75,
    coordinates: [-95.0167, 16.35],
    stats: {
      'Defensores asesinados': '1+',
      'Comunidades afectadas': '15+',
      'Km de vía': '300'
    },
    sources: [
      { name: 'Proceso', url: '#' },
      { name: 'Amnistía Internacional', url: '#' },
      { name: 'Global Witness', url: '#' }
    ]
  },
  {
    id: 5,
    title: 'Violencia Electoral',
    description: '37 candidatos asesinados en 2024. Cárteles y grupos de poder buscan controlar elecciones para proteger sus intereses.',
    detailedInfo: 'Las elecciones de 2024 en México fueron las más violentas de la historia reciente, con 37 candidatos asesinados. Los cárteles del narcotráfico y grupos de interés buscan cooptar procesos democráticos para garantizar que funcionarios afines protejan sus operaciones ilícitas. Esto incluye el control de presidencias municipales, diputaciones locales y hasta gubernaturas. La violencia electoral se concentra en estados donde el crimen organizado tiene mayor presencia: Guerrero, Michoacán, Estado de México y Guanajuato. Organismos internacionales han expresado alarma por el deterioro de la democracia mexicana.',
    type: 'politico',
    severity: 90,
    coordinates: [-99.1332, 19.4326],
    stats: {
      'Candidatos asesinados': '37',
      'Estados críticos': '12',
      'Amenazas reportadas': '200+'
    },
    sources: [
      { name: 'Integralia Consultores', url: '#' },
      { name: 'Etellekt Consultores', url: '#' },
      { name: 'Human Rights Watch', url: '#' }
    ]
  },
  {
    id: 6,
    title: 'Conflictos Territoriales',
    description: 'Disputas por 25,000 hectáreas entre Nayarit y Jalisco. Caso Los Chimalapas (Oaxaca-Chiapas). Invasión de tierras por empresas privadas.',
    detailedInfo: 'México enfrenta múltiples conflictos territoriales históricos y emergentes. El más notorio es la disputa entre Nayarit y Jalisco por 25,000 hectáreas. Otro caso emblemático es Los Chimalapas, donde Oaxaca y Chiapas reclaman jurisdicción sobre vastos territorios forestales. Adicionalmente, comunidades indígenas enfrentan invasiones de tierras por empresas privadas interesadas en recursos naturales (minería, tala, agricultura industrial). Estos conflictos generan violencia, desplazamientos forzados y la pérdida de territorios ancestrales.',
    type: 'social',
    severity: 70,
    coordinates: [-104.04922, 21.2328],
    stats: {
      'Hectáreas en disputa': '25,000+',
      'Conflictos activos': '40+',
      'Comunidades afectadas': '100+'
    },
    sources: [
      { name: 'CNDH', url: '#' },
      { name: 'Environmental Justice Atlas', url: '#' },
      { name: 'CIESAS', url: '#' }
    ]
  },
  {
    id: 7,
    title: 'Crisis Migratoria y Presiones EE.UU.',
    description: 'Trump amenaza con tarifas del 25% si México no controla migración y fentanilo. Tensión con T-MEC y soberanía nacional.',
    detailedInfo: 'La relación bilateral México-Estados Unidos se ha tensado por las amenazas del expresidente Trump de imponer tarifas arancelarias del 25% si México no toma medidas drásticas contra la migración irregular y el tráfico de fentanilo. Esta postura genera dilemas diplomáticos y económicos, ya que podría violara disposiciones del T-MEC. Además, México enfrenta una crisis migratoria interna, sirviendo de país de tránsito para miles de centroamericanos, haitianos y de otras nacionalidades que buscan llegar a Estados Unidos. La militarización de la frontera sur y las deportaciones masivas han generado crisis humanitarias.',
    type: 'politico',
    severity: 80,
    coordinates: [-106.485, 31.7619],
    stats: {
      'Migrantes detenidos 2024': '780,000',
      'Tarifa amenazada': '25%',
      'Km de frontera': '3,145'
    },
    sources: [
      { name: 'Reuters', url: '#' },
      { name: 'El Economista', url: '#' },
      { name: 'Migration Policy Institute', url: '#' }
    ]
  }
];

export const getMarkerColor = (type) => {
  const colors = {
    violencia: '#ff6b6b',
    ambiental: '#4cd137',
    social: '#3498db',
    politico: '#9b59b6'
  };
  return colors[type] || '#ffffff';
};