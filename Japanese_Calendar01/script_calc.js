document.addEventListener("DOMContentLoaded", function(){ // aguarda o DOM carregar

   var result= document.querySelector("select[name='ano']"); // seleciona o SELECT
   var anojp = document.querySelector("input[name='anojp']"); // seleciona o INPUT quantidade
   sel.onchange = multi; // evento change do SELECT
   qtd.oninput = multi; // evento oninput do INPUT quantidade

   function passCheck(result){
  if (result > 2019){
    if (result > 90){
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
