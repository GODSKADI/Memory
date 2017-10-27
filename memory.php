<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<link rel="stylesheet" href="style.css" type="text/css"/>
        <script type="text/javascript" src="script.js"></script>
        <script type="text/php" src="memory.php"></script>
		<title>SKADI'S MEMORY</title>
	</head>
	<body>
    <div class="container">
      <header>
        <h1>SKADI'S MEMORY</h1>
      </header>
      <audio id="giro">
        <source src="sounds/giro.mp3" type="audio/mp3">
      </audio>
      <audio id="good">
        <source src="sounds/correcto.mp3" type="audio/mp3">
      </audio>
      <audio id="bad">
        <source src="sounds/error.mp3" type="audio/mp3">
      </audio>
      <article>
        <?php
          //variables
          $dim = $_POST['dificultad'];
          if ($dim === '4x4'){
            $filas = 4;
            $columnas = 4;
          }
          else if ($dim === '6x6'){
            $filas = 6;
            $columnas = 6;
          }
          else{
            $filas = 8;
            $columnas = 8;
          }
          //listas
          $numRepetidos = array();
          $totalCeldas = ($filas * $columnas / 2);
          //while que genera numeros pares aleatoriamente
          for ($i = 0;$i < $totalCeldas; $i++){
            array_push($numRepetidos, $i);
            array_push($numRepetidos, $i);
          }
          //mezcla los valores de la lista numRepetidos
          shuffle($numRepetidos);
          //intentos
          echo "<p>Intentos: </p><a id='count'>0</a>";
          //Genera la tabla
          //la variable c es un contador para que vaya poniendo las cartas en los div's
          $c = 0;
          echo "<div class='divTabla'>";
          echo "<table class='tabla'>";
          for ($u = 0;$u < $filas;$u++){
            echo "<tr>";
            for ($o = 0;$o < $columnas;$o++){
              echo "<td>"; 
              echo "<div id='cart".$c."' class='cart' onclick='girar(".$c.",".$totalCeldas.")'>";
                echo "<div class='side front'><img src='imagenes/back.png'/></div>";
                echo "<div class='side back'><img src='imagenes/png".$numRepetidos[$c++].".png'/></div>";
              echo "</div>";
              echo "</td>"; 
            }
            echo "</tr>";
          }
          echo "</table>";
          echo "</div>";
          echo "<button type='submit' onclick='help(".$c.")'>Help</button>"
        ?>
        <button type='submit' onclick=" location.href='inicio.html'">Atras</button>
        <span id="minutes">0</span>:<span id="seconds">0</span>

      </article>
      <footer>
        <h6>Copyright © 2017 SAKDI'S Project, Memory.</h6>
      </footer>
    </div>
  </body>
</html>