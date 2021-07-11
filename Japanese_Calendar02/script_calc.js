document.addEventListener("DOMContentLoaded", function(){ // aguarda o DOM carregar

   var sel = document.querySelector("select[name='papel']"); // seleciona o SELECT
   var qtd = document.querySelector("input[name='quantidade']"); // seleciona o INPUT quantidade
   sel.onchange = result; // evento change do SELECT
   qtd.oninput = result; // evento oninput do INPUT quantidade

   function passCheck(result){
  if (result > 80){
    if (result > 90){
      console.log('合格です');
      console.log('おめでとうございます');
    }else{
      console.log('修正して再提出してください');
    }
  }else{
    console.log('不合格です');
    console.log('残念でした');
  }
}

passCheck(78);
>> 不合格です
>> 残念でした

passCheck(84);
>> 修正して再提出してください

passCheck(98);
>> 合格です
>> おめでとうございます
});
