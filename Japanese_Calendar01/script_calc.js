document.addEventListener("DOMContentLoaded", function(){ // aguarda o DOM carregar

   var ano= document.querySelector("select[name='ano']"); // seleciona o SELECT
   var anojp = document.querySelector("input[name='anojp']"); // seleciona o INPUT quantidade
   sel.onchange = multi; // evento change do SELECT
   qtd.oninput = multi; // evento oninput do INPUT quantidade

   function multi(){
      var ano_cal = ano.value;
      var anojp_cal = anojp.value; // valor do INPUT quantidade
      var res = ano_cal * anojp_cal; // faz a multiplicação
      document.querySelector("input[name='valor']").value = !isNaN(res) ? res.toFixed(0).replace() : 0;
   }

});
