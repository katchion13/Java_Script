
document.addEventListener("DOMContentLoaded", function(){ // aguarda o DOM carregar

   var sel = document.querySelector("select[name='papel']"); // seleciona o SELECT
   var qtd = document.querySelector("input[name='quantidade']"); // seleciona o INPUT quantidade
   sel.onchange = multi; // evento change do SELECT
   qtd.oninput = multi; // evento oninput do INPUT quantidade

   function multi(){
      var papel = papel.value;
      var quant = qtd.value; // valor do INPUT quantidade
      var res = papel * quant; // faz a multiplicação
      
   }

});
