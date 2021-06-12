  function onButtonClick() {
      selindex = document.form1.Select1.selectedIndex;
      target = document.getElementById("output");
      switch (selindex) {
        case 0:
          target.innerHTML = "オレンジジュース:100円<br/>";
          break;
        case 1:
          target.innerHTML = "アップルジュース:110円<br/>";
          break;
        case 2:
          target.innerHTML = "お茶:130円<br/>";
          break;
        case 3:
          target.innerHTML = "コーヒー:140円<br/>";
          break;
        case 4:
          target.innerHTML = "ココア:150円<br/>";
          break;
      }
    }