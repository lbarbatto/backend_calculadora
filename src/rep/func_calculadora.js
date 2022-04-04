module.exports = function calcula(n, opera) {
    var resulta = 0;
    switch (opera) {
        case "p":
            resulta = n[0] + n[1];
            return resulta;

        case "m":
            resulta = n[0] - n[1];
            return resulta;

        case "t":
            resulta = n[0] * n[1];
            return resulta;

        case "d":
            resulta = n[0] / n[1]
            return resulta;
    
        default:
            break;
    }
};
