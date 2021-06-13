  function onButtonClick2() {
      selindex = document.form2.Select2.selectedIndex;
      target = document.getElementById("output2");
      switch (selindex) {
        case 0:
          target.innerHTML = "100円<br/>";
          break;
        case 1:
          target.innerHTML = "110円<br/>";
          break;
        case 2:
          target.innerHTML = "130円<br/>";
          break;
        case 3:
          target.innerHTML = "140円<br/>";
          break;
        case 4:
          target.innerHTML = "150円<br/>";
          break;
      }
    }
