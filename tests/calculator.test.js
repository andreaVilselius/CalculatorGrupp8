import { describe, test, expect } from "vitest";
import fs from "fs";
import path from "path";

//variabel för att läsa in index.js fil
const indexJs = fs.readFileSync(path.resolve("index.js"), "utf-8");

describe("testa miniräknare", () => {
  //test 1
  test("ska lägga till 8 i displayen", () => {
    // Arrange
    document.body.innerHTML = `
      <input id="display" />
    `;
    //tar textsträng och försöker köra som js kod
    eval(indexJs);

    // Act
    appendToDisplay("8");

    // Assert
    const display = document.getElementById("display");

    expect(display.value).toBe("8");
  });

  //test 2
  test("testa addition i display ", () => {
    //arrange
    document.body.innerHTML = `
      <input id="display" />

    `;
    //tar textsträng och försöker köra som js kod
    eval(indexJs);

    //act

    appendToDisplay("5");
    appendToDisplay("+");
    appendToDisplay("4");

    calculate();

    const expectedResult = "9";

    //assert
    const display = document.getElementById("display");
    expect(display.value).toBeCloseTo(expectedResult);
  });

  //test 3

  test("testa subtraktion i display", () => {
    //arrange
    document.body.innerHTML = `
      <input id="display" />

    `;
    //hämtar funktioner i js fil
    eval(indexJs);

    //act
    appendToDisplay("3");
    appendToDisplay("-");
    appendToDisplay("2");
    calculate();

    const expectedResult = "1";

    //assert
    const display = document.getElementById("display");
    expect(display.value).toBeCloseTo(expectedResult);
  });
});
