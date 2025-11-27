// db_conn.php
<?php
// Configuración de la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "conflictos";

// Intento de conexión
$mysqli = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if($mysqli->connect_error){
    echo "Conexión fallida: ";
}
?>