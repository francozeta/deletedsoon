<?php

if($_SERVER['REQUEST_METHOD']==='POST') {
    //agregamos el metodo $_POST
    $nombre=$_POST['nombre'];
    $apellido=$_POST['apellido'];
    $email=$_POST['email'];
    $password=$_POST['password'];

    //indicamos el correo del destinatario:
    $destinatario='francozeta2011@gmail.com';

    //Indicamos el "asunto" del correo 

    $asunto='Se registró correctamente, ¡Bievenido a Color Mirror!';

    //diseñamos el cuerpo y/o contenido del mensaje
    $cuerpo= "Nombre: " . $nombre . "\n";
    $cuerpo .= "Apellido: " . $apellido . "\n";  //el 2do punto une las filas de $cuerpo
    $cuerpo .= "Correo: " .  $email . "\n";
    $cuerpo .= "Se resgitro correctamente su contraseña" . "\n";

    if (mail($destinatario, $asunto, $cuerpo)) {
        // Envío de correo exitoso
        echo '<script>
          alert("¡Te has registrado correctamente! ¡Bienvenido a Color Mirror!");
          // Redirigir al usuario a otra página
          window.location.href = "https://color-mirror.000webhostapp.com/index.html";
        </script>';
      } else {
        // Error al enviar el correo
        echo '<script>
          alert("Hubo un error al enviar el correo. Inténtalo de nuevo más tarde.");
          // Redirigir al usuario a otra página
          window.location.href = "https://color-mirror.000webhostapp.com/sign-up.html";
        </script>';
      }
      

}
?>