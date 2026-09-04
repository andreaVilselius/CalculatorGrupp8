import { describe, test, expect } from "vitest";
import fs from "fs";
import path from "path";

//variabel för att läsa in index.js fil
const indexJs = fs.readFileSync(path.resolve("index.js"), "utf-8");

describe("testa miniräknare", () => {
  //test 1
  test("testa addition med positiva tal ", () => {
    //arrange
    document.body.innerHTML = `
      <input id="display" />

    `;
    //tar textsträng och försöker köra som js kod
    eval(indexJs);

    //act

    appendToDisplay("2");
    appendToDisplay("+");
    appendToDisplay("3");

    calculate();

    const expectedResult = "5";

    //assert
    const display = document.getElementById("display");
    expect(display.value).toBeCloseTo(expectedResult);
  });

  //test 2

  test("testa subtraktion med positiva termer", () => {
    //arrange
    document.body.innerHTML = `
      <input id="display" />

    `;
    //hämtar funktioner i js fil
    eval(indexJs);

    //act
    appendToDisplay("10");
    appendToDisplay("-");
    appendToDisplay("4");
    calculate();

    const expectedResult = "6";

    //assert
    const display = document.getElementById("display");
    expect(display.value).toBeCloseTo(expectedResult);
  });

  //test 3

  test("testa subtraktion med negativ term ", () => {
    //arrange
    document.body.innerHTML = `
      <input id="display" />

    `;
    //hämtar funktioner i js fil
    eval(indexJs);

    //act
    appendToDisplay("-2");
    appendToDisplay("-");
    appendToDisplay("3");
    calculate();

    const expectedResult = "-5";

    //assert
    const display = document.getElementById("display");
    expect(display.value).toBeCloseTo(expectedResult);
  });

  //test 4
  test("testa multiplikation med positiva tal ", () => {
    //arrange
    document.body.innerHTML = `<input id="display"/>`;

    eval(indexJs);
    //act
    appendToDisplay("5");
    appendToDisplay("*");
    appendToDisplay("3");
    calculate();

    const expectedResult = "15";

    //assert
    const display = document.getElementById("display");
    expect(display.value).toBeCloseTo(expectedResult);
  });

  test("testa squareRooten av ett positivt tal", () => {
    //arrange
    document.body.innerHTML = `<input id="display" />`;
    eval(indexJs);

    //act
    appendToDisplay("9");
    squareRoot();

    //assert
    const display = document.getElementById("display");
    expect(display.value).toBe("3.00");
  });
});
