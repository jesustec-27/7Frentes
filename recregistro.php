<?php
// recregistro.php
session_start();
require_once 'conexion.php'; // Incluir la conexión a la DB

// 1. Verificar si los datos necesarios fueron enviados
if (isset($_POST['nombre']) && isset($_POST['correo']) && isset($_POST['contraseña'])) {
    
    $nombre = trim($_POST['nombre']);
    $correo = trim($_POST['correo']);
    $contraseña = $_POST['contraseña']; // Contraseña plana ingresada por el usuario

    // --- 2. Cifrar Contraseña (Hashing) ---
    // Usar password_hash() para cifrar la contraseña antes de guardarla
    $contraseña_hash = password_hash($contraseña, PASSWORD_DEFAULT);
    
    // --- 3. Preparar la Inserción Segura (Prepared Statements) ---
    $sql = "INSERT INTO usuarios (nombre_usuario, correo, contraseña_hash) VALUES (?, ?, ?)";
    
    if ($stmt = $mysqli->prepare($sql)) {
        // Enlazar variables (s = string)
        $stmt->bind_param("sss", $param_nombre, $param_correo, $param_hash);
        
        $param_nombre = $nombre;
        $param_correo = $correo;
        $param_hash = $contraseña_hash;

        // --- 4. Ejecutar la Consulta ---
        if ($stmt->execute()) {
            // Registro exitoso, iniciar sesión y redirigir a la aplicación React (Vite)
            $_SESSION['usuario'] = $nombre;
            $nombre_usuario_encoded = urlencode($nombre);
            // Redirige al puerto donde se ejecuta la aplicación React
            header("Location: http://localhost:5173/?user={$nombre_usuario_encoded}"); 
            exit();
        } else {
            // Error al ejecutar (ej. nombre de usuario o correo ya existe)
            // Aquí puedes redirigir con un mensaje de error
            echo "Error: No se pudo registrar el usuario. Puede que el nombre de usuario o correo ya esté en uso.";
        }
        $stmt->close();
    } else {
        echo "Error: Falló la preparación de la consulta SQL.";
    }
    $mysqli->close();
} else {
    // Si faltan datos en el formulario
    echo "Error: Por favor, complete todos los campos de registro.";
}
?>