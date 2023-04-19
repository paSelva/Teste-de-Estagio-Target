var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i < 50; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
function procuraValor(lista,elemento){
    if(lista.lastIndexOf(elemento)>=0){
        return "Numero esta na sequencia de fibonacci, no indice"+lista.lastIndexOf(elemento)>=0
    } else{
        return "Numero não esta na sequencia."
    }    
}
procuraValor(fibonacci,10);