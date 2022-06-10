import assert from "assert";
import chai from "chai";
import Calculadora from "../src/Calculadora.js";

const expect = chai.expect;

describe("testes de soma", () => {
    it("deve somar 4 e 5 resultando em 9", () => {
        let result = Calculadora.soma(4, 5);
        expect(result).to.be.equals(9);
    })
    it("deve somar dois números", () => {
        expect(Calculadora.soma(-5, 5)).to.be.equals(0);
        expect(Calculadora.soma(5, 5)).to.be.equals(10);
        expect(Calculadora.soma(0, 0)).to.be.equals(0);
        expect(Calculadora.soma(-5, -3)).to.be.equals(-8);
        expect(Calculadora.soma(-5, 0)).to.be.equals(-5);

    })
})

describe("testes de subtração", () => {
    it("deve subtrair 4 e 5 resultando em -1", () => {
        let result = Calculadora.sub(4, 5);
        expect(result).to.be.equals(-1);
    })
    it("deve subtrair dois numeros", () => {
        expect(Calculadora.sub(-3, -5)).to.be.equals(2);
        expect(Calculadora.sub(1, 2)).to.be.equals(-1);
        expect(Calculadora.sub(5, -5)).to.be.equals(10);
        expect(Calculadora.sub(20, -5)).to.be.equals(25);
    })
})

describe("testes de divisão", () => {
    it("deve dividir 2 por 5 resultando em 0,4", () => {
        let result = Calculadora.div(2, 5);
        expect(result).to.be.equals(0.4);
    })
    it("deve dividir 8 por 5 resultando em 3", () => {
        let result = Calculadora.div(10, 5);
        expect(result).to.be.equals(2);
    })
    it("deve dividir 1 por 0 hehe", () => {
        let result = Calculadora.div(1, 0);
        expect(result).to.be.equals(Infinity);
    })
    it("deve dividir -10 por 5 resultando em -2", () => {
        let result = Calculadora.div(-10, 5);
        expect(result).to.be.equals(-2);
    })
})

describe("testes de multiplicação", () => {
    it("deve multiplicar 5 por 5 resultando em 25", () => {
        let result = Calculadora.mult(5, 5);
        expect(result).to.be.equals(25);
    })
    it("deve multiplicar -8 por 5 resultando em -40", () => {
        let result = Calculadora.mult(-8, 5);
        expect(result).to.be.equals(-40);
    })
    it("deve multiplicar 0 por 0 resultando em 0", () => {
        let result = Calculadora.mult(0, 0);
        expect(result).to.be.equals(0);
    })
    it("deve multiplicar 8 por -5 resultando em -40", () => {
        let result = Calculadora.mult(8, -5);
        expect(result).to.be.equals(-40);
    })
    it("deve multiplicar -8 por -5 resultando em 40", () => {
        let result = Calculadora.mult(-8, -5);
        expect(result).to.be.equals(40);
    })
})

describe("testes de MDC", () => {
    it("deve calcular o MDC de 3 e 5 resultando em 1", () => {
        let result = Calculadora.mdc(3, 5);
        expect(result).to.be.equals(1);
    })
    it("deve calcular o MDC de 10 e 5 resultando em 5", () => {
        let result = Calculadora.mdc(10, 5);
        expect(result).to.be.equals(5);
    })
    it("deve calcular o MDC de -10 e 5 resultando em 5", () => {
        let result = Calculadora.mdc(10, 5);
        expect(result).to.be.equals(5);
    })
})

describe("testes de raiz", () => {
    it("deve calcular a raiz de 9 resultando em 3", () => {
        let result = Calculadora.raizQuadrada(9);
        expect(result).to.be.equals(3);
    })
})

describe("testes de potenciação", () => {
    it("deve calcular a potenciação de 2 elevado a 2", () => {
        let result = Calculadora.potenciacao(2, 2);
        expect(result).to.be.equals(4);
    })
})