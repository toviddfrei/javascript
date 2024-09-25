**¿Qué es un event listener?**

Para contestar a esta pregunta creo que debo seccionar en varias partes la respuesta, lo primero un event listener es un escuchador de eventos, o también lo podría llamar sensor. Actúa tal cual esta pendiente de alguna acción y en respuesta ejecuta otra acción, supongamos que tenemos un sensor de movimiento en el acceso a nuestro zaguán de la vivienda. Entonces nuestro event listener sería el sensor que está esperando captar un movimiento y en respuesta enciende las luces que se le hayan asignado.

Si traducimos esto a nuestro código un event listener está escuchando cualquier acción que pueda ejecutar no solo el usuario haciendo clic en un link por ejemplo, sino cualquier respuesta que un método devuelva, en resumen un escuchador está pendiente de lo que le pidamos y realizara las acciones que le indiquemos.

Los escuchadores no son exclusivos de React, ni incluso de JavaScript, son herramientas que nos permiten interactuar con los usuarios, nos permiten verificar un formulario antes del envío, nos permiten oscurecer una imagen al señalarla con el puntero del ratón, hay tantas y tantas opciones que no acabaríamos.

Al decir que no son exclusivos de React ni incluso de JavaScript, tenemos que entender que se manejan de forma diferente según lo que estemos controlando y según el resultado que queramos devolver al activarse.

Si nos abstraemos un poco y pensamos ¿para qué podría necesitar un escuchador yo en mi aplicación?, pues no hay nada más que irse un par de párrafos arriba, escucha acciones que el usuario pudiera realizar y devuelve reacciones que nosotros como desarrolladores debemos controlar.

Son herramientas fundamentales para darle dinamismo a nuestras aplicaciones, para que un usuario tenga una experiencia agradable e incluso personalizable en nuestra aplicación, y para conocer por ejemplo que está haciendo el usuario en nuestra aplicación.

**¿Qué beneficios tiene? Pon ejemplos**

Yo diría que el mayor beneficio es poder comunicarnos sin estar presentes con nuestros usuarios, poder marcarles un camino, poder guiarlos, poder ofrecerles interacción con nuestra aplicación incluso a nivel personalizado, es como si tuviéramos la posibilidad de interactuar con todos los usuarios que están ejecutando nuestra aplicación ofreciéndoles lo que buscan.

En definitiva nos permite dar vida a nuestra aplicación, pero no hablo de una vida básica te respondo a una suma porque mi código dice que sume los dos valores que el usuario va a introducir, si no hablo de dar vida en el mayor sentido, le puedes preguntar, puedes darle opciones, puedes ejecutar distintos métodos, según las opciones que selecciones, puedes cambiar el aspecto de una página según la selección de colores que el usuario elija.

Creo que una frase define lo que es un event listener, no es un oyente, es un escuchador. Los que solo te oyen o asienten o discrepan los que te escuchan pueden llegar a dialogar. Para mí un event listener es el que me escucha y se le puede hacer dialogar con el usuario.

El ejemplo que he elegido evidentemente es con el que he estado trabajando en el curso, tenemos una serie de eventos que permiten escuchar el movimiento del ratón que hace el usuario, al escuchar que entra en una imagen la oscurece un porcentaje, eso a su vez nos permite mostrar una serie de elementos encima de esa imagen. Ha escuchado, ha activado el sensor y ha ejecutado las acciones.

Lo analizamos pasito a pasito, como buena práctica es bueno definir las funciones que manejen event listener comenzando con handle. En este caso tenemos dos eventos definidos entra mouse y sale mouse.

En el retorno del método tenemos lo que realizara el event listener una vez se active, si pensamos un poco los dos eventos a la vez no se podrán activar, se activará uno cuando el mouse entre dentro del elemento y se activara el otro cuando el mouse salga del elemento, aplicará un estilo cuando entre y aplicará otro o en este caso dejará de aplicar el estilo cuando el mouse salga del elemento. 

Un detalle importante es que en este caso lo que hace el event listener es modificar el estado que tiene el componente de React. Al introducir el ratón dentro de la imagen, se activa el event listener ejecutando las acciones que le hemos incluido, oscurece la imagen, muestra el logo y la descripción.

```javascript

  handleMouseEnter() {
    this.setState({ portfolioItemClass: "image-blur" });
  }

  handleMouseLeave() {
    this.setState({ portfolioItemClass: "" });
  }

  render() {
    const { id, description, thumb_image_url, logo_url } = this.props.item;
    return (
      <div
        className="portfolio-item-wrapper"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        <div
          className={
            "portfolio-img-background " + this.state.portfolioItemClass
          }
          style={{
            backgroundImage: "url(" + thumb_image_url + ")"
          }}
        />

        <div className="img-text-wrapper">
          <div className="logo-wrapper">
            <img src={logo_url} />
          </div>

          <div className="subtitle">{description}</div>
        </div>
      </div>
    );
  }
}
```

Y por último, y quiero mostrar otro ejemplo mucho más sencillo, también en javacript, pero recordando que no es específico. Supongamos que tenemos un botón en nuestra página web.


```javascript
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  alert('¡Clic button!');
});
```

Con este pequeño script que aunque parece diferente en definitiva es lo mismo un event listener, en este caso el método addEventListener será nuestro sensor que nos lance una ventana cada vez que hagamos clic en el botón.  