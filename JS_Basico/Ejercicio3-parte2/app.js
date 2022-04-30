// En este segundo ejercicio, tendréis que crear un bucle que haga 10 iteraciones y en cada una indique el número de esta. Las iteraciones 2, 3, 5 y 7 deben imprimir en su lugar "Número primo".


for (let i= 0; i < 11; i++){
    if (i==0){
        console.log(i);
        continue;
    } else if (i == 1){
        console.log(i);
        continue;
    } else {
        for (let j = 2; j < i; j++ ){
            if ( i % j == 0 ){
                console.log(i);
                continue;
            }
        }
        console.log("Número primo");
    }
    
}