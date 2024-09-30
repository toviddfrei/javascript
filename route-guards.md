# ¿Por qué usamos Route Guards?

Quisiera poneros en antecedentes antes de introducirme en esta pregunta que de verdad, y aunque no es algo que pueda tener relevancia para el resto, para mí ha sido como "ahora sí", ahora veo, oigo y escucho lo que React, y ya no solo React, sino Angular, y otros framework aunque siempre tenemos que tener presentes que React no es un framenwork al uso sino una biblioteca de JavaScript. Bueno que me voy, la importancia de llegar a este punto y profundizar en él tal como lo he hecho me ha hecho ver lo que podemos ser capaces de llegar a realizar. Vengo de un HTML 1 que era todo menos seguro, las peticiones se veían, ya podías llevarte las páginas privadas a casa que lo de proteger las rutas era una quimera. Entonces llego React, mejor llegaron estas personas que están empeñadas en que aprendamos React. Y lo tengo que agradecer y agradecerles, es expresaros todo lo que acabo de descubrir, aprender y asimilar.

Pongámonos un ejemplo, nos hemos comprado un coche y lo primero le ponemos una buena alarma, perfecto ¿no?, vale que pasa si esa alarma no lleva un sensor para subir las ventanillas en el caso de que cerremos y por casualidad se queda la ventanilla del copiloto bajada, buena alarma pero inútil en ese caso ¿no? ¿Lo trasladamos a código?

Tenemos una página web en la cual existe una parte pública y otra privada, hablamos solo de una página web, pongamos el index.html de cualquier página. Obviamente, la parte pública todo mundo es posible consumidor, pero la parte privada, nuestros secretos, deben tener alarma, no puede verlos cualquiera, no puede acceder el primero que pasa, ¿no?.

Lo vemos,

```html
<div id="content-public">
  <h1>All user is posible view content.</h1>
</div>

<div id="content-private" style="display: none;">
  <a href="private.html"> My secret </a>
</div>
```

Tenemos, dos div uno con información pública y otra información privada, lo hace privada la propiedad que le pasamos al div style="display: none;", que no lo mostrara siempre que display su valor sea none. Creo que hasta aquí estamos todos. Vale, si nos fijamos el enlace que está dentro del div nos lleva a la página prívate.html, en teoría si no lo muestra estaría protegida, pues error mayor, podéis probarlos crear dos archivos HTML y ofrecernos esta protección y tan simple escribe la ruta a la página prívate.html y veremos si te has dejado la ventanilla bajada. Espero se entienda, era inútil proteger de esta forma nuestras páginas privadas, al saltar de página se perdía toda seguridad, no podías seguir al usuario, en cada página el usuario era diferente, podíamos incluir bastantes elementos para intentarlo. Vamos a dedicarle un poco mas de tiempo al código, ya os aviso que seguiríamos con la ventanilla bajada.

```html
<div id="content-public">
  <h1>All user is posible view content.</h1>
  <h3>login "admin"</h3>
  <input type="text" id="user" placeholder="Input user name" />
  <button onclick="accesVerify()">Submit</button>
</div>
<div id="content-private" style="display: none;">
  <a href="private.html"> My secret </a>
</div>
```

```javascript
<script>
    function accesVerify() {
        const user = document.getElementById('user').value;
        const contentPrivate = document.getElementById('content-private');

        // Authorization simulation (replace with your real logic)
        if (user === 'admin') {
            contentPrivate.style.display = 'block';
        } else {
            alert('Access denied.');
        }
    }
</script>
```

Hemos mejorado sustancialmente el código, en la parte pública, hemos puesto un mínimo posible registro de usuario donde un script en JavaScript verifica el nombre del usuario cuando apretamos el botón y después si es true cambia el valor de display por block y en ese momento el usuario puede ver el enlace que contiene el div, podría chiclear en el enlace y le llevaría a nuestra página private.html. Fabuloso, pero lo dicho, también podría escribir la ruta en el navegador y llegaría a la página private.html igualmente. Lo que he intentado hacer ver y nunca mejor dicho que no se vea no quiere decir que no este, que tengamos la alarma puesta no quiere decir que la ventanilla esté subida.

Y después de ver el siglo pasado, nos venimos al presente, durante todo este curso de React hemos tenido, tenemos y deberemos tener presente que React es SPA, recordemos lo que quiere decir es una aplicación basada en una sola página Single Page Application, cargamos una sola página y vamos actualizando los componentes que el usuario utiliza. Eso genera que las rutas hacia nuevas páginas queden bajo el paraguas de React que por varios métodos protege esas rutas y si las hace privadas, para ello utilizamos una estrategia denominada Route Guards.

Para poder definir lo que es un guardián de rutas o Route Guards, creo que lo que va en primer lugar es explicar que es una ruta, hablamos de rutas cuando estamos hablando de las direcciones que nos llevan a las distintas páginas web de una aplicación, de un sitio web que estemos visitando o de cualquier clase de sitio web en el que estemos, antes en el primer ejemplo teníamos /home.html y /private.html, las rutas son algo así como la calle, el patio y la puerta de la página que queremos visitar.

Si tenemos eso claro, obviamente la pregunta sería ¿dejarías abierta la puerta de tu casa o la ventanilla del coche?, también la respuesta es evidente, no verdad. Pues **en definitiva, la estrategia que podemos utilizar para cerrar y proteger esas rutas es Route Guards o Guardián de rutas, nos permite delimitar el acceso a los usuarios que nosotros determinemos**.

Algunas características que debemos tener presente, es que un guardián de rutas no es específico de React, incluso tampoco de JavaScript, tal como hemos leído, es una estrategia y, por lo tanto, esa estrategia se implementa de muy distintas formas en muy distintos proyectos.

Quiero ir acabando, y creo que mejor que acabar con lo que me ha llevado a disfrutar de estos momentos es la implementación que estamos realizando para proteger nuestras rutas con React, hemos construido un React, hemos creado su página que recogerá o mejor dicho importará todo lo necesario para dar una visita lo más agradable posible al usuario, nunca debemos perder esa perspectiva. Pero nos ofrecerá la posibilidad de proteger la parte que queramos tener como privada o como acceso para usuarios, administradores, o usuarios con privilegios de algún otro tipo. Entonces, recopilando la información hasta el momento, quiero centrarme en el fichero app.js. Voy a extraer algunas líneas y explicarlas para que yo mismo lo entienda y perdón por la expresión "babee" como un niño.

```javascript
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
```

Una parte importante de lo que va a suceder a posterior son estas tres primeras líneas, evidentemente la primera nos pone en nuestro sitio React y en que se basa React en componentes. La segunda es la que veremos en profundidad y la tercera tenemos a nuestro amigo Axios, como recordatorio, nuestro facilitador de comunicaciones con las API's.

Vamos al tajo, vemos a simple vista como se repite Route, Router por todo lados ¿no?, pues ahí estamos el módulo react-router-dom, nos facilita una gran cantidad de métodos para organizar, controlar, gestionar nuestras rutas, recordemos siempre dentro del paraguas de React, no quiero profundizar mucho ahora, seguro que en breve react-router-dom formara parte de mi biblioteca, pero ahora quería mostrároslo para ver la herramienta que he sacado de mi caja de herramientas.

Utilizaremos métodos de este módulo para proporcionar a los usuarios verificados el uso de rutas privadas. ¿Cómo?, tan sencillo como autenticándolos, una vez autenticados, otro tema que debemos tener presente y que formara parte importante de nuestro aprendizaje, de hecho estamos ahora mismo con ello, bueno, lo dicho a poco a poco se digiere mejor. Consideremos que nuestros usuarios han sido verificados y tienen acceso a la parte privada de nuestra aplicación. Vamos a por otro trocito.

```javascript
<Switch>
  <Route exact path="/" component={Home} />
  <Route
    path="/auth"
    render={(props) => (
      <Auth
        {...props}
        handleSuccessfulLogin={this.handleSuccessfulLogin}
        handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
      />
    )}
  />
  <Route path="/about-me" component={About} />
  <Route path="/contact" component={Contact} />
  <Route path="/blog" component={Blog} />
  {this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null}
  <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
  <Route component={NoMatch} />
</Switch>
```

Si nos fijamos estamos utilizando Route path para tener disponibles las rutas públicas al home /, al /auth que es la de autenticación de usuarios, a /about-me, a /contact y a /blog, pero justo en la línea siguiente tenemos un cambio, le pedimos a React que antes de mostrar la siguiente ruta compruebe que el estado, otra parte importantísima del funcionamiento de React, le pedimos que compruebe que es usuario ha sido verificado, de no ser a sí que lance un null, recordemos como estamos realizando esta acción, estamos expresando el uso de un operador ternario, las primeras palabras que saltan a mi boca desde mi mente es un operador ternario es un condicional con dos opciones, la sintaxis la estamos viendo, y su función la podemos leer, si el usuario en verificado y lo verifico llamando a la función authorizedPages() lo muestro, si la verificación no ha sido true, lanzo el null. Espero que hasta aquí estemos, ya que no queda más que ver las líneas siguientes.

```javascript
authorizedPages() {
  return [
    <Route
    key="portfolio-manager"
    path="/portfolio-manager"
    component={PortfolioManager}
    />
  ];
}
```

El condicional, utilizando el operador ternario, nos llama a la función authorizedPage() que nos permite acceder al PortfolioManager que es nuestra parte privada, donde como administradores de la página estamos creando nuestro portfolio.