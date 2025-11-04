<?php
session_start();

// Validación de credenciales
$usuario_correcto = "User";
$contraseña_correcta = "12345";

    if ($_POST['usuario'] === $usuario_correcto && $_POST['contraseña'] === $contraseña_correcta) {
        $_SESSION['usuario'] = $_POST['usuario'];
        header("Location: http://localhost:5173");
        exit();
    } else {

            ?>
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <title>Acceso Denegado</title>
            </head>
            <body>
                <h3>Acceso restringido</h3>
                <p>Usuario o contraseña incorrectos.</p>
                <a href="index.php">Volver a intentar</a>
            </body>
            </html>
            <?php
        }
?>
