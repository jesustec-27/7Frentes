<?php session_start(); ?>
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>7 FRENTES - Registro</title>
<link rel="stylesheet" href="estilos/index.css">
</head>
<body>
    <div class="login-wrapper">
        <div class="logo">
            <h1>7 FRENTES</h1>
            <p>Registro</p>
        </div>

        <div class="login-container">
            <form action="recregistro.php" method="post">
                <div class="form-group">
                    <label for="usuario">Nombre de Usuario</label>
                    <input 
                        type="text" 
                        name="nombre" 
                        id="nombre" 
                        class="form-control" 
                        required 
                    >
                </div>

                <div class="form-group">
                    <label for="usuario">Correo</label>
                    <input 
                        type="text" 
                        name="correo" 
                        id="correo" 
                        class="form-control" 
                        required 
                        autocomplete="correo"
                    >
                </div>

                <div class="form-group">
                    <label for="contraseña">Contraseña</label>
                    <input 
                        type="password" 
                        name="contraseña" 
                        id="contraseña" 
                        class="form-control" 
                        required
                    >
                </div>

                <button type="submit" class="btn-primary">Registrarse</button>
                
            </form>
        </div>
    </div>
</body>
</html>