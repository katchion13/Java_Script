document.addEventListener("DOMContentLoaded", function(){ // aguarda o DOM carregar

   var anojp = document.querySelector("select[name='ano']"); // seleciona o SELECT
   anojp.onchange = result; // evento change do SELECT

   function passCheck(result){
  if (result > 2019){
    if (result > 90){
      console.log('令和です');
        }else{
      console.log('修正して再提出してください');
    }
  }else{
    console.log('不合格です');
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


