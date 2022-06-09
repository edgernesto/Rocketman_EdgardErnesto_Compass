import assert from "assert";
import chai from "chai";
import Calculadora from "../src/Calculadora.js";

const expect = chai.expect;

describe("testes de soma", () => {
    it("deve somar 4 e 5 resultando em 9", () => {
        let result = Calculadora.soma(4, 5);
        expect(result).to.be.equals(9);
    })
    it("deve somar -4 e 5 resultando em 1", () => {
        let result = Calculadora.soma(-4, 5);
        expect(result).to.be.equals(1);
    })
    it("deve somar 0 e 0 resultando em 0", () => {
        let result = Calculadora.soma(0, 0);
        expect(result).to.be.equals(0);
    })
})

describe("testes de subtração", () => {
    it("deve subtrair 4 e 5 resultando em -1", () => {
        let result = Calculadora.sub(4, 5);
        expect(result).to.be.equals(-1);
    })
    it("deve subtrair 8 e 5 resultando em 3", () => {
        let result = Calculadora.sub(8, 5);
        expect(result).to.be.equals(3);
    })
    it("deve subtrair 0 e 0 resultando em 0", () => {
        let result = Calculadora.sub(0, 0);
        expect(result).to.be.equals(0);
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