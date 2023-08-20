import bisiesto from "./bisiesto.js";

describe("AÑO BISIESTO", () => {
  it("Debería mostrar todos los años divisibles entre 400 - BISIESTO", () => {
    expect(bisiesto(2000)).toEqual(true);
  });
});
