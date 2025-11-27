<?php
// validation.php (Versión Final Segura)
session_start();
// Asegúrate de que este archivo exista y tenga la configuración de tu DB ($mysqli)
require_once 'conexion.php'; 

// Inicializa una variable de error para manejar fallos de forma centralizada
$login_error = false; 

// 1. Verifica que los campos hayan sido enviados
if (isset($_POST['usuario']) && isset($_POST['contraseña'])) {
    
    $usuario_ingresado = trim($_POST['usuario']);
    $contraseña_ingresada = $_POST['contraseña'];
    
    // --- Preparar la búsqueda segura del usuario ---
    $sql = "SELECT contraseña_hash, nombre_usuario FROM usuarios WHERE nombre_usuario = ?";
    
    if ($stmt = $mysqli->prepare($sql)) {
        $stmt->bind_param("s", $param_usuario);
        $param_usuario = $usuario_ingresado;
        
        if ($stmt->execute()) {
            $stmt->store_result();
            
            if ($stmt->num_rows == 1) {
                
                $stmt->bind_result($contraseña_hash, $nombre_usuario);
                $stmt->fetch();
                
                // --- Verificar Contraseña (password_verify) ---
                if (password_verify($contraseña_ingresada, $contraseña_hash)) {
                    // Contraseña correcta: iniciar sesión y redirigir a React
                    $_SESSION['usuario'] = $nombre;
                    $nombre_usuario_encoded = urlencode($nombre);
                    // Redirige al puerto donde se ejecuta la aplicación React
                    header("Location: http://localhost:5173/?user={$nombre_usuario_encoded}");  
                    exit();
                } else {
                    $login_error = true; // Contraseña incorrecta
                }
            } else {
                $login_error = true; // Usuario no encontrado
            }
        }
        $stmt->close();
    }
    $mysqli->close();

} else {
    // Faltan campos en el POST
    $login_error = true;
}

// 2. Si hay un fallo de login (o acceso directo a validation.php)
if ($login_error) {
    // 🚩 IMPLEMENTACIÓN DE VISTA PÚBLICA:
    // Redirige al mapa de React para la vista pública (sin parámetro de usuario)
    header("Location: http://localhost:5173"); 
    exit();
}
?>