**¿Qué es Axios?**

Axios es una biblioteca de JavaScript, diseñada para comunicarse con las API's, recordemos que una API nos permite la comunicación entre aplicaciones, entonces si Axios nos facilita esa funcionalidad podríamos decir que Axios es la herramienta que actualmente más se utiliza para comunicar aplicaciones entre si, trabajando con los datos que nos puede proporcionar. 

Axios está publicada en npm y es fácil de instalar e incluso de utilizar, la instalación la podemos realizar con este comando.

```bash
npm i axios
```

npm i, que es la abreviatura de install, y luego el nombre de la dependencia, y si estás en un proyecto con un archivo package.json, lo guardará automáticamente en package.json. Podemos comprobar que está presente con:

```bash
npm view axios version
```

Tenemos un ejemplo en la página npm de axios, podemos investigarlo un poco y podemos ver que lo primero es importar el módulo.

Una vez importado el módulo ya lo tenemos en nuestro sistema preparado para comunicarse con cualquier API que necesitemos. Recordemos que Axios es un módulo independiente y no está en JavaScript ni en React por eso la necesidad de realizar la importación del módulo, para poder utilizar todos los métodos que Axios nos proporciona.

A continuación de la importación ya podemos realizar nuestra primera petición, y tal como podemos intuir axios.get() nos permite realizar una petición GET a la API determinada entre los paréntesis, a continuación evidentemente tenemos que manejar los datos que la API nos proporciona, y también un poquito más para abajo debemos manejar los posibles errores. 


**Ejemplo extraído de npm axios**

```javascript
import axios from 'axios';
//const axios = require('axios'); // legacy way

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

**¿Qué beneficios tiene?**

Axios nos permite obtener datos en tiempo real, por lo tanto, nuestras aplicaciones son muy dinámicas, es una herramienta que nos permite interceptar las solicitudes y las respuestas, por lo tanto, nos abre un gran abanico de posibilidades de trabajar con los datos.

Una parte importante es que nos permite separar la lógica de conectividad de nuestra aplicación con la lógica de la aplicación, lo cual nos permite o nos facilita la depuración, la estructura de nuestra base de código.

Tal como hemos dicho es una herramienta que nos facilita la conexión con múltiples y diferentes servicios, por lo tanto, es una herramienta que debe estar presente o por lo menos en nuestra mente cuando valoremos el comienzo de un proyecto.

**¿Cuándo lo usarías?**

Por lo que he leído y he probado **yo la utilizaría siempre,** tiene todo lo que nos puede hacer falta si no al principio en cualquier fase de nuestro proyecto incluso para realizar test o incluso para realizar pruebas, pero alguna referencia nos indican que en proyectos pequeños, cuando solo tengamos que realizar algunas solicitudes HTTP posiblemente sea exagerado utilizarlo. O en proyectos que necesiten librerías más especificas.

Por último me gustaría incluir, el script de importación y las peticiones que estamos realizando ya con axios a las API que devcamp nos ha facilitado, solo como referencia y creo que como ejemplo básico de uso de nuestra herramienta.

**El ejemplo está recortado para poder ver los pasos aplicados, importación de la biblioteca, creación de la función que realizara la petición y la gestión de la respuesta ya sea correcta o sea un error**

```javascript
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";


  checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", {
        withCredentials: true
      })
      .then(response => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("Error", error);
      });
  }
  ```
