function fibo(){
 var termo = parseInt(document.getElementById('numero').value);
  var resposta = document.getElementById('resposta');
  var penultimo=0, ultimo=1;
  var numero;
	document.write("<b>WhileとLoopsを使ったフィボナッチ </b><br />");
	var penultimo=0, ultimo=1;
    		document.write(termo + "より数字が低いフィボナッチ数列"+"<br />");
		while(penultimo<termo)
		{
			document.write(penultimo + "<br />");
			  numero = ultimo + penultimo;
                          penultimo = ultimo;
                          ultimo = numero;
		}
   
  resposta.innerHTML=numero;
}
