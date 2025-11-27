<?php
// 1. Incluir el archivo de conexión
header("Access-Control-Allow-Origin: *"); 
require_once 'conexion.php';
header('Content-Type: application/json');


// 3. Ejecutar la consulta SQL
$sql = "SELECT titulo, descripcion, tipo, gravedad, latitud, longitud FROM conflictos";
$result = $mysqli->query($sql);

$features = [];

if ($result->num_rows > 0) {
    // 4. Iterar sobre los resultados y construir el GeoJSON
    while($row = $result->fetch_assoc()) {
        $features[] = [
            'type' => 'Feature',
            'geometry' => [
                'type' => 'Point',
                // Mapbox usa [longitud, latitud]
                'coordinates' => [
                    (float)$row['longitud'], 
                    (float)$row['latitud']
                ]
            ],
            'properties' => [
                'title' => $row['titulo'],
                'description' => $row['descripcion'],
                'type' => $row['tipo'],
                'severity' => (int)$row['gravedad']
            ]
        ];
    }
}

// 5. Construir el objeto GeoJSON final
$geojson = [
    'type' => 'Conflictos',
    'features' => $features
];

// 6. Devolver el resultado como JSON
echo json_encode($geojson, JSON_PRETTY_PRINT);

// Cerrar la conexión
$mysqli->close();
?>