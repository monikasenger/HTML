function calculate() {
    var input = document.getElementById("numberInput").value;
    var output = document.getElementById("output");
    var message = "";

    if (input < 1) {
        message = "Enter a positive value";
    } else if (input % 2 == 0) {
        message = "The next 3 even numbers are:->    " + (parseInt(input)+2) + ", " + (parseInt(input)+4) + ", " + (parseInt(input)+6);
    } else {
        message = "The next 3 odd numbers are:->    " + (parseInt(input)+2) + ", " + (parseInt(input)+4) + ", " + (parseInt(input)+6);
    }

    output.innerHTML = message;
} 