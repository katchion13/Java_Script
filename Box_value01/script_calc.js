  function calculate() {
            try
            {
            var value1 = parseInt(validate(document.getElementById("value1").value.trim()));
            var value2 = parseInt(validate(document.getElementById("value2").value.trim()));
            document.getElementById("result").value = operate(value1, value2);
            }
            catch (err) {
                alert("There was a problem: " + err.messaqge);
            }
        }
            catch (err) {
                alert("There was a problem: " + err.messaqge);
            }
        }

        function operate(value1, value2) {
            if (operator == addition) {
                return value1 + value2;
            } else if (operator == subtraction) {
                return value1 - value2;
            } else if (operator == division) {
                return value1 / value2;
            } else if (operator == multiplication) {
                return value1 * value2;
            }

            function validate(value) {
                if (value == null || value == "") {
                    alert("Required Field");
                    return 0;
                } else if (isNaN(value)) {
                    alert("Must be a Number Field");
                    return 0;
                } else return value;
            }
        }