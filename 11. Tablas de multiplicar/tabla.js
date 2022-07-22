function label(){
   
    var n= parseInt(document.tablon.n1.value);
    while(n<1 || n>10);
    for( var i=1; 1<=10; i++)
    {
       document.write("   " +n+"x"+i+"="+n*i+ "<br>");
        
    }
}