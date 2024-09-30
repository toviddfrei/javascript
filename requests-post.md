# ¿Qué es una solicitud POST?

Todos tenemos que recordar porque ya los hemos estudiado, repasado, probado, lo que coloquialmente denominamos los "verbos HTML", me hace un poco de gracia, ya que volvemos a lo mismo que la pregunta anterior, soy viejuno, ya existían en HTML 1. Bueno, fuera batallitas, vale, creo que todos sabemos de lo que hablamos, ¿no? Los verbos en definitiva son los recursos que utilizamos para comunicarnos con el servidor desde una página web, recordemos que las páginas web están codificadas en HTML, lenguaje de marcado, por ser un lenguaje que etiqueta todas las expresiones que realizamos.

A modo de recordatorio, y creo que nunca me viene mal, reescribo los verbos y lo que siempre noto es la evolución que han tenido y siguen teniendo, bueno si os parece los presentamos todos y hablamos del que toca ahora mismo que es POST, y va por delante que para mí sin POST no existen ninguno de los demás. Luego lo razonaré, pero es obvio.

¿Cuáles son los verbos HTTP y que nos proporcionan?, están especificados en el protocolo HTTP ... da igual la versión "ESTÁN, SON NECESARIOS", nos ayudan a indicar las acciones que queremos realizar en el servidor:

- **GET**. Lo utilizamos para solicitar datos o recursos específicos.
- **POST**. Envía datos a un recurso para su creación.
- **PUT**. Es utilizado para actualizar un recurso.
- **PATCH**. Actualiza una sección específica de un recurso.
- **DELETE**. Elimina por completo un recurso.

## ¿Hablemos de las solicitudes POST?

**Una solicitud POST es un tipo de petición HTTP que se utiliza para enviar datos a un servidor.** Lo podemos decir muchas más veces, pero siempre responderemos lo mismo, cuando queremos enviar datos a un servidor utilizamos la solicitud POST, Ya sea cuando queremos entrar en nuestra cuenta de Amazon y escribimos el usuario y contraseña, se envía a través de una solicitud POST, cuando queremos entrar en la cuenta del banco y ponemos nuestro usuario y contraseña, utilizamos una solicitud post, y cuando entramos en la plataforma de Devcamp que solicitud estamos enviando una petición POST, con nuestro usuario y nuestra contraseña.

Las peticiones POST son mucho más seguras que las solicitudes GET, al no ir adjunto a la URL que es el procedimiento de las peticiones GET, las peticiones POST ocultan los datos que le pasamos al servidor, por lo tanto, nos permite aplicar seguridad que es algo fundamental, si hablamos de seguridad y a eso me refería que lo veo evolucionar POST ha evolucionado mucho en seguridad pudieron aplicar nuevas técnicas, nuevos procedimientos para que los envíos de información entre la página web y el servidor cada vez sean más seguras.

Por otro lado, POST nos permite pasar varios tipos de datos, desde cadenas hasta ficheros completos, no hay una limitación a la cantidad de datos que nos permite pasar, podemos subir una imagen, un fichero pdf. 

Me gustaría acabar esta pregunta con el uso que estamos realizando en conjunto con React y Axios, recordemos que Axios nos proporciona la utilidad de comunicarnos con las API's, pues si en los párrafos anteriores sustituyes comunicarse con un servidor por comunicarse con una API hablaríamos de lo mismo, POST es el método, es la petición que realizamos para comunicarnos con sistemas externos, es un método seguro y que nos permite llenar y utilizo el verbo llenar porque es lo que hace llenamos de datos nuestras API's, nuestros servidores y sin POST no sería posible, y cuando he dicho que razonaría mi afirmación de que para mi POST es el verbo más importante, es que sin él no existiría DELETE, no habría nada que borrar, no existiría GET, no habría nada que consultar, no existiría PUT ¿qué tendríamos que actualizar?, por lo tanto, creo que ha quedado claro porque lo considero el recurso más importante de comunicación con un sistema externo.

**¿Os apetece un poco de código?**

Hemos estado trabajando en un formulario(enviado por POST), que nos permite tener nuestro portfolio personal y como es normal y otro punto importante que siempre tenemos que contemplar es realizar aplicaciones escalables, yo espero que mi portfolio se vaya llenando poquito a poco y por supuesto que a todos os pase los mismos, por lo tanto, si no contamos con la posibilidad de seguir llenándolo mal estaríamos haciendo el trabajo. Lo dicho tenemos nuestro formulario para ir incluyendo nuevos proyectos y la forma de implementarlo en React es sencilla, rápida, diría brillante, con React e importando a nuestro amigo Axios tenemos todas las herramientas necesarias. 


```javascript
import React, { Component } from "react";
import axios from "axios";
```

```javascript
handleSubmit(event) {
  axios
    .post(
      "API SELECT",
      this.buildForm(),
      { withCredentials: true }
    )
    .then(response => {
      console.log("response", response);
    })
    .catch(error => {
      console.log("portfolio form handleSubmit error", error);
    });
  event.preventDefault();
}
```

En la primera parte están las herramientas que utilizaremos React y Axios y en la segunda parte está la función o método que vamos a utilizar para crear nuestro nuevo elemento, si nos fijamos tenemos a axios.psot('API SELECT') en ese momento cuando la función es llamada desde el punto de la aplicación que lo requiera Axios utilizara su método POST para realizar la petición a la API seleccionada y a continuación según la respuesta del servidor o API se establecerá una comunicación en este caso crearíamos los elementos necesarios y demás acciones que consideremos, pero como podemos comprobar después de then que nos deja manejar la respuesta en caso de que sea correcta, también tenemos que controlar el posible error y otra cosa a tener mentalmente asumido, cualquier comunicación externa puede devolver errores y hay que manejarlos correctamente.

Por último y ahora sí, quiero fijarme mucho en la última línea que podemos leer como event.preventDefault() este método nos previene que JavaScript ejecute su método predeterminado, prevenir el comportamiento predeterminado te proporciona la posibilidad de definir tú como quieres que se ejecute, o sea en pocas palabras darle tu forma y manera evitando que JavaScript ejecute lo que tiene predeterminado hacer.