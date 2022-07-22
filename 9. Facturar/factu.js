function nota(){

    var a1= parseFloat(document.fact.varticulo.value);
    var a2= parseFloat(document.fact.cantidad.value);
    var a3=parseFloat(document.fact.valortotal.value);

    document.fact.valortotal.value= a1 * a2 ;
}