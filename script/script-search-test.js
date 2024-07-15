// Montaje y entrega de una nota.

// title : Tema a desarrollar
// date : Día redacción inicial
// update : Día de actualización
// texto : texto > a 4000 caracteres

// Situación, un cientifico loco te ha contratado para organizar sus notas
// tiene notas de nose cuando, todas repartidas entre un pequeño portatil
// y su desktop, lo unico que tienen en comun es que todas estan estructuradas
// de la misma forma, menos mal, nos solventa el primer paso para este tipo 
// de trabajos, la estructura esta detallada arriba.

// El objetivo del contrato es que le entregues una aplicación que pueda 
// obtener los datos que busca inmediatamente, la pregunta de rigor, y usted?
// como buscaría los datos.

// Pues, buscando los títulos, he sido muy expecifico en ellos, me valdría 
// buscar titulos enteros, o incluso partes coincidentes.

// Ahora mismo, vemos un mundo de esta situación ¿no?
// Pues pongamos en situación y a trabajar, 


// Ahi que resolver un monton de cuestiones, primero empezaria por la salida
// Pensemos como desarrolladores, entrada, comportamiento, salida.
// la entrada casi la tenemos clara, el comportamiento vendra dado segun la salida
// que busquemos.

// La salida es un objeto que contenga toda esa nota, por lo tanto, ahi que crear objeto por
// nota y luego tener la capacidad de iterar por esos objetos buscando el titulo o la coincidencia

// En este caso utilizaria una clase que me permitiera crear instancias de cada objeto, añadiendo
// los valores especificos automaticamente a cada instancia, de momento no quiero llegar hay, y me
// conformo con trabajar con 4 objetos que he encontrado manuscritos en unas servilletas.


const objeto1cientificoloco = {
    tittle : 'Loop for',
    date : '01/01/2018',
    update : '02/01/2019',
    texto : 'Ahora que has conocido a while, vamos a ver a do...while, este loop cambia la dinamica de funcionamiento, hasta el momento elemento todos los loop, comprueban la condicional si es verdadera entran al bloque de codigo y lo ejecutan si no lo es ni se asoman siquiera, bueno pues do...while, como minimo se asoma una vez, hace una primera pasada, ya que su condicional se comprueba al final de la iteración, por lo tanto nos permite ejecutarlo como minimo una vez, algo que no tenemos con el resto, nos permite dar salida a un flujo de datos que no tenemos la certeza de que pueda retornar verdadero. Creo que el ejemplo comparativo que vamos a ver nos lo aclarara.'
}

const objeto2cientificoloco = {
    tittle : 'Loops while elemento',
    date : '01/01/2020',
    update : '01/01/2021',
    texto : 'Algo diferente con un mismo resultado, ¿no?. Siempre con while hay que marcarle de cerca. While solo necesita una condición para ponerse en marcha y ya esta, si nosotros no lo dirigimos es un caballo desbocado, en ocsiones nos puede ser util pero con mucho cariño, tal como hemos visto que for, requiere algunos condicionantes para convertirse en infinito, while propicia esta situación si no estamos muy atentos.'
}

const objeto3cientificoloco = {
    tittle : 'Tema a desarrollar',
    date : '01/01/2022',
    update : '01/01/2023',
    texto : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur lacinia sem eu elementum. Proin in laoreet nisi, ut vulputate elemento enim. Suspendisse egestas enim et egestas egestas. Duis eget felis tellus. Nunc vestibulum varius dolor id dignissim. Suspendisse potenti. Morbi vitae diam quis mi accumsan scelerisque. In elit nisi, venenatis ac egestas sit amet, pretium et nunc. Curabitur dolor lorem, suscipit id eros vel, mattis euismod erat. Vestibulum orci lorem, ultricies nec nibh a, cursus feugiat lorem. Cras imperdiet ipsum lectus. Aliquam ut metus iaculis sem pretium tincidunt. Vestibulum ullamcorper interdum justo ac vulputate. Nam efficitur volutpat velit in euismod. Suspendisse eu ligula a mi semper laoreet. Phasellus quam risus, blandit quis neque id, vehicula lobortis ipsum. Quisque tortor turpis, condimentum eu turpis ac, ullamcorper molestie velit. Morbi sollicitudin sapien non elit suscipit, sit amet pellentesque nulla euismod. Nunc a viverra diam. Sed imperdiet urna turpis, ut blandit sapien molestie sed. Praesent id ipsum urna. Phasellus lobortis leo diam, nec gravida velit pellentesque et. Morbi luctus, ante at facilisis fermentum, arcu enim rhoncus leo, eu rhoncus lorem lectus ut dolor. Nam sed odio quis lectus molestie fringilla. Phasellus lectus magna, tristique non gravida non, accumsan id lacus. Curabitur id sodales augue. Sed maximus purus in rhoncus facilisis. Praesent sit amet egestas sem. Nullam hendrerit lacus vitae risus egestas, vel tristique ex imperdiet. Etiam fringilla turpis ac lorem viverra tincidunt. Suspendisse rutrum congue dolor. Pellentesque fermentum, dui sit amet condimentum scelerisque, sapien nisi hendrerit nisi, non gravida nibh orci eu mi. Ut id dolor congue, auctor ligula non, volutpat neque. Sed feugiat risus non lacus tempus, consequat posuere nisi suscipit. Nunc sed condimentum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent eleifend egestas porta. Ut ac dolor placerat, hendrerit nisi a, pretium risus. Suspendisse eu dui tortor. Mauris commodo semper dolor a gravida. Phasellus ac rutrum ipsum. Ut eu eros massa. Maecenas et nibh augue. Mauris in porta ex, id gravida velit. Quisque gravida convallis risus, vel consequat elit luctus sit amet. Nam nec auctor enim. Maecenas faucibus nibh neque, non pretium nunc blandit ut. Integer mattis est nec mauris pellentesque, sodales vulputate lorem porta. Nunc ac ultricies neque.'
}

const objeto4cientificoloco = {
    tittle : 'Loops do...while',
    date : '01/01/2020',
    update : '01/01/2021',
    texto : 'Como vemos, podemos crear nuestras historias, repetirlas, modificarlas, con forEach() se abre un mundo de posibilidades, reduces o automatizas tantos pasos que te da tiempo a centrarte en tu objetivo, tienes disponible el elemento completamente para ti, iterara por toda la matriz, pero la expecificación de trabajar uno a uno ya directamente en una función personalizada para el, me abstrae a que podriamos crear condicionales individuales, para tratar cada elemento, podria ser un panel de control para tratar a los usuarios personalmente, obtenemos otra herramienta que merece un solo estante para ella, cuando hablemos de for loop  y familia, tiene su estante bien etiquetado, uso a diario y no te aburres, ya me diras, me han dado un juguete. Seguir investigando en el uso de cada uno de ellos es fundamental para comprenderlos, pero sobre todo para ponerlos en practica si no en producción todavía, muy pronto seguro.'
}

var objetos = [ objeto1cientificoloco, objeto2cientificoloco, objeto3cientificoloco, objeto4cientificoloco ];

// form user promt add search
let re = /loop/; // Regex return form
console.log('Busqueda solicitada : ' + re );

objetos.forEach((objeto) => {

    if( objeto ){
        if(objeto.tittle.match(re)){
            console.log(objeto.tittle);
            console.log(objeto.texto);
        } else if(objeto.texto.match(re)){
            console.log(objeto.tittle);
            searchtexto = objeto.texto.match(re);
            reporttexto = objeto.texto.slice(searchtexto.index, searchtexto.index + 100); // informe previo + 100 caracteres
            console.log('Coincidencia encontrada, informe previo : ' + reporttexto + ' ...');
        }else{
            console.log('No hay conincidencias en el articulo : ' + objeto.tittle);
        }
    }
})