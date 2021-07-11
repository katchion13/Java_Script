document.addEventListener("DOMContentLoaded", function(){ // aguarda o DOM carregar

   var ano= document.querySelector("select[name='ano']"); // seleciona o SELECT
   var anojp = document.querySelector("input[name='anojp']"); // seleciona o INPUT quantidade
   ano.onchange = result; // evento change do SELECT
   anojp.oninput = result; // evento oninput do INPUT quantidade

   function passCheck(result){
  if (result > 2019){
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
