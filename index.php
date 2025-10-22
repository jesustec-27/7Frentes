<?php session_start(); ?>
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>7 FRENTES - Login</title>
<link rel="stylesheet" href="estilos/index.css">
</head>
<body>
    <div class="login-wrapper">
        <div class="logo">
            <h1>7 FRENTES</h1>
            <p>El estado real del país</p>
        </div>

        <div class="login-container">
            <form action="validation.php" method="post">
                <div class="form-group">
                    <label for="usuario">Usuario</label>
                    <input 
                        type="text" 
                        name="usuario" 
                        id="usuario" 
                        class="form-control" 
                        required 
                        autocomplete="username"
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
                        autocomplete="current-password"
                    >
                </div>

                <button type="submit" class="btn-primary">Ingresar</button>
                
                <div class="registrarse">
                    <p>No tengo cuenta <a href="registro.php">Registrarme</a></p>
                </div>
                
            </form>
        </div>
    </div>
</body>
</html>