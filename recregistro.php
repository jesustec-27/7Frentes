<?php

    if (isset($_POST['nombre']) && isset($_POST['correo']) && isset($_POST['contraseña'])) {
            $_SESSION['usuario'] = $_POST['usuario'];
            header("Location: map.html");
            exit();
        }
    else {
        echo "Introduce los datos";
    }


?>