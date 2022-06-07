import assert from "assert";

describe("teste 1", () => {
    it("verificar uma igualdade", () => {
        let aux = 2
        assert.strictEqual(aux, 2)
    });
    it("verificar outra igualdade", () => {
        let aux = "carro"
        assert.strictEqual(aux, "carro")
    });
});

describe("teste 2", () => {
    it("verificar uma desigualdade", () => {
        let aux = 2
        assert.notStrictEqual(aux, "2")
    });
    it("verificar outra desigualdade", () => {
        let aux = "carro"
        assert.notStrictEqual(aux, "moto")
    });
});


