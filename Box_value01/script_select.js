 function onButtonClick() {
      target = document.getElementById("output");
      target.innerHTML ="";

      for (i = 0; i < document.form1.Select1.options.length; i++) {
        if (document.form1.Select1.options[i].selected == true) {
          target.innerHTML += document.form1.Select1.options[i].text + "が選択されています。<br/>";
        }
      }
    }
