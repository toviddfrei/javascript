let milista = ['velma', 'exploradora', 'jane', 'john', 'harry'];

console.log('with loop for...');

for( i=0; i<milista.length; i++){
    console.log(milista[i]);
}

console.log('with loop while...');

i=0;
while( i<milista.length){
    console.log(milista[i]);
    i++;
}

console.log('arrow function...');

let greeting = () => {
    console.log("Hola mundo");
}

greeting();

