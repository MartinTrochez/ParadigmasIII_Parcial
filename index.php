<?php
include('mt_includes/mt_conexion.php');
mt_conectar();
?>


<!DOCTYPE html>
<html lang="es">
<head>
    <title>Parcial - TROCHEZ, MARTIN EMILIANO</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="mt_css/mt_style.css" rel="stylesheet">
    <script src="mt_script/mt_juego.js" defer></script>
</head>
<body>
<header class="mt_header">
    <div class="mt_contenedor-nombreJuego">
        <ul>
            <li>Piedra</li>
            <li>Papel</li>
            <li>Tijera</li>
        </ul>
    </div>

    <div class="mt_contenedor-puntaje">
        <p class="mt_nombre-puntos">Puntaje</p>
        <p id="mt_puntaje">0</p>
    </div>
</header>

<main id="mt_table-juego">
    <div class="mt_contenedor-imagen">
        <img id="mt_papel" src="mt_imagenes/mt_papel.png" alt="papel" data-item>
    </div>
    <div class="mt_contenedor-imagen">
        <img id="mt_roca" src="mt_imagenes/mt_roca.png" alt="roca" data-item>
    </div>
    <div class="mt_contenedor-imagen">
        <img id="mt_tijera" src="mt_imagenes/mt_tijera.png" alt="tijera" data-item>
    </div>
    <div id="mt_eleccion-computadora">
    </div>
    <div id="mt_mensaje_resultado">
    </div>
</main>

<br>
<br>

<h3>Reglas</h3>
<ul>
    <?php
    $sql = "SELECT * FROM reglas";
    $sql = mysqli_query($con, $sql);
    while ($elemento = mysqli_fetch_array($sql)) {
        $regla = $elemento['regla'];
        ?>
        <li>
            <?php echo "$regla"; ?>
        </li>
        <?php
    }
    ?>
</ul>

</body>
</html>
