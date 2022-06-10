export default class Calculadora {
    static soma(a, b) {
        return a + b;
    }
    static sub(a, b) {
        return a - b;
    }
    static div(a, b) {
        return a / b;
    }
    static mult(a, b) {
        return a * b;
    }
    static mdc(a, b) {
        let resto;
        do {
            resto = a % b;
            a = b;
            b = resto;

        } while (resto != 0);
        return a;
    }
    static raizQuadrada(a) {
        return Math.sqrt(a);
    }
    static potenciacao(a, b) {
        return Math.pow(a, b)
    }
}