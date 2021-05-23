function fibo(){
 var n1 = parseInt(document.getElementById('n1').value);
 var n2 = parseInt(document.getElementById('n2').value);
 var n3 = parseInt(document.getElementById('n3').value);
 var termo1 = parseInt(document.getElementById('numero').value);
 var resposta = document.getElementById('resposta');
 var termo=(n1 + n2+  n3);
 var numero;

 var primeiro=n1, penultimo=n2, ultimo=n3; 
   	document.write("<b>WhileとLoopsを使ったフィボナッチ </b><br />");
        document.write(termo1 + "より数字が低いフィボナッチ数列"+"<br />");
 document.write(primeiro + "<br />");

while(penultimo<termo1)
			{
			document.write(penultimo + "<br />");
			  numero = ultimo + penultimo;
                          penultimo = ultimo;
                          ultimo = numero;
		}
   
  resposta.innerHTML=numero;

}