module.exports = function calcula(n, opera) {
    var resulta = 0;
    switch (opera) {
        case "p":
        case "+":
            resulta = n[0] + n[1];
            return resulta;

        case "m":
        case "-":
            resulta = n[0] - n[1];
            return resulta;

        case "t":
        case "*":
            resulta = n[0] * n[1];
            return resulta;

        case "d":
        case "/":
            resulta = n[0] / n[1]
            return resulta;
    
        default:
            break;
    }
};
