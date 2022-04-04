class Calculadora {

    addChar(input, character) {
        if(input.value == null || input.value == "0")
            input.value = character
        else
            input.value += character
    };
    
    cos(form) {
        form.display.value = Math.cos(form.display.value);
    };
    
    sin(form) {
        form.display.value = Math.sin(form.display.value);
    };
    
    tan(form) {
        form.display.value = Math.tan(form.display.value);
    };
    
    sqrt(form) {
        form.display.value = Math.sqrt(form.display.value);
    };
    
    ln(form) {
        form.display.value = Math.log(form.display.value);
    };
    
    exp(form) {
        form.display.value = Math.exp(form.display.value);
    };
    
    deleteChar(input) {
        input.value = input.value.substring(0, input.value.length - 1)
    };
    
    percent(input) {
        val = input.value;
        input.value = input.value + "%";
    };
    
    changeSign(input) {
        if(input.value.substring(0, 1) == "-")
        input.value = input.value.substring(1, input.value.length)
        else
        input.value = "-" + input.value
    };
    
    compute(form) {
        form.display.value = eval(form.display.value);
    };
    
    square(form) {
        form.display.value = eval(form.display.value) * eval(form.display.value)
    };
    
    checkNum(str) {
        for (var i = 0; i < str.length; i++) {
            var ch = str.charAt(i);
            if (ch < "0" || ch > "9") {
                if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "." && ch != "(" && ch!= ")" && ch != "%") {
                    alert("invalid entry!")
                    return false
                }
            }
        }
        return true
    };
};

module.exports = new Calculadora();