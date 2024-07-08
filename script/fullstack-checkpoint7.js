function addnumber(numA, numB, numC, numD){
    var result = ( numA + numB ) * ( numC + numD );
    
    if (result > 50 ){
        console.log('¡El número es mayor que 50!');
    } else {
        console.log('¡El número es menor que 50!');
    }
}

addnumber(1,2,3,4);
addnumber(10,20,30,40);