var $ = function(id) { return document.getElementById(id); }

		function leap_year() {
			var year = $("year");
			var ans;
			var leap = year.value % 4 == 0 && year % 100 != 0 || year % 400 == 0
			if (leap == true)
				ans = year.value + " は閏年です";
			else
				ans = year.value + " は閏年ではありません";
			$("text_where").innerHTML = ans;
		}

		function timeInterval() {
			setInterval("displayTime()", 1000);
		}

		function displayTime() {
			var time = new Date();
			var tm = time.toLocaleTimeString();
			var str = "現在の時間: " + tm;
			$("time_output").innerHTML = str;
		}