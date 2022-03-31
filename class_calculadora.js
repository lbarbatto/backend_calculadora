class Calculadora {
    
    constructor () {
    this.n = [],
    this.opera = ""
    }

    calcula(n, opera) {
        let resulta;
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
    }
    
}

module.exports = Calculadora;

// function calcula(n, opera) {
//     var resulta = 0;
//     switch (opera) {
//         case "p":
//             resulta = n[0] + n[1];
//             return resulta;

//         case "m":
//             resulta = n[0] - n[1];
//             return resulta;

//         case "t":
//             resulta = n[0] * n[1];
//             return resulta;

//         case "d":
//             resulta = n[0] / n[1]
//             return resulta;
    
//         default:
//             break;
//     }
// }








// function calcula() {
//     let entrada;
//     console.log(n);
    
//     while (entrada != '=') {
//         entrada = 1;
//         n.push(entrada);
//         entrada = '='
//     }

//     console.log(n);   
// }

