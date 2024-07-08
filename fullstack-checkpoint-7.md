# <a id="top">FullStack checkpoint 7</a>

- [**¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?**](#diferencia)
- [**¿Cuáles son algunos tipos de datos JS?**](#tiposdatos)
- [**¿Cuáles son las tres funciones de String en JS?**](#tresfunciones)
- [**¿Qué es un condicional?**](#condicional)
- [**¿Qué es un operador ternario?**](#ternario)
- [**¿Cuál es la diferencia entre una declaración de función y una expresión de función?**](#declarafuncion)
- [**¿Qué es la palabra clave "this" en JS?**](#this)

# <a id="diferencia">¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?</a>
[up](#top)

> **JavaScript es el único lenguaje de programación que un navegador web puede entender**

Esto parece un titular, pero es la realidad, entre el universo de lenguajes de programación que se han extendido por el planeta, el único lenguaje que se hace entender por un navegador web, sea el que sea es Javascript, te permite inter operar directamente con la página web que estés visitando.

Un ejemplo sencillo, vamos a decirnos hola en Javascript en unos pasos sin necesidad de servidores detrás que empaqueten el código y se lo hagan digerible o interpretable al navegador de turno. No, vamos a trabajar directamente con el navegador, eso mola ¿no?, clic y a disfrutar. Pues veámoslo

1. Abre el navegador predeterminado

2. En el menú del navegador localiza la opción "Más herramientas" y ahora "Herramientas para desarrolladores", clic, y nos muestra la pestaña de consola.


<div>
<img src="img\nav-main-moretools.jpg" width="500"\>
<img src="img\nav-main-devtools.jpg" width="500"\>
</div>

3. Localizamos la pestaña "consola" y a trabajar, ya tenemos nuestra shell donde podemos expresarnos en javascript directamente.

<div>
<img src="img\nav-devtools-shell.jpg" width="900"\>
</div>

4. Escribimos alert("Hola Javascript");

<div>
<img src="img\nav-command-alert.jpg" width="900"\>
</div>

5. ¡Nos lanza una ventana el propio navegador, lo que demuestra que podemos considerar nuestro IDE al navegador de turno, solo nos queda, disfrutar!!!

Es evidente que si planeamos ser en un futuro desarrolladores, siendo el único lenguaje que habla con navegadores de tú a tú, hay que no solo conocerlo, sino aprenderlo y cuanto más profundo cale en nuestras mentes, muchos más resultados obtendremos. Aplicaciones como Gmail, Twitter, Facebook están desarrolladas si no toda en gran parte en Javascript, son aplicaciones desarrolladas desde un navegador otorgándoles funcionalidades a través de Javascript y sus objetos, no nos olvidemos que Javascript es otro de los lenguajes enfocados a programación POO.

A lo largo de los años, Javascript se ha incrementado el número y la diversidad de las bibliotecas de las que Javascript dispone, siendo un lenguaje muy valorado creando app para móviles, su conectividad con la API del elemento, le permite utilizar sus recursos directamente, cámara, micro...

Otra característica de Javascript y acabamos, es su utilidad a la hora de automatizar tareas a diario, clic repetitivo en alguna página, rellenar algún formulario, realmente podemos preparar script que nos faciliten la vida diaria de verdad.

# <a id="tiposdatos">¿Cuáles son algunos tipos de datos JS?</a>
[up](#top)

Primero a modo recordatorio, repasemos que son los tipos de datos, bueno pues como hemos visto en los lenguajes de programación que estamos aprendiendo, utilizando, estropeando, revisando, siempre contamos con el mismo elemento, el dato, el dato en si no es más que un valor, que pasamos a una variable, creamos una lista con valores, declaramos una matriz con elementos, o sea que guardamos en un espacio de memoria de nuestro hardware. 

Abstrayéndonos mucho, imaginémonos una celda de una memoria donde hemos colocado una serie unos y ceros, eso en lo más bajo sería un dato, pero nosotros manejamos datos de diversos tipos. A nivel humano, utilizamos números para realizar operaciones aritméticas, utilizamos letras para formar expresiones. En definitiva, según lo que tengamos que realizar, utilizamos un tipo de dato. Pues en ese sentido el tipo de datos que utiliza un lenguaje de programación es igual. Utiliza números para realizar operaciones aritméticas o utiliza cadenas para formar expresiones. 

Javascript nos proporciona una serie muy interesante de tipos de datos, nos podemos encontrar aparte de los típicos de otros lenguajes, números, cadenas, boléanos, otros que nos pueden llegar a sorprender, vamos a verlos uno a uno realizando ejemplos en cada tipo, creo que la ocasión merece la pena, ya que si nos seguimos abstrayendo y esto sería casi llegar al cielo, si en un futuro queremos ser desarrolladores, contando que es el único lenguaje que se entiende con los navegadores, que decir de los datos, van a pasar ya no a diario por nuestros dedos si no casi por cada minuto de nuestro tiempo estaremos tratando con datos en javascript.

Entonces, por establecer los tipos definitivamente, son estos:

- **number**
- **string**
- **bolean**
- **object**
- **null**
- **undefined**


## Comenzamos, por ejemplo, con los mencionados, los números:

- **number**, evidente son los números caracteres del 0 al 9, con los que podemos realizar múltiples operaciones aritméticas.
    - como ejemplo declaremos una variable contadora, var count = 0; esta sería la expresión de inicializar la variable count con valor 0.
    - si nos damos cuenta en ningún momento le decimos al intérprete que tipo de dato es, automáticamente javascript determina y fuerza el tipo de dato, tal como Python o Ruby que no son lenguajes estáticos, donde ahí que expresar el tipo de dato que guardas en una variable, matriz, lista o lo que sea, como los lenguajes denominados de tipo estático en los cuales podríamos ubicar c, c++, java, al contrario que los javascript, python, ruby que son de tipo dinámico, determinando y forzando el tipo de dato con el que trabajamos.

Un ejemplo básico, pero que dice mucho de lo que hay detrás de javascript es el siguiente script, unas operaciones básicas con los operadores de los que disponemos y nos lanza resultados con números negativos, números decimales, él solo sin decirle nada, designa el tipo y fuerza el tipo ofreciéndonos una comodidad que no tenemos en otros lenguajes.

He utilizado algunas herramientas de las cuales no hemos discutido todavía, pero que en breve estaremos en ello, las funciones es una herramienta fundamental, pequeñas cajitas que hacen lo que tú les pidas, me parece muy interesante el asunto, en este caso he utilizado mi cajita para recoger todas las operaciones del ejemplo y llamarla, quedémonos con este término, y llamarla justo debajo, también por favor quedémonos con este otro término, pasándole los parámetros que necesita. En cuanto a funciones ya estamos, pasemos al ejemplo y disfrutemos de la sencillez con la que maneja el tipo de dato number javascript.


```python
function Opera(a,b) {
    console.log(a + b);
    console.log(a - b);
    console.log(a / b);
    console.log(a * b);
    console.log(a % b);
    console.log(a ** b);
};

Opera(5,6);
```

## Seguimos con las cadenas:

- **string**, las cadenas son el tipo de dato con el que se forman palabras y frases, vamos son los caracteres del abecedario, más símbolos, números, etc. Acabo de decir números, sí, ello me lleva a comentar la forma de expresar al intérprete que estamos pasándole una cadena, siempre será entre comillas, ya sean dobles o sencillas, la diferencia la veremos después y es más por formateo de la salida, pero ahora mismo no es determinante en la discusión, recapitulemos, las cadenas ya sea un solo carácter "a", una palabra "cadena", o un número '5', siempre estarán entre comillas.

Podemos ver algunos ejemplos muy básicos, pasémosle a una variable un nombre, por ejemplo el nuestro.


```python
var myname = 'Daniel';
```

¿Sencillo no?, sigamos, el objetivo no es otro que hacernos amigos de las cadenas, tal como hemos comentado sobre los números, si nuestro futuro es desarrollar, los números y las cadenas son compañeros de viaje, por lo tanto, "vamos a llevarnos bien".

En otras publicaciones, os comenté que me gusta dejar migas de pan en el código, o sea me gusta ir viendo los resultados que arrojan mis expresiones, en Python utilizo el print, en JavaScript utilizo console.log, pero hay un detalle que es importante conocer aunque no profundicemos de momento, en JavaScript podemos pasar funciones como parámetros, suena raro no, vale, pues si recordamos con lo que nos teníamos que quedar un par de párrafos antes, pues llegando al centro del asunto, podemos llamar a una función directamente desde otra, esto nos provee de una herramienta superpotente, pero delicada, que ahora no, pero en breve debe explotar en nuestras mentes, encadenar funciones, es como clonarse a sí mismo, puedo desarrollar varias tareas a la vez. Seguiremos con ello en muy poco tiempo. Volvamos a las sencillas cadenas.

Pues voy a crear mi guita de pan, para ver el resultado.


```python
var myname = 'Daniel';
console.log(myname);
```

    Daniel
    

Y ya tenemos nuestro nombre publicado, bueno expresémonos también técnicamente, nuestro script ha retornado a la salida standard, nuestro nombre. Y aún hay muchísimo más.


Antes de pasar a más sobre cadenas y aprovechando que ya tenemos dos tipos de datos, también debemos pensar a la inversa, abra momentos que necesitemos saber con qué tipo de datos estamos trabajando, o que tipo de dato guarda esta variable, pues tenemos una función que nos retorna el tipo de dato, por ejemplo, queremos condicionar el acceso de un usuario a un sitio web, según la edad que le solicitamos que inserte. Pues bien, en este caso podríamos encontrarnos que nuestro usuario ha utilizado una cadena para insertar su edad, puedes visionar lo que el intérprete puede retornar si nuestro condicional está esperando un número. Probémoslo, será divertido **averiguar el tipo de dato con el que trabajamos**.


```python
var ageuser = 'Veinte';

if (ageuser > 16 ){
    console.log('Please, followme');
} else {
    console.log('No se que ha pasado');
}
```

    No se que ha pasado
    

Si vemos el resultado y jugamos con las edades nos daremos cuenta de que nuestro condicional, si la variable ageuser es mayor de 16 es verdadero, nuestro condicional le da paso a su bloque de código como el condicional no obtiene el dato que esperaba retorna false siempre, pasando al siguiente que recoge el resultado false y le importa poco el dato que sea o que no, retorna el "No sé qué ha pasado". Pongámonos que no sabemos lo que contiene ageuser, desconocemos el tipo de dato que contiene. Vamos a averiguarlo. Tomar los comentarios acerca de condicional, nuestro condicional hace esto, pasa aquello como mi guita de pan, en breve nos introduciremos en el mundo de los condicionales en programación, porque condiciones se estipulan desde el primer día de vida, yo diría incluso antes. Bueno al tema, nuestro objetivo es centrarnos en este momento en las cadenas.

Entonces por recapitular un poco, tenemos una variable que guarda un dato, vemos que es una cadena, pero unas líneas más abajo expresamos una condición que espera un número, podemos deducir que el resultado esperado no será el resultado obtenido. Podemos resolver este problema, averiguando de ante mano con qué datos estamos trabajando, es como sentarse en tu mesa de trabajo diariamente, miras si está todo en su sitio antes de comenzar, debemos de ser precavidos y asegurarnos el resultado esperado, entonces no queda otra que averiguar el tipo de dato. Para ello utilizamos la función typeof() que provee el mismo JavaScript. Ponemos un ejemplo de como asegurarnos de que nuestro condicional reciba el valor esperado para obtener el resultado deseado.


```python
var ageuser = '20';
//console.log(typeof(ageuser));

if (typeof(ageuser) === 'number'){
    console.log('Continue...');
    
    if (ageuser > 16 ){
        console.log('Please, followme');
    } else {
        console.log('No cumples los requisitos');
    }
} else {
    console.log('Necesitamos un número');
}
```

    Necesitamos un número
    

Creo que ahora se percibe bien, necesitamos un número, pero todavía no se lo estamos pasando, veamos ahora.


```python
var ageuser = 20;
console.log(typeof(ageuser));

if (typeof(ageuser) === 'number'){
    console.log('Continue...');
    
    if (ageuser > 16 ){
        console.log('Please, followme');
    } else {
        console.log('No cumples los requisitos');
    }
} else {
    console.log('Necesitamos un número');
}
```

    number
    Continue...
    Please, followme
    

### Ahora sí que seguimos con las cadenas


Bueno, en realidad, sí y no, como complemento al saber como averiguar el tipo de datos con el que trabajamos, es obvio que debemos conocer como realizar un cambio en el tipo de dato. Sí, podemos realizar cambios en el tipo de datos con el que trabajamos, esto nos asegura lo mismo que estábamos haciendo antes, cuando queríamos averiguar que tipo de datos teníamos, asegurarnos con el material que trabajamos es facilitarnos las tareas futuras. Por lo tanto, tenemos un montón de opciones para realizar la "conversión de tipos de datos", encasillamiento, que es modificar el tipo de datos que disponemos.

Tenemos conversiones automáticas que realiza el propio lenguaje, dándonos una flexibilidad, qué ojo tenemos que vigilar, lo mismo no son los resultados que deseamos, y también tenemos la posibilidad de forzar manualmente la conversión del tipo de dato. Veamos la conversión automática.


```python
var example = '100' + 1;
console.log(example);
```

    1001
    

En este caso estamos viendo que una cadena '100' y un número 1, la conversión a tipo de dato ha sido de número 1 a cadena 1, concatenando los dos tipos de datos de la expresión cadena y número, JavaScript automáticamente ha convertido el número a cadena, claro las cadenas no se pueden sumar, pero si se pueden concatenar, debemos tener cuidado con este tipo de conversión los resultados pueden sorprendernos.


```python
var example = '100' - 1;
console.log(example);
```  

Creo que este ejemplo nos ilumina, solo cambiando el operador ha cambiado de cadena a número y ha realizado la operación aritmética, estas conversiones automáticas nos demuestran que JavaScript nos quiere facilitar este tipo de asuntos, pero que nosotros somos quien en definitiva sabemos los resultados que esperamos. 

Para tener un mayor control de estas situaciones, también podemos realizar las conversiones de modo manual, donde ya no existe la posibilidad de tener un resultado aleatorio, buscamos controlar el tipo de dato y convertirlo al tipo de dato que nos interesa manejar. Supongamos una API que devuelve números como cadenas, los datos que nos llegan en bloque muchas veces debemos limpiarlos y extraer lo que necesitamos y del tipo que necesitamos, para lo cual tenemos varias herramientas,


```python
var convertstring = String(2563);
console.log(typeof(convertstring));
```

    string
    


```python
var convertstring = 2563;
console.log(typeof(convertstring));
```

    number
    
Lo que vemos es obvio, no, utilizando la función String, provocamos que el número se convierta en cadena y tenemos nuestro tipo de datos ya preparado. Esto es una conversión manual, las conversiones manuales más utilizadas son de string, de number y booleanos, os acordáis de lo que comentamos de booleanos, son valores verdadero o falso, pues ahora seguiremos un poco con ellos. 

Tenemos otra función que nos permite llegar a este mismo resultado, cambiamos un poco la sintaxis, pero obtenemos lo mismo, 


```python
var convertstring = 2563;
var new_convertstring = convertstring.toString();

console.log(typeof(convertstring));
console.log(typeof(new_convertstring));
```

    number
    string
    

Como vemos obtenemos el mismo resultado, convertimos un número a cadena con ambas funciones, podemos utilizar cualquiera de las dos, hay una diferencia, la función String devuelve el string y la función toString, devuelve un objeto, otro tipo de dato con un valor de tipo cadena.


```python
var convertstring = 2563;
var new_convertstring = convertstring.toString(); //modificamos el dato y lo guardamos

console.log(toString(convertstring));
console.log();

// Apreciamos que la conversión del dato es temporal
// El dato que guardamos en la variable original no se modifica
console.log(typeof(convertstring));
console.log(String(convertstring)); // Expresa su salida como string
console.log(typeof(convertstring));

console.log();

//La forma de modificar el dato de la variable original
//Modificar el dato y guardarlo en otra variable (linea 4)
console.log(typeof(new_convertstring));
console.log(convertstring.toString());
console.log(typeof(new_convertstring));
```

    [object Undefined]
    
    number
    2563
    number
    
    string
    2563
    string
    

Hablemos un poquito de parámetros, el ejemplo se presta a ello, como acabamos de ver, tenemos dos funciones que realizan el mismo trabajo obteniendo el mismo resultado, una de las preguntas que nos hacemos de inmediato, ¿cuál utilizar?, depende de nosotros mismos, comodidad, etc., lo que nos tiene que quedar claro es que algunas funciones necesitas que les pasemos parámetros, en definitiva que les pasemos datos para trabajar con ellos, en este caso vemos que toString(), si le pasamos parámetros, en este caso la variable que guarda el número se obtiene un objeto indefinido que no es lo que deseamos, pero, sin embargo, si le pasamos el mismo parámetro a String(), obtenemos el resultado esperado. Las funciones trabajan con o sin parámetros según se halla especificado en su creación y composición, cuando creemos las nuestras, esta herramienta nos ampliará la potencia que pueden llegar a tener las funciones. Nada era otra mi guita de pan para lo que viene. Creo que la conversión de número a cadena ha quedado clara, pasemos a convertir cadenas en números.

En este caso no tenemos la función toString(), hay otras por supuesto, pero descartemos de base el mismo funcionamiento. Para convertir string a number utilizaremos otras opciones como, parsetInt(), o parsetFloat(), según proceda para números enteros o flotantes(decimales). Lo mejor verlo con otro ejemplo.


```python
var convertnumber = '4567';
console.log(typeof(convertnumber));
console.log(parseInt(convertnumber));
console.log(typeof(convertnumber));

var new_convertnumber = parseInt(convertnumber);
console.log(typeof(new_convertnumber));
```

Espero que sea obvio lo que estamos viendo, parsetInt() temporalmente modifica el tipo de dato de string a number, si quisiéramos guardarlo para trabajar en un futuro con ese mismo dato tenemos que guardarlo en una variable nueva, la variable original no es modificada, el dato guardado en la memoria de nuestro computador seguirá siendo string. Hago mucho hincapié en esto porque debemos saber perfectamente con qué tipo de datos trabajamos, pero también es importante saber que estamos depositando en nuestra memoria o que dato es efímero y desaparecerá si no lo guardamos.

Bueno, en cuanto a parsetInt(), hemos visto que trabaja con números enteros, si necesitáramos trabajar con flotantes, tenemos parsetFloat(), vemos un ejemplo mezclando ambos tipos.

```python
var convertnumber = '4567';
var convertnumberfloat = '4567.4567';

console.log(parseInt(convertnumber));
console.log(parseInt(convertnumberfloat));

console.log(parseFloat(convertnumber));
console.log(parseFloat(convertnumberfloat));

```

Fijémonos en la línea 7, a parsetInt() que maneja números enteros le pasamos un flotante, solo obtenemos eso el número entero del número flotante. Si vamos a la línea 10, le pasamos a parsetFloat() el tipo correcto que maneja y nos devuelve lo esperado, pongamos el caso que nos llega un bloque de datos con mediciones de un termómetro, tenemos si o sí que trabajar con números flotantes, no podríamos convertir datos de string que contenga un número flotante utilizando parsetInt(), el dato final sería modificado, que no es el resultado que se desea.

Quiero terminar con estos ejemplos, mostrando algunos mucho más explícitos, podemos convertir manualmente dando por entendido que queremos un dato explícito, con la función number por ejemplo. Consideremos una suma que se tiene que realizar con dos valores, el origen del dato lo conocemos, sabemos el resultado que queremos obtener sumar dos valores. Veamos:


```python
// Ejemplo 1

var datanumberA = '10';
var datanumberB = 33;

var totalAmoreB = datanumberA + datanumberB;
console.log(totalAmoreB);
```

    1033
    
UFF, si del resultado dependiera nuestra facturación diaria, tendríamos un problema, ¿verdad?, vamos a mejorarlo.


```python
// Ejemplo 2

var datanumberA = '10';
var datanumberB = 33;


var totalAmoreB = Number(datanumberA) + Number(datanumberB);
console.log(totalAmoreB);
```

Así empezaríamos a dar veracidad a nuestras operaciones aritméticas, no nos fiamos del tipo de valor que tiene la variable y forzamos el tipo de dato que queremos utilizar, pero pueden surgir algunas excepciones, por ejemplo:


```python
// Ejemplo 3

var datanumberA = 'gg10';
var datanumberB = 33;


var totalAmoreB = Number(datanumberA) + Number(datanumberB);
console.log(totalAmoreB);
```

Esta situación se podría dar, desconocemos el tipo de dato y nos ha llegado un string que aunque contiene un número va precedido de caracteres de texto, por lo tanto, la función Number() que es superinteligente nos retorna un claro NaN no es un tipo de dato convertible a número y discúteselo si puedes.

Las conversiones manuales de tipo más utilizadas son como hemos dicho string, number y boolean, el tipo de datos booleanos son verdadero y falso, los utilizamos constantemente por ejemplo en los condicionales, el tipo de dato que nos retorna es booleano, en muchos casos las comunicaciones, los resultados, las ejecuciones de una función en concreto solo devuelven booleanos, el tipo de dato booleano, que son True o False.

## Booleanos y su conversión de tipo

Como hemos dicho un valor booleano es verdadero y otro el falso, en la condicional por ejemplo siempre se busca que el resultado sea verdadero, cuando arroja un resultado falso la condición no está cumplida, pero como podemos convertir un valor booleano en un número, tendremos ocasiones que true o false no sea el resultado esperado, sino que se espera un resultado tipo number, por ello debemos de poder convertir un resultado booleano true a 0 y un resultado false a 1, con ello cualquier API que no reconozca el tipo string, tendrá la misma capacidad de responder sin error cambiando el tipo de dato de string a number arrojado como valor booleano, no sé si esto ha quedado muy claro, pero es fundamental entenderlo, ya que de ello depende nuestra comunicación con multitud de resultados, el verdadero o false es un resultado que manejaremos constantemente. Pongamos unos ejemplos para matizar mucho más este tema.



```python
var returnTrue = 'True';
var returnFalse = 'False';

if (returnTrue === 'False'){
    console.log('Return is true');
    console.log(Number(true));
} else {
    console.log('Return is false');
    console.log(Number(false));
}
```

Leamos el script, tenemos dos variables cada una con un valor string, en un True y el otro False, nuestro condicional dice si la variable return True es con triple igualdad, quedaros con esto por favor, con triple igualdad, JavaScript nos ofrece la triple igualdad, no solo el valor debe ser igual sino el tipo de dato también. Seguimos nuestro condicional dice si return True es igual al texto 'False' el condicional sería verdadero, por lo tanto, entraría en el bloque de código lanzando por consola 'Return is true' y el valor booleano number que le corresponde y JavaScript nos lo devuelve sería 1, en este caso no es verdadero y sigue arrojando lo que el else contiene retorna 'Return is false' y el valor numérico correspondiente 0. Ahora consideremos que recogemos el retorno de una función que pasa directamente a nuestro condicional, pero espera recibir un valor booleano number.


```python
var returnTrue = true;
var returnFalse = false;

if (returnTrue === true){
    console.log('Return is true');
    console.log(Number(true));
} else {
    console.log('Return is false');
    console.log(Number(false));
}
```

Con este ejemplo quiero mostrar el tipo de dato booleano, no es una cadena, no es un número, es un tipo de dato, true, false, 0 o 1, es un tipo de dato manejable, utilizable, que podemos retornar. Esta diferencia debe ser entendida obligatoriamente, string y number y ahora bolean, son 3 tipos de datos distintos, cada uno con sus formas y maneras. Bolean es un tipo de mucho uso, ya que si nos damos cuenta manejamos 0 y 1, en base 2 o lenguaje binario, el lenguaje más bajo que maneja un computador, por lo tanto, si nos abstraemos podemos ver como los retornos con tipo de datos booleanos ya se expresan en lenguaje de máquina 1 true, 0 false.

## Tipo de dato Object

>JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,​ basado en prototipos, imperativo, débilmente tipado y dinámico.

He querido comenzar con esta definición para recalcar la importancia de los objetos en JS, en los objetos guardamos pares de clave:valor, un identificador y un valor del identificador, con el cual podemos actuar, modificar, añadir, como una cajita donde guardar correctamente ordenados todos nuestros datos y poder interactuar con ellos a nuestro parecer. Es tanta la importancia de este tema que al basar nuestro lenguaje en este tipo de estructura es obligatorio abstraerse y pensar como si estuviéramos dentro de un objeto, vemos el ejemplo:


```python
var iomy = { 'myname': 'Daniel'}
console.log(typeof(iomy));
```

    object
    

Recordamos como averiguar el tipo de dato con el que trabajamos, pues este es nuestro primer tipo de dato object. Vamos a seguir que ahora comienza lo divertido, tenemos un primer par clave:valor, tenemos que todo va encerrado entre llaves, y detalle muy importante, no es necesario cerrar la expresión con punto y coma. Pues si ya tenemos nuestro objeto, ¿nos metemos dentro?


```python
var iomy = {
    myname: 'Daniel',
    grettingonsite: 'Hi this into',
    myage: 52,
    myanatomy: { 
        head: 1,
        finger: 20,
        hand: 2,
    }
}
```

Parece intimidante, pero solo hemos desplegado la sintaxis, si tenemos solo un par clave:valor, con una línea sobra, si nuestro objeto crece que es lo lógico debemos expresarlo línea a línea incluyendo una coma de separación entre cada par clave:valor, ¿bien con la sintaxis?, practiquemos es la forma de que se te pegue en los dedos, seguimos, tenemos el mismo tipo de dato object, pero con muchos más pares clave:valor, e incluso podemos ver que hay otro object dentro, la verdad se empieza a estar apretado aquí dentro, voy a ir sacando cosillas, lo tengo bien organizado, ¿no? Voy a saludar y a presentarme desde aquí dentro.


```python
var iomy = {
    myname: 'Daniel',
    grettingonsite: 'Hi this into',
    myage: 52,
    myanatomy : { 
        head: 1,
        finger: 20,
        hand: 2,
    }
}
console.log(iomy.grettingonsite, iomy.myname,'mi edad es:', iomy.myage);
```

Vemos como podemos mostrar lo que tenemos dentro del objeto, la notación por puntos nos facilita poder llegar hasta el fondo, obtener el dato que buscamos. Pero y si queremos obtener datos del objeto anidado dentro. Pues seguimos la pauta, buscamos su clave y obtenemos su valor bajando a por él. Voy a sacar las manos para saludar.


```python
var iomy = {
    myname: 'Daniel',
    grettingonsite: 'Hi this into',
    myage: 52,
    myanatomy : { 
        head: 1,
        finger: 20,
        hand: 2,
    }
}

console.log(iomy.grettingonsite, iomy.myname,'mi edad es:', iomy.myage);
console.log('¿Cuantas manos tengo?', iomy.myanatomy.hand);
console.log('¿Cuantas dedos tengo?', iomy.myanatomy.finger);
console.log('¿Cuantas cabezas tengo?', iomy.myanatomy.head);
```

Bueno, bueno, esta última pregunta tiene trampa, según a la hora del día.

Creo que ha quedado claro como construir un objeto y como manipular el interior del objeto, me voy a salir, ya que vamos a incluir nuevos clave:valor y a modificar los existentes, un detalle importante de JavaScript es que permite modificar los objetos en tiempo de ejecución, quiere decir mientras la aplicación está en funcionamiento nos permite alterar pares clave:valor y guardar los datos nuevos. Vamos a comprobar esta situación.


```python
var iomy = {
    myname: 'Daniel',
    grettingonsite: 'Hi this into',
    myage: 52,
    myanatomy : { 
        head: 1,
        finger: 20,
        hand: 2,
    }
}

console.log(iomy.grettingonsite, iomy.myname,'mi edad es:', iomy.myage);
iomy.myage = 53;
console.log(iomy.grettingonsite, iomy.myname,'mi edad es:', iomy.myage);
console.log(iomy.myage);
```

En este caso hemos modificado mi edad, el valor de la clave myage ha sido modificado definitivamente, el objeto ahora guardará otro dato. Por desgracia, un año más viejo. Vemos como añadir otro par valor completo, añadimos algo más de anatomía.


```python
var iomy = {
    myname: 'Daniel',
    grettingonsite: 'Hi this into',
    myage: 52,
    myanatomy : { 
        head: 1,
        finger: 20,
        hand: 2,
    }
}
console.log(iomy.myanatomy);
iomy.myanatomy.eye=2;
console.log(iomy.myanatomy);
```

Es evidente lo que ha pasado, no solo hemos llegado a obtener el valor que deseamos, podemos incluir un nuevo par clave:valor en un objeto anidado dentro de otro, esta herramienta es muy potente y su uso es cotidiano, JavaScript se fundamenta en objetos, por lo tanto, es evidente que controlar los objetos en JavaScript es subir un nivel de comprensión del lenguaje.

Poco hemos hablado de la sintaxis de la notación por puntos, consideremos que cada punto es un puente que nos permite unir, desde el principio del objeto, todas su clave:valor que tiene dentro, incluso nuevos objetos anidados, nos introduce en sus valores.
El ejemplo es sencillo, iomy es la variable, la uno a la clave:valor de myname: porque quiero ver el valor guardado, entonces iomy.myname han quedado unidas, puedo llegar al valor deseado.

## Null && Undefined

Ahora y por último tenemos null y undefined, los vamos a ver juntos para ver fundamentalmente que no son iguales, son dos tipos de datos totalmente distintos con afectación directa a nuestra memoria, null es un valor definido, pero inexistente, undefined es un valor no definido que en un futuro será definido.

El ejemplo más sencillo que nos podemos encontrar es ir al súper, vemos una estantería etiquetada, pero sin productos, eso sería null, definido, pero sin valor, vamos al fondo de la tienda y encontramos una estantería vacía sin etiqueta, eso sería undefined. Está declarada, la estantería está físicamente ahí, pero no está iniciada con ningún valor. Espero que el ejemplo os traiga una imagen visual, veamos ahora un ejemplo.


```python
var dataundefined
var datanull = null;

console.log(dataundefined);
console.log(typeof(dataundefined));
console.log(datanull);
```

La diferencia de undefined a null es evidente, undefined no tiene valor definido, null si tiene un valor definido intencionadamente, pero está vacío, un ejemplo visual puede ser el valor esperado en la casilla de un formulario que dejamos vacío, en esa casilla se esperaba un valor, el que fuera al no introducirlo queda vacío se declara como null, un tipo de dato undefined ni siquiera está definido, por lo tanto, no lo puedes esperar.

# <a id="tresfunciones">¿Cuáles son las tres funciones de String en JS?</a>
[up](#top)

La verdad que esta pregunta me ha creado bastantes dudas, ¿solo tres funciones de string en js?, comencé a lo de siempre, extraer conceptos, lo primero averiguar, recordar, traer al frente que es una función, lo segundo tener claro con el tipo de dato que trabajamos string y lo tercero y que me crea dudas ¿solo tres?

Bueno en definitiva, me puse a pensar y decidí seguir investigando, la primera fuente de información por supuesto las guías, las revisé por si se me hubiera escapado algún concepto, que todavía no descarto, pero no encontré referencia alguna a ¿solo tres?, pregunta que se repetía en la cabeza, realmente estaba ofuscado en esto y no veía el tema con perspectiva, vale, lo intento desde otro ángulo. Nos olvidamos del tipo de datos, vamos al meollo del asunto a las funciones. 

JavaScript nos provee por sí solo desde la librería general de un montón de funciones para extraer, modificar, añadir cadenas o moldearlas a nuestro antojo, convertir toda la cadena en minúsculas, tenemos toLowerCase(), o en mayúsculas toUpperCase(), tenemos también algo muy útil replace(), a la que pasándole dos parámetros el primero lo que queremos remplazar y el segundo lo que queremos insertar, es capaz de modificar la cadena. Pero se refiere a estas básicas funciones, creo que no, por eso continúe investigando a qué concepto se podría referir "tres funciones", he caído que el temario estaba seccionado en tres bloques por lo denso que es este tema, me he releído los tres bloques de arriba, abajo varias veces y he llegado a la conclusión que es la respuesta en sí misma, **según el uso que deseamos hacer de las funciones** podemos clasificarlas en tres bloques:

- **Buscar valores, encontrar un índice dentro de la cadena**
- **Comparar patrones, encontrar expresiones completas dentro de la cadena**
- **Modificar la cadena, obtener un valor diferente a la entrada de la función**


## Buscar valores, encontrar un índice dentro de la cadena

```python
%%script Node

// Funciones para buscar valores, encontrar indices
//slide() y sus tres formas de funcionar
//charAt(), includes(), startsWith(), endsWtich(), indexOf(), lastIndexOf()

var stringtomodify = '¿Cuáles son las tres funciones de String en JS?';

// slice() se merece un poco de atención

var stringtext0 = stringtomodify.slice(9);
console.log(stringtext0);
var stringtext0 = stringtomodify.slice(9,28);
console.log(stringtext0);
var stringtext0 = stringtomodify.slice(-19);
console.log(stringtext0);

// Seguimios buscando valores e indices con otras herramientas

var stringtext1 = stringtomodify.charAt(3);
console.log(stringtext1);

var stringtext2 = stringtomodify.includes('á');
console.log(stringtext2);

var stringtext3 = stringtomodify.startsWith('¿');
console.log(stringtext3);

var stringtext4 = stringtomodify.endsWith('S?');
console.log(stringtext4);

var stringtext5 = stringtomodify.indexOf('á');
console.log(stringtext5);

var stringtext6 = stringtomodify.lastIndexOf('S');
console.log(stringtext6);

```

En el ejemplo anterior he mostrado a slice() como algo excepcional que lo es, nos permite realizar la búsqueda desde una posición en concreto, parametrizando las posiciones de inicio y fin, o incluso realizando búsquedas a la inversa de izquierda a derecha, una navaja suiza completa. Claro está, si aún no tenemos bastantes herramientas, ahí van unas cuantas más.

Como vemos hay multitud de opciones y posibilidades, podemos localizar específicamente lo que deseemos, incluso podemos encontrar palabras, averiguar cuál es la posición de un carácter en concreto, la primera vez que se encuentra, o la última vez que se encuentra en la cadena. Hay funciones que nos retornan diferentes resultados, incluso hay funciones que nos devuelve valores de tipo bolean, en definitiva un buen cargamento de herramientas que practicando se quedaran adheridas a los dedos en breve.

## Comparar patrones, encontrar expresiones completas dentro de la cadena

Para buscar patrones dentro de una cadena, nos podemos ayudar de una herramienta que existe en casi todos los lenguajes de programación, son las expresiones regulares, estas expresiones realizan una comparación entre el valor pasado y la expresión regular, es un sistema de coincidencia de patrones. Veamos los ejemplos.


```python
const stringtomodify = '¿Cuáles son las tres funciones de String en JS?';

console.log(stringtomodify.match(/^¿.*(tres).*(funciones).*(String)/));

const newstring = stringtomodify.match(/^¿.*(tres).*(funciones).*(String)/);
console.log(newstring);
```
```
[
  '¿Cuáles son las tres funciones de String',
  'tres',
  'funciones',
  'String',
  index: 0,
  input: '¿Cuáles son las tres funciones de String en JS?',
  groups: undefined
]
[
  '¿Cuáles son las tres funciones de String',
  'tres',
  'funciones',
  'String',
  index: 0,
  input: '¿Cuáles son las tres funciones de String en JS?',
  groups: undefined
]
```

Como veis, es evidente que golpea mi cabeza, creo que estoy en el camino, pero vamos a explicar este ejemplo un poquito que tiene mucha miga, las expresiones regulares nos abren un mundo de patrones, coincidencia, reutilización de texto, de verdad es algo apasionante, complicado eso es evidente, pero abstrayéndonos un momento, valoremos, unas expresiones que tienen el mismo uso en casi todos los lenguajes, que manejan valores, ya sean en variables, funciones, que nos capacitan a realizar todo tipo de travesuras con los caracteres que encontramos, creando grupos, y posibilitándonos la reutilización de esos grupos, lo dicho una pasada.

En el ejemplo anterior tratando la expresión regular utilizada, tenemos el primero el carácter ^ que indica que el carácter siguiente o caracteres siguientes a él deben ser iguales al comienzo del string, compara exclusivamente el primer carácter de la variable, en este caso he colocado ^¿qué es el patrón con el que comienza el string, si no hubiera establecido esta expresión, ¿qué resultado podríamos esperar?,  ¿lo vemos?

```python
var stringtomodify = '¿Cuáles son las tres funciones de String en JS?';

console.log(stringtomodify.match(/(tres).*(funciones).*(String)/));
```

    [
        'tres funciones de String',
        'tres',
        'funciones',
        'String',
        index: 16,
        input: '¿Cuáles son las tres funciones de String en JS?',
        groups: undefined
    ]
    
He eliminado ^¿.*, los dos primeros los deberíamos tener claros, los dos siguientes, y * expresan una comparación con el patrón que nos podemos encontrar tras ^¿, quiere decir,  sería la expresión de cualquier carácter excepto el salto de línea sería un patrón válido, y * expresa que cualquier carácter que hay delante de él puede estar presente 0 o muchas veces, suena un poco jeroglífico, pero en cuanto realizar unos ejercicios y operas un poco con ello, tu estuche de herramientas se multiplica exponencialmente, este tema requiere no solo un documento, podríamos entrar en un curso completo sobre expresiones regulares, pero no es el caso. Una pena.

En definitiva, si apreciamos el ejemplo hemos comparado la cadena con varios patrones pasados a base de expresiones regulares, muy útiles a la hora de filtrar los datos que recoge un formulario, buscando patrones correctos que nos pudieran interesar, emails, nombres, teléfonos, matrículas, etc. y pudiendo desechar patrones que no coinciden con nuestras necesidades.

## Modificar la cadena, obtener un valor diferente a la entrada de la función

Creo que un detalle fundamental en el uso de funciones sobre cadenas, es tener claro que si queremos modificar la cadena original, debemos guardar el valor que se le pasa a la función en una nueva variable, suena un pelín raro todavía, ¿verdad?, pues sin preocupación ninguna en breve entrara seguro.

Pongamos un ejemplo, tenemos una variable con un valor de nombre, algo así var nameuser = 'Daniel'; lo conocemos ¿no?, seguimos, creamos una función saludo que como parámetro obtendrá el valor de la variable nameuser, o sea Daniel e imprimirá el saludo Hola, Daniel que tiene guardado la función dentro. Mostrando un Hola, Daniel en la consola. Este Hola, Daniel, no sustituye el valor de la variable original, seguirá siendo Daniel, y el Hola, Daniel, será la salida de la función que o la guardamos en una nueva variable, la pasamos a otra función o en definitiva es algo efímero que se perderá.


```python
const nameuser = 'Daniel';

function saludar(nameuser){
    return 'Hi ' + nameuser;
};

console.log(saludar(nameuser));

console.log(nameuser);
```

    Hi Daniel
    Daniel
    
Queda visto, la variable original nameuser no es modificada, solo el valor de entrada, es modificado y produce otro valor distinto de salida. Otra cosa es si deseamos guardar el valor modificado. Veámoslo.

```python
const nameuser = 'Daniel';

function saludar(nameuser){
    newnameuser = 'Hi ' + nameuser;
    return newnameuser;
};

console.log(saludar(nameuser));
console.log(nameuser);
console.log(newnameuser);
```

    Hi Daniel
    Daniel
    Hi Daniel
    
Apreciamos el cambio no, hemos creado una nueva variable para guardar el valor modificado y poder reutilizarlo en un futuro. Un detalle importante que aunque ahora no entra porque no lo hemos tratado, es fundamental que empecemos a entender, el ámbito de acción de una variable, no me voy a extender mucho, ya que no toca como he dicho, pero si influye y quiero dejar mi guita de pan. Cuando hablamos de ámbito nos referimos a donde está presente la variable, por lo tanto, donde podemos utilizar el valor que contiene la variable, si os dais cuenta la newnameuser variable que hemos creado sintácticamente no está declarada como habitualmente, esta es la forma de declarar una variable global, quiere decir está presente en cualquier ámbito de nuestra aplicación. Y luego tenemos la declaración típica que conocemos que establece el ámbito a local, quiere decir exclusivamente al bloque, función, clase, que estemos creando, fuera de ese ámbito no aparece.

Os comento esto por el tema de duplicación de nombres de variables, confusión en el uso de global o local, resultados inesperados, debemos de tener claro donde actuaran y desde donde se puede llamar a las variables que creamos. El ejemplo en este caso es claro, si declaramos la variable var newnameuser y luego intentamos retornar su valor con un console.log desde fuera de la función, o sea desde un ámbito diferente nos retornara un claro newnameuser not define. Lo vemos.

```python
const nameuser = 'Daniel';

function saludar(nameuser){
    var newnameuser = 'Hi ' + nameuser;
    return newnameuser;
};

console.log(saludar(nameuser));
console.log(nameuser);
console.log(newnameuser);
```
Existen un montón de métodos para modificar una cadena, desde pasar todo a mayúsculas o minúsculas, remplazar partes, concatenar con otras cadenas, bueno a modo procesador de texto podríamos funcionar si cogemos soltura y experiencia, herramientas para ello de sobra. Veamos algunos ejemplos de como modificar el valor pasado y obtener una salida esperada. Disfrutemos de lo aprendido.

```python
// Ejemplos de las tres funciones mencionadas
// toLowerCase(), toUpperCase(), replace()

var stringtomodify = '¿Cuáles son las tres funciones de String en JS?';

console.log(stringtomodify.toLowerCase()); // minúsculas
console.log(stringtomodify.toUpperCase()); // mayúsculas
console.log(stringtomodify.replace('tres ', '')); // jejejeej

```

    ¿cuáles son las tres funciones de string en js?
    ¿CUÁLES SON LAS TRES FUNCIONES DE STRING EN JS?
    ¿Cuáles son las funciones de String en JS?
    
También disponemos de la capacidad de anidar funciones, esta capacidad nos abre otro cajón de herramientas más, aunque este cajón merece la pena tenerlo controlado, el anidamiento se recomienda que no supere dos o tres veces, luego puede volverse muy poco cómodo y bastante complicado de controlar, hagámonoslo fácil diría yo, empecemos por dos y luego llegara el 3 anidamiento, debemos priorizar el control sobre nuestro código.


```python
// Anidamiento de funciones

var stringtomodify = '¿Cuáles son las tres funciones de String en JS?';

// anidamos toUpperCase y slice, extrayendo parte del string y convirtiendolo en mayúsculas
var stringtest0 = stringtomodify.toUpperCase().slice(1,31);

// Supongamos en título de un documento centrado que queremos utilizar, pero no queremos modificar nosotros.
var titletomodify = '              HE PUESTO TODO MI EMPEÑO EN AVERIGUAR:           ';

// Vamos hacernoslo facil, utilizamos el metodo trim() que elimina espacios en blanco delante y detras.
// Tambien lo voy a poner en minúsculas 
var newtitletomodify = titletomodify.toLowerCase().trim();

console.log(newtitletomodify + ' ' + stringtest0);

```

    he puesto todo mi empeño en averiguar: CUÁLES SON LAS TRES FUNCIONES 
    

No quiero terminar esta pregunta sin hacer mención del siguiente asunto, lenght no es una función.

## lenght, no es una función

```python
var textstring = 'Las tres funciones de string y en realidad volvemos al tipo cadenas, vamos a trabajar con cadenas, partamos de esa base. Nos preguntamos por las tres funciones de string, que son funciones, las funciones son estructuras que nos permiten incluir comportamientos y valores, para obtener un resultado. Podemos llamarlas desde cualquier parte del código y algunas debemos pasarles parametros si les fueran necesario, en este momento con eso tendriamos bastante, ya que las funciones que vamos a ver las provee la libreria general de javascript, no tenemos que escribirlas nosotros pero en poco tiempo, incluso las necesitaremos para empezar a expresar nuestros script.';
console.log(textstring.length);
textstring.toLowe
```
664
    
En ningún momento length se cierra con paréntesis, no es una función, es un atributo que devuelve el número de caracteres que contiene la cadena, incluido también los espacios entre palabras.

```python
var textstring = 'a b';
console.log(textstring.length);
```

    3
    
Como se muestra "a b" son tres caracteres.

# <a id="condicional">¿Qué es un condicional?</a>
[up](#top)

¿En lo bueno, en lo malo, en la salud, en la enfermedad, os suena?, pues son condiciones que se estipulan y que en ese momento se establece un resultado, verdadero a todo si no es que estás corriendo hacia la puerta. Dejando la broma, un condicional no difiere nada de una condición cualquiera que podemos tener en nuestra rutina diaria, si el semáforo está en verde cruza, si no te paras. Creo que esto está claro, la condición es cruzar, si es verdadero, está en verde se cumple, puedes cruzar, si no es verdadero, entonces es falso no se cumple, está en rojo, no puedes cruzar. Lo vemos en un ejemplo.


```python
var cross = 'green';

if( cross === 'green'){
    console.log('You can cross');
} else {
    console.log('You can´t cross');
};

var cross = 'red';

if( cross === 'green'){
    console.log('You can cross');
} else {
    console.log('You can´t cross');
};
```

    You can cross
    You can´t cross
    

El concepto tal como lo estamos viendo es si la condición el resultado es verdadero se cumple, puedes entrar al bloque de código, si no es verdadero, entonces no hay otra opción que sea falso, la condición no se cumple no puedes pasar al bloque de código, entonces nuestra estructura de condicional, recoge este resultado y le ofrece una siguiente opción, sino, else es lo que hace, si no has cumplido las condicionales anteriores, entonces como salida del condicional está el bloque de código de else.

Vamos a desmenuzar la condicional anterior. 


```python
// Creamos una variable por comodidad, también podemos
// pasarle valores directamente dentro del parentesis,
// donde se encuentra la condición a verificar
var cross = 'green';

// Abrimos la estructura con un if, es SI 
// seguimos con los parentesis donde encerramos la expresión
// del condicional, si la variable cross es estrictamente 
// igual a el valor de tipo string 'green', entonces
// la condicion es verdadera puedes entrar a mi bloque de 
// codigo donde estan mis sentencias a realizar
if( cross === 'green'){
    console.log('You can cross');
}; 
```

    You can cross
    

Vemos que ha entrado, ya que la condición es verdadera y si hubiera sido falsa.


```python
var cross = 'no-green';

if( cross === 'green'){
    console.log('You can cross');
}; 
```

La condición no se ha cumplido, pero no arroja nada, ningún resultado, perfecto, entonces, la condición no se cumple, no te dejo entrar en mi bloque de código. La aplicación continua. Y si completamos el ejemplo anterior, y damos un pasito atrás observando en general lo que tenemos en la mano, podemos apreciar que en este momento podemos implementar dinamismo a nuestra aplicación podemos ser capaces de dirigir el flujo de datos hacia donde queramos, podemos incrementar las condiciones para entrar en un bloque de código u otro, podemos dar opciones  según el resultado que faciliten una acción posterior un resultado esperado posterior. En definitiva, le podemos dar vida a nuestro código pasivo hasta ahora. Vamos a verlo.


```python
var cross = 'no-green';

if( cross === 'green'){
    // Aqui no entra si no es verde
    console.log('You can cross');
} else {
    // Else nos permite terminar el condicional
    console.log('You can´t cross');
};
```

    You can´t cross
    

Lo vemos perfectamente, dinámicamente no cumplió la primera condición término saliendo por nuestro else, dirigir el flujo de datos, dirigir los resultados esperados es fundamental para controlar el funcionamiento de nuestra aplicación, if y else son dos herramientas que usaras a diario y que incluso querrás usar más, es como tener la llave del coche, o arrancas o lo paras a tu disposición. Lo vemos.


```python
keys = 1;

if( keys == true){
    console.log('On')
} else {
    console.log('Off');
};
```

    On
    

He utilizado valores de tipo booleano porque muchas veces tendremos que lidiar con esta misma situación, nos llega un valor numérico 0 o 1 y le damos vida con verdadero, arranca con falso para. Entonces teniendo claro lo básico de la estructura condicional, los paréntesis que recogen la condición a revisar, las llaves que engloban las expresiones dentro del bloque de código al que según sea el resultado podremos entrar o no, ampliemos algunas opciones más, es componerle extras a la herramienta, a mí siempre y me imagino que a todos, me gusta con todos los extras posibles.

Entonces, si o if pasamos una sola condición y no es verdadera, acaba el condicional, salta al else o sino el bloque de código final y ya está. Pues no, también podemos ampliar las condiciones algo así como si la condición si o if no es cumplido podemos verificar otra antes de llegar al else con un elseif, algo así como sino si, si la condición anterior el resultado es falso podemos probar esta otra, sino cumples la primera si puedes cumplir ¿esta?


```python
var age = 26;

if( age === 30){
    console.log('Eres joven');
} else if ( age === 45) {
    console.log('Algo mayor');
} else {
    console.log('Yo me lo miraría');
};
```

    Yo me lo miraría
    

¿UFF, algo esto haciendo incorrecto?, esperaba que me llamara joven. Jo, ya ni las máquinas, vale dejamos la broma, quería que viéramos esta situación creo que es evidente que un condicional a la vez de darnos un montón de herramientas nos proporciona una visión global de la entrada del flujo de datos y como podemos manejarlo con palabras clave, if, else, else if y también con los operadores de comparación, tal como igualdad, igualdad estricta, no igualdad, no igualdad estricta, mayor que o menor que, mayor o igual que, o menor o igual que. Con estas herramientas podemos hacer diabluras de verdad. Una anotación importante vamos a ver los operadores de igualdad, en este caso utilizar la igualdad llamémosla standard == no es una buena práctica, en JavaScript tenemos la igualdad estricta y la no igualdad estricta que se expresan con === triple igual o!== explosión con cierre de admiración y dos iguales, que aparte de comparar el valor, también comparan el tipo de dato, fundamental para seguir con el control estricto y evitarnos sorpresas.

Pero continuemos con el script anterior. Vemos no ha ofrecido el resultado que podríamos esperar, tiene 26 y le mandas al médico, que pasa aquí, sencillo si nos fijamos en la primera condicional age === 30, le ponemos la condición que si quiere un resultado verdadero tiene que ser estrictamente el número 30, igualdad estricta eso es lo que significa debe ser el valor y el tipo iguales. Veámoslo, modificamos a 30 el valor de la variable age.


```python
var age = '30';

if( age === 30){
    console.log('Eres joven');
} else if ( age === 45) {
    console.log('Algo mayor');
} else {
    console.log('Yo me lo miraría');
};
```

    Yo me lo miraría
    

Lo he modificado, pero sigue sin alegrarme el día, esta es la profundidad del operador de comparación de igualdad estricta === valor y tipo recordamos, estamos cambiando el tipo de dato, le pasamos un valor igual, pero un tipo diferente, no es igual en definitiva, igual ocurre con la no igualdad estricta, esto tiene que estar muy nítido en nuestras cabezas, en JavaScript lo bonito es manejar estos operadores, no manejar la igualdad o no igualdad normal.


```python
var age = '30';

if( age == 30){
    console.log('Eres joven');
} else if ( age === 45) {
    console.log('Algo mayor');
} else {
    console.log('Yo me lo miraría');
};
```

    Eres joven
    

Creo que lo podemos apreciar. Con el operador de igualdad, esta situación se podría dar, pero es realmente peligrosa, solo piensa que dentro de tu bloque de código de la condicional que ha dado como resultado verdadero, realizaras alguna operación aritmética no permitida entre diferentes tipos de datos, la aplicación si habría pasado el condicional, y automáticamente cuando llegara a la operación aritmética retornaría un error. Eso sí que sería un gran fallo por nuestra parte, comprobar el tipo de dato nos da control, seguridad y habla bien de nosotros, es de responsabilidad grabarnos esto en la cabeza.

Quisiera acabar esta sección mostrando algunos ejemplos de la estructura condicional con diferentes operadores de comparación y construir algún anidamiento de condicionales, seguir creciendo, nos lo ponemos un poco más complicado. Pues pensemos en  un ejemplo.

Vale comencemos pensando en lo último que hemos comentado, anidamiento de condicionales, igual que por ejemplo nos pueden exigir una condición para acceder a un sitio donde se ubican sectores más pequeños y en ellos nos exigen otras condiciones para entrar, llamémoslo concierto, pagas una entrada para grada o pagas una entrada para zona vip, pero estás dentro del mismo evento, si nos abstraemos tenemos dos condiciones, pagas la entrada al recinto y luego pagas el plus para zona vip. Pero no puedes pagar solo zona vip, no podrías acceder al recinto. Anidar condiciones, despliega y creo que el verbo lo dice todo desplegar multitud de opciones y a mi modo de ver un sinfín de diversión, de verdad disfrutarlo. A ello.


```python
var operatorsA = 0;
var operatorsB = 1;

// Operadores de comparación javascript
if(operatorsA == operatorsB){console.log('Operador igualdad')}; // false
if(operatorsA != operatorsB){console.log('Operador no igualdad')}; // true
if(operatorsA === operatorsB){console.log('Operador igualdad estricta')}; // false
if(operatorsA !== operatorsB){console.log('Operador no igualdad estricta')};// true
if(operatorsA < operatorsB){console.log('Operador menor que')}; // true
if(operatorsA > operatorsB){console.log('Operador mayor que')}; // false
if(operatorsA <= operatorsB){console.log('Operador menor o igual que')}; // true 
if(operatorsA >= operatorsB){console.log('Operador mayor o igual que')}; // false
```

    Operador no igualdad
    Operador no igualdad estricta
    Operador menor que
    Operador menor o igual que
    

El cuadro habla por sí solo, ¿no? Vamos a echarle un poquito más de azúcar, siguiendo con el ejemplo nos piden que creemos el condicional para controlar el acceso al recinto y a la zona supervip, solo para 15 personas, ojo otra condición, mmmmmmmm, como mola. Nos ponemos, yo si me veo capaz, tenemos los conceptos, y la habilidad es a golpe de tecla. Vamos a lanzarnos a la piscina y nunca mejor dicho, vamos a conseguir dirigir un flujo de gente hacia un evento y dentro de ese evento hasta una zona supervip y controlaremos su aforo. Vamos.

Un segundo, un segundo, un segundo... se me ocurre que ya hemos visto funciones y podría encajar de modo perfecto en el ejemplo. Os parece y lo cocinamos todo junto. Vamos.


```python
// Esto se pone interesante.

function accessevent(user){
    uservip = user;
    if ( uservip <= 15 ) {
        return 'Pase por favor, ¿Desea tomar algo?';
    } else if ( uservip > 15 ){
        return 'No puede entrar';
    }
};

console.log(accessevent(8));
```

    Pase por favor, ¿Desea tomar algo?
    

Analizamos un poco esta composición, declaramos una función que necesita un parámetro para ejecutarse, o sea que en cualquier momento de nuestro condigo podemos llamarla y saber como anda el aforo, ojo con el uso del ámbito de la variable como hemos visto si la declaro así es porque quiero hacerla global y poder utilizarla también en cualquier parte de la aplicación, no está prohibido, pero si nos puede penar si nos descontrolamos con este asunto, en el siguiente ejemplo las reduciré de ámbito, que es la mejor practica.


```python
// Esto se pone interesante.

function accessevent(user){
    var uservip = user;
    if ( uservip <= 15 ) {
        return 'Pase por favor, ¿Desea tomar algo?';
    } else if ( uservip > 15 ){
        return 'No puede entrar';
    }
};

console.log(accessevent(8));
// console.log(uservip); // Si activas arroja un error bonito
```

    Pase por favor, ¿Desea tomar algo?
    

Como muestra y no hay que cansarse de probarlo si es necesario. He probado la variable uservip fuera de la función donde se creó. Bonito fallo si es pretendido. Sigamos.

Sigamos con el análisis, era importante este asunto, merecía parar un poco aquí antes de continuar con nuestra condicional, la primera condición que ponemos es si la variable uservip es menor o igual uno de los operadores comparativos que hemos visto, vale si uservip es menor o igual a 15, todavía cabes, pasa y tomate algo, si no si, else if, no puedes pasar. Me queda un poco mal eso si no no puedes pasar, soy más de empatizar con la gente, bueno no puedes pasar aquí, pero tenemos otra zona que igual cabes, el compañero te guía...

```python
// Esto se pone interesante.

function accessevent(user){
    var uservip = user;
    if ( uservip <= 15 ) {
        return 'Pase por favor, ¿Desea tomar algo?';
    } else if ( uservip > 15 ){
        if (uservip > 15 && uservip < 100) {
            return 'Me acompañas, las consumiciones cuestan 10€';
        }
        return 'No puede entrar';
    }
};

console.log(accessevent(5));
console.log(accessevent(56));
console.log(accessevent(225));
```

    Pase por favor, ¿Desea tomar algo?
    Me acompañas, las consumiciones cuestan 10€
    No puede entrar
    

Creo que nos ha quedado un script bastante atractivo, incluso he utilizado otros operadores &&(AND) o Y en una condicional, le hemos solicitado una doble verificación, línea 10 uservip debería ser menor que quince Y uservip debería ser menor que 100, se denomina operadores logicos existen AND como hemos visto y ||(OR) que es O, en definitiva podemos optar por esto y esto o también podemos optar por esto o esto, es evidente la diferencia, la primera debe cumplir ambas condiciones esta y esta, para ser verdadera y la segunda solo debe cumplir una de las dos esta o esta.

Aparte por supuesto nuestro objetivo, el anidamiento, pero doy por hecho que estamos viendo que hemos abierto otra sala, eso se llama visión empresarial, ¿no? Ese nuevo if más la condición expresada se anida en un condicional else if, nos podemos llegar a sentir arquitectos formando estructuras, pensemos en un tetris, podemos desplegar nuestros condicionales a nuestra libre elección, un sentimiento de libertad me acompaña. Un poquito más y acabamos.


```python
// ACCESO A EVENTO

var maxaforo = 250;

function accessevent(client){

    var user = client;
    
    if ( user <= 15 ) {
        return 'Pase por favor, ¿Desea tomar algo?'; // ACCESSO SALA SUPER VIP
    } else if ( user > 15 ){
        if (user > 15 && user <= 100) {
            return 'Me acompañas, las consumiciones cuestan 10€'; // ACCESO SALA VIP
        }
        else if ( user <= maxaforo ){
            return 'Puede pasar a la sala, las consumicioens cuestan 25€'; // ACCESO A SALA 
        }
    else {
        if ( user === 265 || user === 275) {
            return 'Aforo completo, lo sentimos, le ofrecemos un dto.10% venta anticipada siguiente sesión'; // REGALO ALEATORIO A DOS USER
        }
        return 'No puede entrar, aforo completo'; // FUERA DEL RECITO
    }
    }
};

console.log(accessevent(1)); // Pase por favor, ¿Desea tomar algo?
console.log(accessevent(15)); // Pase por favor, ¿Desea tomar algo?
console.log(accessevent(16)); // Me acompañas, las consumiciones cuestan 10€
console.log(accessevent(100)); // Me acompañas, las consumiciones cuestan 10€
console.log(accessevent(101)); // Puede pasar a la sala, las consumicioens cuestan 25€
console.log(accessevent(249)); // Puede pasar a la sala, las consumicioens cuestan 25€
console.log(accessevent(250)); // Puede pasar a la sala, las consumicioens cuestan 25€
console.log(accessevent(251)); // No puede entrar, aforo completo
console.log(accessevent(300)); // No puede entrar, aforo completo
console.log(accessevent(301)); // No puede entrar, aforo completo
console.log(accessevent(265)); // Aforo completo, lo sentimos, le ofrecemos un dto.10% venta anticipada siguiente sesión
console.log(accessevent(275)); // Aforo completo, lo sentimos, le ofrecemos un dto.10% venta anticipada siguiente sesión

```

    Pase por favor, ¿Desea tomar algo?
    Pase por favor, ¿Desea tomar algo?
    Me acompañas, las consumiciones cuestan 10€
    Me acompañas, las consumiciones cuestan 10€
    Puede pasar a la sala, las consumicioens cuestan 25€
    Puede pasar a la sala, las consumicioens cuestan 25€
    Puede pasar a la sala, las consumicioens cuestan 25€
    No puede entrar, aforo completo
    No puede entrar, aforo completo
    No puede entrar, aforo completo
    Aforo completo, lo sentimos, le ofrecemos un dto.10% venta anticipada siguiente sesión
    Aforo completo, lo sentimos, le ofrecemos un dto.10% venta anticipada siguiente sesión
    

Ya estamos viendo la gran capacidad y juego que nos ofrecen estas herramientas, if, else if, else, AND, OR y demás que hemos utilizado, ahora también **tenemos la posibilidad de evaluar una expresión y compararla con un valor para ofrecerle un bloque específico de código y especificarle su comportamiento, dominio del flujo al poder**. 

Expliquemos lo que acabo de soltar, posibilidad de evaluar y comparar, ojito tomar un valor compararlo con algo que tenemos y si es verdadero, ofrecerle su propia sala de fiestas, quien no quiere eso, en este caso ahí que reseñar que su uso no es muy extenso, pero que los resultados son evidentes, me gusta mucho su organización y creo que en el modelo del script anterior incluso podría quedar más legible, criterio personal.

Voy a intentarlo y lo comentamos, después, de momento, marcamos unas directrices sintácticas que debemos cumplir. Lo primero conocer la palabra clave que inicia la estructura, en este caso es switch, y luego otra palabra reservada case, vemos una estructura básica y la explicamos si os parece bien.


```python
client = 0;

switch(client){
    case 1 :
        console.log('sumo 1 + 1');
        client += 1;
    case 1 :
        console.log('sumo 1 + 2');
        client += 1;
    case 1 :
        console.log('sumo 1 + 3');
        client += 1;
    case 1 :
        console.log('sumo 1 + 4');
        client += 1;
    case 1 :
        console.log('sumo 1 + 5');
        client += 1;
    case 0 :
        console.log('sumo 1 + 6');
        client += 1;
    case 1 :
        console.log('sumo 1 + 7');
        client += 1;
    case 1 :
        console.log('sumo 1 + 8');
        client += 1; 
    default :
        console.log('Aforo completo'); 
}

console.log('El valor de client ahora mismo es:', client);
```

    sumo 1 + 6
    sumo 1 + 7
    sumo 1 + 8
    Aforo completo
    El valor de client ahora mismo es: [33m3[39m
    

La estructura que acabamos de realizar me va al pelo para comentar lo siguiente independiente a la sintaxis que estamos viendo palabra clave paréntesis, llave que encierra nuestros casos y cada caso se abra se nombra  y después de los dos puntos, su bloque de código, digo bloque porque ahí podemos crear lo que nos apetezca, en este caso me hacía falta que tuviéramos una visión completa del acceso, clasificación, comparación y ubicación de los clientes que se propone en el script Acceso a evento que hemos visto cuando anidamos condicionales, tengámoslo presente, ya que es la base de este ejemplo.

Vale, vemos el conjunto completo en un mundo real tendríamos ya nuestro bucle preparado para recibir a los clientes, sumarlos, clasificarlos, lo que deseemos, no hemos llegado aún a los bucles, pero en breve entraran de lleno en nosotros, que ganas jejejej, bueno, lo dicho aprovecho la mi guita de pan y continuo, no tenemos bucle, ohhhhh, nada nos preparamos un pequeño ejemplo que encima nos permite explicar el funcionamiento interno de una declaración de caso, tomemos funcionamiento interno como flujo de datos y visionémoslo. Vemos que iniciamos la variable client y le pasamos un valor 1. Nuestro primer cliente, pero estamos parados aquí. Si vemos el funcionamiento de la estructura switch(){case:;}, lo que hace es una revisión secuencial de todos los casos, desde el primero al último sin pararse, para pararlo si es que nos interesa, debemos utilizar otra palabra reservada **break**, lo que estoy haciendo es una chapuza, como he dicho utilizaríamos un bucle para ir registrando clientes.

Pero de momento obtengo el resultado esperado, no siendo un trabajo para producción, este parche nos puede ser útil, resultado esperado y útil, son palabras que debemos perseguir. Continuo, ya tenemos nuestro contador de clientes atípico, pero funcional, vamos a reducir un poco los aforos y nos adaptamos a algo más manejable.

**Fijémonos en la línea 21, hacemos coincidir el valor de la variable con el caso, recordamos que hace una declaración de caso, evalúa una expresión y la compara con un valor expresado para ofrecerle un bloque de código, pues revisamos el resultado y vemos que a partir de la línea 21 que compara el valor de la variable y el valor expresado y el resultado es verdadero es cuando ofrece el bloque de código**, antes no, a partir de entonces comienza la suma, al resto de casos accede por su propio comportamiento, es muy importante vigilar esto, utilizar break nos evita posibles desastres. 

En este caso no me interesa parar el flujo de la declaración de caso porque quiero que vaya incrementando caso a caso en 1 el total de los clientes y a partir de ahí, juntaremos nuestras condicionales if, else if, else y nuestra declaración de caso, todo bien cocinado creo que saldrá un menú muy rico. A ver si somos capaces.

Vale, imaginemos que nuestros clientes comienzan a entrar, y el contador empieza a aumentar. Tenemos nuestro contador arriba y retorna un valor.    


```python
var client = 1;

if( client <= 3){
    var typeclient = 'clientvip';
} else if ( client > 3 && client < 6){
    var typleclient = 'clientguest';
} else {
    var typeclient = 'client';
}

switch(typeclient){
    case "clientvip" :
        console.log('Acceso');
        console.log('Acompañamiento');
        console.log('Consumicion');
        break;
    case "clientguest" : 
        console.log('Acceso');
        console.log('Explicacion');
        console.log('Cobro consumicion');
        break;
    default : console.log('No me vale');
}

```

    Acceso
    Acompañamiento
    Consumicion
    

No me gustaría terminar aquí solo, creo que esta sección se merece su broche, y si jugamos también con las funciones, conocemos todo el funcionamiento interior del ámbito, vigilemos nuestras variables, conociendo el ámbito interior me gustaría facilitarme el ejemplo de incrementar usuarios y obtener resultados distintos que es lo bonito, ¿no?

Vamos a cambiar algunas cosillas, como en vez de declarar una variable y darle un valor, le pasaremos ese valor por parámetro a la función, manejo de nuestro flujo. Vemos el tema.


```python
// var client = 1; // la dejo como ejemplo

function accessevent(client) {
    if( client <= 3){
        var typeclient = 'clientvip';
    } else if ( client > 3 && client < 6){
        var typeclient = 'clientguest';
    } else {
        if ( client < 10 ){
            var typeclient = 'clienthall';
        } else {
            var typeclient = 'guest';
        }
    }

    switch(typeclient){
        case "clientvip" :
            console.log(typeclient);
            console.log('Acceso');
            console.log('Acompañamiento');
            console.log('Consumicion');
            break;
        case "clientguest" :
            console.log(typeclient); 
            console.log('Acceso');
            console.log('Explicacion');
            console.log('Cobro consumicion');
            break;
        case "clienthall" :
            console.log(typeclient); 
            console.log('Acceso');
            console.log('Cobro consumición');
            console.log('Indicación');
            break;
        default : 
            console.log(typeclient);
            console.log('Aforo completo');
    }
}


console.log(accessevent(3));
console.log(accessevent(5));
console.log(accessevent(6));
console.log(accessevent(10));

```

clientvip
Acceso
Acompañamiento
Consumicion
undefined
clientguest
Acceso
Explicacion
Cobro consumicion
undefined
clienthall
Acceso
Cobro consumición
Indicación
undefined
guest
Aforo completo
undefined
    

Espero que os halla gustado esta sección, yo me lo he pasado pipa aparte de practicar, aprender y por supuesto equivocarme, es sabido que la practica hace al maestro, para alcanzar ese objetivo no hay otra que tiempo, tiempo, tiempo... 

# <a id="ternario">¿Qué es un operador ternario?</a>
[up](#top)

En algunas ocasiones necesitaremos o nos encontraremos con una reducción sintactica bestial de una  estructura condicinal regular, poderse se puede realizar e incluso es interesante saberlo, conocerlo y aprenderlo, sobretodo sabiendo que es la unica forma correcta de expresar condicionales en macros como React o Vue, teniendo muy claro eso, pasemos, ¿qué es un operador ternario?, en si es un caracter ?, este caracter sustituye un monton de lineas de codigo y da significado a una estructura simple de una estructura condicional normal.

Veamos lo que he dicho.


```python
// Estructura condicional regular
var exampleternario = 1;

if ( exampleternario === 1 ){
    console.log(true);
}

// Estructura con sintaxis ternaria

var exampleternario = exampleternario === 1 ? true:false ;
console.log(exampleternario);

```
true
true

Analicemos primera parte, estructura regular, nuestra variable, nuestra palabra reservada if, nuestros paréntesis, nuestra condicional, nuestras llaves y nuestro bloque. En la segunda parte vemos la gran diferencia de sintaxis para obtener el mismo resultado, reducimos 3 líneas que serían más a una sola línea, en ocasiones y cuando cojamos soltura con ellas estaremos tentados a su uso habitual, simplemente no es fácil de leer, hagámonoslo cómodo utilicemos estructura regular cuando podamos utilizarlas, usemos el operador ternario cuando nos sea obligatorio.

Vale, después de este consejo, a que mola. He expresado incluso más en una sola línea que en más de 3, en la expresión regular no he llegado a incluir ni el comportamiento para el falso que en el operador ternario, si está incluido, veamos la diferencia.


```python
// Estructura condicional regular
var exampleternario = 0;

if ( exampleternario === 1 ){
    console.log(true);
}

// Estructura con sintaxis ternaria
console.log('Operador ternario');

var exampleternario = exampleternario === 1 ? true:false ;
console.log(exampleternario);
```

Operador ternario
false
    

En este caso la forma regular no devolvería nada, el ternario ahí está. Podemos incluir incluso más condiciones en el ternario, es aquí donde se pone raro, raro, pero debemos aprenderlo, la mejor forma, practicando con las herramientas, y si alguna se resiste más práctica. Seguimos preparemos un registro de usuario, de forma regular y utilizando operador ternario.


```python
// Estructura condicional regular

const usertype1 = {
    name : 'admin',
    admin: true,
};

const usertype2 = null;

const usertype3 = {
    name : 'guest',
    admin: false,
};

function useraccess(typeuser){
    
    if ( typeuser ){
        if (typeuser.admin){
            return 'Eres administrador puedes continuar';
        } else {
            return 'Eres usuario, pero no tienes privilegios';
        }
    } else {
        return 'Debes registrarte. Gracias.';
    }
}

console.log(useraccess(usertype1));
console.log(useraccess(usertype2));
console.log(useraccess(usertype3));

// Estructura con sintaxis ternaria

function useraccessternario(typeuser){
    
    return typeuser ? typeuser.admin ?  'Eres administrador puedes continuar' : 'Eres usuario, pero no tienes privilegios' : 'Debes registrarte. Gracias.';
    
    /*
    if ( typeuser ){
        if (typeuser.admin){
            return 'Eres administrador puedes continuar';
        } else {
            return 'Eres usuario, pero no tienes privilegios';
        }
    } else {
        return 'Debes registrarte. Gracias.';
    }
    */
}

console.log(useraccessternario(usertype1));
console.log(useraccessternario(usertype2));
console.log(useraccessternario(usertype3));

```

    Eres administrador puedes continuar
    Debes registrarte. Gracias.
    Eres usuario, pero no tienes privilegios
    Eres administrador puedes continuar
    Debes registrarte. Gracias.
    Eres usuario, pero no tienes privilegios
    

Tal como vemos el resultado de una y otra forma es igual, la diferencia tal como hemos expresado es la forma de expresión, tenemos que llegar un momento de conocer y sentirnos cómodos, leyendo y utilizando operadores ternarios, pero a la vez sabiendo controlar su uso.

Como hemos venido diciendo, no es aconsejable su uso máximo, pero ahora es hora de aprender, romper, equivocarse sin ningún miedo, ánimo y a practicar.

# <a id="declarafuncion">¿Cuál es la diferencia entre una declaración de función y una expresión de función?</a>
[up](#top)

Bueno al tajo, lo de siempre, concepto declaración de función y concepto expresión de función, saber las diferencias cuando menos nos obliga a conocer algo, ambos conceptos, si no casi es imposible obtenerlas. Dime las 7 diferencias de un dibujo, tendríamos que compararlo con un segundo dibujo, ¿no?

Pues eso, una declaración de función es lo que hasta el momento hemos estado viendo como declaración de función regular, tradicional, de uso masivo, vemos el ejemplo.


```python
function firstfunctionfordeclaration(){
    console.log('Esta es la forma tradicional de declarar una función');
};

console.log(firstfunctionfordeclaration());
```

Formas de declarar funciones en JavaScript, **por declaración, por expresión** o hay alguna otra, pero no se recomienda su uso, sería por constructor de objetos, sabemos que JavaScript aparte de fundamentar su programación a objetos otorga a las funciones una gran relevancia en el lenguaje, profundice un poco más, investigar tenemos que tenerlo claro es fundamental a la hora de avanzar.

Seguimos, que será **¿crear funciones por declaración?** Es la forma habitual de crear o declarar la función, la estamos utilizando en este mismo documento. Sintácticamente, es evidente comenzamos utilizando la palabra clave function luego su nombre, cerramos con paréntesis, donde irían los parámetros e insertamos unas llaves para colocar dentro las expresiones que deseemos. Tal cual el ejemplo.

Si revisamos lo que tenemos hasta ahora, hemos trabajado con funciones que nos facilita el propio lenguaje y hemos creado nuestra primera función firstfunctionfordeclaration(). Pero no utilizamos la misma forma de declaración, tiene algo de sentido entrar un poquito más en el asunto, que está pasando aquí, ¿son el mismo tipo de función?, si funciones son funciones, la forma de expresarlas difiere e incluso como veremos en un momento la forma de utilizarlas. Tener claro lo que es y lo que hace una función es lo fundamental, siempre trabaja de la misma manera, entrada-proceso-salida. Veamos la siguiente, **declaramos funciones por expresión**.

Declarar funciones por expresión es en definitiva declarar la función creando una variable que la guarda directamente, esta forma de declararla nos facilita las funciones anónimas, la forma de declararlas es diferente a la función por expresión, en su sintaxis, pero como hemos dicho no en su funcionamiento y resultado.


```python
const functionparar = function parar(){
    console.log('Me paro');
}

//console.log(parar()); // si llamaras a la funcion parar te retornaría un error
console.log(functionparar());
```

Me paro
undefined
    

```python
const functionparar = function(){
    console.log('Me paro');
}

console.log(functionparar());
```

Expresando de esta manera la función, trasladamos la llamada a la variable, el nombre de la función ya no es necesario, por lo tanto, lo podemos evitar pasando a ser una función anónima. Teniendo algo de conocimiento de las formas de expresar las funciones, por declaración o por expresión. Nos preguntábamos por la diferencia y la diferencia es el ámbito donde pretendamos utilizar la función, JavaScript no permite, y cuando digo no permite es que devuelve un error, no permite el uso de funciones por declaración dentro de llaves de otras estructuras, tal como condicionales, etc. quiere decir dentro de un bloque de código de un condicional por ejemplo no debemos usar funciones por declaración, debemos declarar las funciones por expresión o anónimas. Veamos la situación

```python
// funcion declarada por declaración
function saludo(){return 'Hola'};

// funcion declarada por expresion
var saludo = function(){'Hola'};


var user = 'Daniel';
// La diferencia

// opción incorrecta
if (user){

    function saludo(){
        return 'Hola ' + user ;
    }
}

//opcion correcta

if (user){
    var saludoforexpresion = function(){return 'Hola ' + user  + ' declación por expresión'};
}

console.log(saludo());
console.log(saludoforexpresion());
```

    Hola Daniel
    Hola Daniel declación por expresión
    

Aunque en este intérprete pueda ofrecernos un resultado correcto, JavaScript penaliza la declaración de funciones dentro de otros bloques de código, es obvio si cuando intentamos realizar este tipo de programación es para crear funciones en tiempo de ejecución y ese trabajo no está pensado para funciones que son expresadas de una forma tradicional, estable por no decir fija.

# <a id="this">¿Qué es la palabra clave "this" en JS?</a>
[up](#top)

This, si yo te contara. Cuando llego esta pregunta me inquieto bastante, la había visto de reojo en algún script, pero no le había dado la importancia que puede llegar a tener en su momento. **La palabra this, es una palabra reservada por JavaScript, es una palabra clave, tiene uso específico y según como se invoque puede obtener diferentes resultados.** ¿Qué hace this?

>La palabra clave this de una función se comporta un poco diferente en Javascript en comparación con otros lenguajes. Además tiene algunas diferencias entre el modo estricto y el modo no estricto. En general, **el valor de this está determinado por cómo se invoca a la función**. No puede ser establecida mediante una asignación en tiempo de ejecución, y puede ser diferente cada vez que la función es invocada.

Bueno, antes de saber qué hace, me haría otra pregunta, "según como se invoque", ¿qué es esto? Casi que mejor, invocar o llamar a this y después continuamos. Invocar a this, es una expresión que, siempre o casi siempre, se adhiere a un objeto y recalco, adhiere, es lo que hace, se vincula y puedes extraer del interior del objeto lo que desees, tanto datos como comportamientos. Así dicho queda muy abstracto, pero si nos hacemos una idea que this es como el conector que nos permite conectar el mando de la Play creo que nos quedaría mucho más visual, se adhiere un mando al conector que a su vez está adherido a la Play y podríamos seguir, la Play está adherida a la pantalla y más y más, vale, pues this es como ese primer conector que te da la opción de empezar a jugar, trasladando tus datos a la Play para que los pueda utilizar reflejándolos en la pantalla. Tenemos mejor la idea, centrémonos en el conector, pero llamémoslo this, this nos proporciona la funcionalidad de observar un objeto y poderle realizar solicitudes de los datos que tiene en su interior o incluso podemos utilizar las funciones que pueda contener, existen varios tipos de vinculaciones que luego veremos, es sumamente importante conocerlas, las vinculaciones entre funciones y objetos nos permiten establecer escenarios muy diversos donde los datos y funciones se puedan reutilizar, en ese sentido this es la herramienta, si no existiera tendríamos que inventarla, tal como los puentes nos permiten cruzar ríos this nos permite desplazar funcionalidades.

Quiero que nos centremos en lo que tenemos entre manos, para mí está siendo un salto evolutivo, aunque le estoy dedicando mucho tiempo, veo que estamos llegando a las profundidades de JavaScript, y eso es muy dulce. This nos permite ver un montón de lo que JavaScript nos puede ofrecer y de como funciona, el ejemplo que vamos a ver no es operativo, pero demuestra como JavaScript trata la información que posee y nos muestra lo que hemos estado viendo durante estas secciones sobre global y local, contexto, ámbito, estos conceptos son fundamentales entenderlos. Veámoslo.

```python
var variable = 'Primera variable';
variable = 'Primera variable';
this.variable = 'Primera variable';
```

Sabemos como declarar variables sin problemas, si anteponemos var la variable la hacemos local, en el ámbito del script que estemos desarrollando, incluso, en el ámbito del condicional, del bucle, de la función, del método. Entendido ¿no?, la siguiente sin la palabra var, es una variable que la establecemos global, lo que significa que podremos disfrutar de ella en toda la aplicación, nos referimos toda a todo, ya tenga 300 líneas, como 3 millones de líneas, global. También lo tenemos, ¿no? Seguimos entonces. La siguiente línea, la línea 5 contiene una expresión de this, utilizamos la notación de puntos para adherir a this a un objeto, en este caso a la variable "variable". ¿Lo tenemos todo?, creo que si hasta aquí es casi todo normal. Un detalle muy importante this no es en sí una variable, no le podemos modificar el valor, this es una expresión, una palabra clave que nos ofrece un funcionamiento. Con todo esto calentito en la mano, avanzamos un paso más.


```python
var variable = 'Primera variable';
variable = 'Segunda variable';
this.variable = 'Tercera variable';

console.log(variable);
```

    Tercera variable
    

Sí, sí, el funcionamiento es correcto, no toma la variable local, no toma la variable global, si no toma el objeto this, que como se ha adherido a la variable global porque si llamamos o invocamos a this según la invocación puede arrojar distintos resultados, os acordáis, pues en este caso, this toma todo lo que haya en su ámbito al realizar la invocación en esa ubicación this está ubicado en ámbito global. Espero haberme explicado, pero visualmente queda visto.


```python
var variable = 'Primera variable';
variable = 'Segunda variable';
this.variable = 'Tercera variable';

console.log(variable);
//console.log(this);
```

    Tercera variable
    

Si se elimina el comentario de  la línea 8, podemos observar que tiene this dentro, la profundidad de JavaScript, this recoge todo su ámbito de actuación y vemos que ser adherido a la variable global "variable", y tiene su valor, no nos hagamos la idea de que lo contiene this, no, this solo tiene la forma de llegar, la dirección la identificación, la explicación de como podemos llegar al objeto al que se ha vinculado y como podemos reutilizarlo.

Está claro y es evidente que this no se creó para esto, como he dicho era un ejemplo muy específico del funcionamiento de this, this está creado para funcionar con funciones, por eso es importante comprender la vinculación con objetos.

Entonces que hace this, yo lo entiendo como un marcador, he leído que this devuelve un objeto de la instancia donde se encuentra, he buscado una referencia lo más oficial posible. [En este enlace encontramos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) 

>La palabra clave this se refiere al contexto donde se supone que se ejecuta un fragmento de código, como el cuerpo de una función. Por lo general, se usa en métodos de objetos, donde se refiere al objeto al que está adjunto el método, lo que permite reutilizar el mismo método en diferentes objetos.

Tal como expresado antes, la palabra clave this se merece un estudio en profundidad, y es lo que estoy haciendo, aparte de tener partes bastante confusas que te llevan por caminos que no tienen salida, le ves la necesidad de que exista, ya he llegado a entender el contexto, a qué se refiere cuando hablamos de ejecutar un fragmento en un contexto, algo así como en qué campo jugar. He averiguado y debo recordar que this no es ninguna variable, es una palabra clave, no le podemos cambiar el valor, se adhiere a un objeto y lo mapea, obtiene tanto los datos como su funcionamiento.

He vuelto a releer las guías, ver parte de los videos y creo que una idea empieza a darse forma, a modo ejemplo algo muy sencillo, this trabajando con una función independiente, llamemos función independiente a la función que no está recogida dentro de una clase, otra función o sea método, o cualquier otra estructura, esta función independiente está directamente en el ámbito global, o contexto global.

En breve plasmaré lo que estoy aprendiendo de como se vinculan las funciones a los objetos, existen 4 formas, por defecto, implícitas, explicitas y por constructor. De momento quedémonos con los nombres y veamos las funciones enlazadas por defecto. Las funciones enlazadas por defecto(predeterminadas), son funciones que no están en otro ámbito que no sea global, no están dentro de otro objeto, recordemos que JavaScript es un lenguaje POO, programación orientada a objetos, por lo tanto, todo, todo son objetos, el primero el objeto global veámoslo como todo el lienzo.

```python
function saludar(){
    console.log('Hola this');
}

saludar();
```

    Hola this
    

El script superior muestra una función expresada de forma regular, al no estar vinculada a ningún objeto, la podríamos denominar independiente, o que está dentro del ámbito o contexto global.

Vamos a sumergirnos por un momento en la vida real, estamos en el centro del huracán de una fábrica en producción, con unos compañeros que solicitan soluciones inmediatas a sus problemas y que requieren de soluciones útiles y adecuadas en cada momento, pues bien tenemos es situación en la cabeza, pues nos llega la primera solicitud, nos comunica el departamento de compras que a su aplicación le pasa algo, hasta ahora ha ido perfectamente, pero ahora tiene que pasarle datos a almacén para seguir un proceso productivo y le devuelve el fallo sin que los datos lleguen. Le pedimos que nos envíe el fichero que le devuelve el fallo, por supuesto, siempre después de haber realizado una investigación previa y habiendo descartado cualquier otro fallo que pudiera existir. Tener este nivel de responsabilidad implica tener claros conceptos de seguridad y procedimientos de actuaciones en momento de fallos o errores, nunca, nunca, debemos de intentar solucionar nada sin tener una visión global del problema a eso se llega investigando el problema, toma de información, replicado del problema, solución temporal y/o solución definitiva con proyecto de actualización. Estas son fases básicas que utilizo personalmente, seguramente alguna difiere del uso standard, pero como idea básica y sin venir mucho a cuento me vale para ofreceros una imagen lo más visual posible. Bueno, pues estamos en nuestra fase de replicado del problema y nos llega este script.


```python
// Compras

// ojo estamos creando un objeto, son pares de clave-valor
var pedidorecibido = {
    cantidad: 0,
    modelo: 'model',
    d: function(){
        // print etiqueta
        return 'Se ha recibido pedido de ' + cantidad + ' del modelo ' + modelo;
    }
}

// Logistica

// entrada pedido a logistica
pedidorecibido.cantidad = 200;
pedidorecibido.modelo = 'Ball standard';
//console.log(pedidorecibido.d());  // Hemos encontrado el error en la devolución de esta función
// nos dice que las variables cantidad y modelo n han sido declaradas
```

Después de una revisión exhaustiva del script, concretamos el error en estas líneas de código, nos dice que cuando llamamos a la función d, nos devuelve que los valores de cantidad y modelo no han sido definidos, vamos que no los ve, que no puede interactuar con ellos. ¿Cómo podríamos solventar este problema dando una solución definitiva? Pues contando que este es en proceso fundamental la entrada de mercancía implica el primer paso del proceso productivo, por lo tanto, si nos abstraemos y hacemos un this, nos ponemos en contexto, si el primer paso del proceso productivo falla, falla todo ¿no?, si el flujo de datos de este script no es capaz de fluir el resto de funciones, clases, condicionales, y demás código que tengamos a continuación y que pretendan utilizar este flujo también fallara. Debemos evitarlo, y tiene mucho que ver con eso ponerse en contexto.

Si nos damos cuenta, tanto cantidad como modelo son claves incluidas en un objeto, pretendemos utilizar los valores para transmitir a otros departamentos, en este caso la cantidad y el modelo del artículo que ha entrado y que el proceso productivo puede continuar sin problema.

Si revisamos las características y los usos de this, es una situación que le va al pelo, si adhiere a un objeto lo mapea y permite el uso de lo que hay dentro, en pocas palabras y no muy técnicas, pero mi mente empieza a absorberlo. Pues tenemos el error, tenemos la solución, veamos como hacerlo y el resultado, no es nada complicado. Le vamos a decir a this que se adhiera tanto a cantidad, como a modelo, y como se lo decimos en un return que retorna el valor para que otras estructuras puedan utilizarlo, en teoría habremos solucionado el problema. Veámoslo.


```python
// Compras

// ojo estamos creando un objeto, son pares de clave-valor
var pedidorecibido = {
    cantidad: 0,
    modelo: 'model',
    d: function(){
        // print etiqueta
        return 'Se ha recibido pedido de ' + this.cantidad + ' articulos del modelo ' + this.modelo;
    }
}

// Logistica

// entrada pedido a logistica
pedidorecibido.cantidad = 200;
pedidorecibido.modelo = 'Ball standard';
console.log(pedidorecibido.d());
```

    Se ha recibido pedido de 200 articulos del modelo Ball standard
    

Diferente, ¿no?, nos ha devuelto el resultado que esperábamos, la gente de compras ha respirado tranquila y vemos que el proceso puede continuar, tenemos los datos disponibles para usar. This ha mostrado su capacidad de adaptarse al contexto y hacer su trabajo, proporcionar un conector al mando de la Play, os acordáis. Vamos a seguir, aunque creo que llegados aquí ya podemos tener una visión mucho más profunda de this y sus cualidades, vamos a seguir viéndolas.


```python
// Compras

// ojo estamos creando un objeto, son pares de clave-valor
var pedidorecibido = {
    cantidad: 0,
    modelo: 'model',
    d: function(){
        console.log(this);
        // print etiqueta
        // return 'Se ha recibido pedido de ' + this.cantidad + ' articulos del modelo ' + this.modelo;
    }
}

// Logistica

// entrada pedido a logistica
pedidorecibido.cantidad = 200;
pedidorecibido.modelo = 'Ball standard';
console.log(pedidorecibido.d());
```

{ cantidad: 200, modelo: 'Ball standard', d: [Function: d] }
undefined
    

Como broche final a este script que estábamos discutiendo, llamamos exclusivamente a this para que nos diga lo que tiene dentro, es evidente que tenemos que utilizar this, se adhiere al objeto y nos permite gestionar todo lo que contiene, también es evidente que nos proporciona no solo datos del tipo que sean, number, string, incluso funciones. Una pasada de verdad. Un poquito más y termino, aunque si puedo ser sincero me va a dar mucha pena, es un tema complejo sí, en definitiva como mencione anteriormente estamos llegando a las entrañas del funcionamiento de JavaScript, pero es un tema superinteresante, ver el flujo es como ver correr el agua en un río, es libre, solo tropieza con los elementos que hay en el camino, pero siempre encuentra la forma de continuar. Entonces continuamos, ¿no?


```python
// Compras

// ojo estamos creando un objeto, son pares de clave-valor
var pedidorecibido = {
    cantidad: 0,
    modelo: 'model',
    d: function(){
        console.log(this);
        // print etiqueta
        return 'Se ha recibido pedido de ' + this.cantidad + ' del modelo ' + this.modelo;
    },
    almacen: function() {
        console.log(this);
    }
}

// entrada pedido a logistica
pedidorecibido.cantidad = 200;
pedidorecibido.modelo = 'Ball standard';
console.log(pedidorecibido.d());
console.log(pedidorecibido.almacen());
```

{
  cantidad: 200,
  modelo: 'Ball standard',
  d: [Function: d],
  almacen: [Function: almacen]
}
Se ha recibido pedido de 200 del modelo Ball standard
{
  cantidad: 200,
  modelo: 'Ball standard',
  d: [Function: d],
  almacen: [Function: almacen]
}
undefined
    

Seguimos solventando problemillas en la fábrica y nos solicita el almacén a ver si es posible utilizar los datos de compras para saber cuantas cajas pedir en total para encajar todos los artículos que lleguen. Viendo la utilidad de this, ya nos pueden pedir no, hemos modificado un poco el script y si os dais cuenta el this dentro de la función d(), ya ha tomado la nueva función, se adhiere al objeto y nos proporciona capacidad de uso del objeto completo. Acabamos esta función y creo que this, aunque queda mucho por utilizar, aprender, estropear y practicar, ya ha sido presentado, y por mí si se me permite me he enamorado de esta expresión. Mi capacidad de ver JavaScript ha aumentado mucho en pocos días y eso me da mucha paz, afronto el futuro con bastante más seguridad, aun sabiendo que lo que se puede vislumbrar es un nivel complicado. Acabemos con nuestro trabajo en la fábrica y a descansar que creo que nos lo hemos merecido. 

Bueno, pues como decía, en la fábrica el departamento de almacén necesita saber cuantas cajas pedir cuando lleguen los pedidos, entonces hemos pensado crear otra función que con los datos del pedido, estandarice el formato de caja y el proceso productivo no se detenga, hemos hablado con el departamento de ventas para saber como distribuir el pedido según el color que tiene más venta y nos han pasado un porcentaje a aplicar sobre el pedido recibido. Pues no nos queda más que escribirlo.


```python
// ojo estamos creando un objeto, son pares de clave-valor
var pedidorecibido = {
    cantidad: 0,
    modelo: 'model',
    d: function(){
        //console.log(this);
        // print etiqueta
        return 'Se ha recibido pedido de ' + this.cantidad + ' articulos del modelo ' + this.modelo;
    },
    almacen: function() {
        //console.log(this);
        totalarticulosrecibidos = this.cantidad;
        // Almacen expone que un palet de formato 5 ud, son 50 cajas y sale más economico, a 
        // partir de necesitar más del 75% de un pallet interesa solicitar 1 completo.
        capacidadcaja = 5;
        totalpedidocompras = distribution(totalarticulosrecibidos);
        //console.log(totalpedidocompras);


        function distribution(totalarticulosrecibidos){

            totalcajas = 0;
            // Aseguremonos que trabajamos siempre con datos adecuados, quiero enteros no flotantes
            // Ventas: 25% total a rojo, resto 25 % a verde, resto 25% a azules, resto a negros
            articulosrojos = Number.parseInt(totalarticulosrecibidos / 4 );
            articulosverdes = Number.parseInt((totalarticulosrecibidos - articulosrojos) / 4 );
            articulosazules = Number.parseInt((totalarticulosrecibidos - articulosrojos - articulosverdes) / 4 );
            articulosnegros = Number.parseInt(totalarticulosrecibidos - articulosrojos - articulosverdes);

            if(articulosrojos){
                cajasarticulosrojos = articulosrojos / capacidadcaja;
                //console.log('Necesitamos para articulosrojos :' + cajasarticulosrojos + ' cajas'  );
                totalcajas += cajasarticulosrojos;
            }else{
                'Error acceso a datos'
            };
            if(articulosverdes){
                cajasarticulosverdes = articulosverdes / capacidadcaja;
                //console.log('Necesitamos para articulosverdes :' + cajasarticulosverdes + ' cajas'  );
                totalcajas += cajasarticulosverdes;
            }else{
                'Error acceso a datos'
            };
            if(articulosazules){
                cajasarticulosazules = articulosazules / capacidadcaja;
                //console.log('Necesitamos para articulosazules :' + cajasarticulosazules + ' cajas'  );
                totalcajas += cajasarticulosazules;
            }else{
                'Error acceso a datos'
            };
            if(articulosnegros){
                cajasarticulosnegros = articulosnegros / capacidadcaja;
                //console.log('Necesitamos para articulosnegros :' + cajasarticulosnegros + ' cajas'  );
                totalcajas += cajasarticulosnegros;
            }else{
                'Error acceso a datos'
            };
            return 'Necesitamos un total de ' + Number.parseInt(this.totalcajas) + ' cajas formato 5 ud';
        }
        function pedidocompras(totalcajas){
            console.log('Necesidades de almacen detectadas : Cajas necesarias ' + Number.parseFloat(this.totalcajas).toFixed(4));
            capacidadpallet = 50;
            if(this.totalcajas){
                palletnecesarios = (this.totalcajas*100 / capacidadpallet) / 100;
                if (palletnecesarios >= 0.75 && palletnecesarios < 0.99 ){
                    return 'Necesitamos pedir 1 pallet como mínimo, cubrimos el ' + Number.parseFloat(palletnecesarios).toFixed(2) + '% supera el 0.75% estipulado';
                } else if( palletnecesarios > 1){
                    return 'Aqui entraria una logica de compras ajustar precios por pedido. En un futuro...'
                } else {
                    return 'Es mejor pedir cajas sueltas, solo cubre ' + Number.parseFloat(palletnecesarios).toFixed(2) + '% no llega al 0.75% estipulado';
                }
            } else {
                return 'Error lectura de datos';
            }
        }

        return pedidocompras();    
    }
}

// entrada pedido a logistica
pedidorecibido.cantidad = 100;
pedidorecibido.modelo = '';
console.log(pedidorecibido.d());
console.log(pedidorecibido.almacen());
```

    Se ha recibido pedido de 100 articulos del modelo 
    Necesidades de almacen detectadas : Cajas necesarias 22.8000
    Es mejor pedir cajas sueltas, solo cubre 0.46% no llega al 0.75% estipulado
    

He disfrutado lo primero que he sentido cuando mi objetivo se ha cumplido, no solo he conocido a this, ya vemos que es fundamental para el tráfico de flujo, si no lo tuviéramos, no podríamos dirigir el flujo de la entrada como el valor de cantidad, hacia la función que lo requiere por parámetro, los parámetros a las funciones se pasan por valor, recordemos. Bueno, eso, no podría dirigir ese valor hacia esa función, con lo cual esta estructura de código se rompería retornando un error. Hemos utilizado this en una estructura que seguramente sea muy mejorable y con el tiempo yo mismo veré y detectaré a simple vista barbaridades que puedo haber cometido, pero compañeros en estos momentos, con el ejercicio resuelto, me siento muy satisfecho y mucho más seguro, me siento capaz de seguir creciendo, conozco un poco más JavaScript y eso es muy gratificante. Creo y es mi opinión personal que merece la pena cada minuto que le he dedicado. Gracias.

Acabamos de expresar un script en construcción creo que solo leyendo el código podemos hacernos una idea, sin reflejar comentarios de los que pretende o cuál es el objetivo de este script, si es así empezamos a dar forma a nuestro estilo de trabajo y como sabemos y debemos intentar hacer es que el código sea tan explicativo como te sea posible, por un futuro más cómodo para ti y para los demás la idea es bonito solo expresándola, imaginémonos el resultado de coger un script nuestro, no mezclemos a nadie, nuestro que usamos personalmente para una tarea y que de aquí a 15 meses debemos de abrir para actualizar, la sorpresa que nos podemos encontrar si no somos capaces de entendernos nosotros mismos, una vez consigamos eso, podemos hacer que los demás nos entiendan y nos sigan. Es una máxima en mi objetivo personal, pero creo que debe ser objetivo principal de todos si queremos llegar a ser auténticos profesionales. Considero que un profesional es una persona que no solo saber hacerlo, sino que es capaz de enseñarlo, algo que es muy, muy difícil, si eres capaz de enseñar es que lo tienes muy dentro, y por eso agradezco estas secciones, darte cuenta si lo tienes dentro o como de complicado se está haciendo mostrándolo en estos documentos es algo muy revelador. Os animo a terminarlo, de la forma que sea terminarlo y ver vuestro propio ámbito, según te ubiques actúa, como this.

Bueno, después del sermón anterior, volvamos a nuestro objetivo this. Ya hemos visto quien es y que hace, en estos días he visto crecer mi caja de herramientas, pero para this he decidido ponerlo en una estantería por su versatilidad y utilidad en diversos momentos, con this no hay una plantilla, hace esto, se utiliza de esta forma, digamos que this es como cuando escribimos con lápiz, la goma debe estar encima de la mesa, this tiene que estar pegado a nuestros dedos, queremos controlar los clics de un botón en concreto de una página web en concreto, ahí tiene que estar this, queremos ver si este usuario visita esta página, o lee este artículo en concreto, ahí está this. Creo que suficientes razones para dedicarle todo el tiempo del mundo, con this contemplas un amanecer de posibilidades, vamos a explotarlas.