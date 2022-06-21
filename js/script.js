var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var input3 = document.querySelector("#input3");
var input4 = document.querySelector("#input4")
var input = document.querySelectorAll("input")
var clear = document.querySelector("#clear");
var content = document.querySelector("#content")
var operator = document.querySelectorAll(".operator")
clear.addEventListener("click", function clear() {
    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value="";
})
input.forEach(function (element) {
    element.addEventListener("focus", function () {
        element.style.color = "yellow";
        element.style.backgroundColor = "black";
    })
    element.addEventListener("blur", function () {
        element.style.color = "black";
        element.style.backgroundColor = "white";
    })
})
operator.forEach(function (el) {
    el.addEventListener("click", function clac() {
        var operand = el.textContent;
        if (isNaN(input1.value) || isNaN(input2.value)) {
            alert("please enter a valid number")
            input1.value = "";
            input2.value = "";
            input3.value = "";
            input4.value="";
            
        }
        else if (input1.value == "" || input2.value == "") {
            alert("please enter a value")
        }
        else {
            switch (operand) {
                case "+":
                    input4.value= operand;
                    input3.value = parseInt(input1.value) + parseInt(input2.value);
                    break;
                case "-":
                    input4.value=operand;
                    input3.value = input1.value - input2.value;
                    break;
                case "*":
                    input4.value=operand;
                    input3.value = input1.value * input2.value;
                    break;
                case "/":
                    input4.value=operand;
                    input3.value = input1.value / input2.value;
                    break;
                case "%":
                    input4.value=operand;
                    input3.value = input1.value % input2.value;
                    break;
            }
        }
    })
})
