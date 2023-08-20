import bisiesto from "./bisiesto.js";

describe("AÑO BISIESTO", () => {
  it("Debería mostrar todos los años divisibles entre 400 - BISIESTO", () => {
    expect(bisiesto(2000)).toEqual(true);
  });
  it("Debería mostrar todos los años divisibles entre 100 pero no por 400 - BISIESTO", () => {
    expect(bisiesto(1000)).toEqual(false);
  });
  it("Debería mostrar todos los años divisibles 4 pero no por 100 - BISIESTO", () => {
    expect(bisiesto(2016)).toEqual(true);
  });
});
