document.addEventListener("DOMContentLoaded", function(){ // aguarda o DOM carregar

   var ano= document.querySelector("select[name='ano']"); // seleciona o SELECT
   var anojp = document.querySelector("input[name='anojp']"); // seleciona o INPUT quantidade
   ano.onchange = multi; // evento change do SELECT
   anojp.oninput = multi; // evento oninput do INPUT quantidade

   function passCheck(ano){
  if (ano > 2019){
    if (ano > 90){
      console.log('令和です');
      console.log('おめでとうございます');
    }else{
      console.log('修正して再提出してください');
    }
  }else{
    console.log('不合格です');
    console.log('残念でした');
  }
}
});
