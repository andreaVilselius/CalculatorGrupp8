//installerar jsdom: npm install -D jsdom för att exempelvis använda document.body.innerHTML..
// @vitest-environment jsdom
import { describe, expect, test } from "vitest";
// Hämtar Node.js funktion för att läsa innehållet i index.js
import { readFileSync } from "node:fs";

// Hämtar Node.js funktion för att skapa rätt sökväg till en fil.
import { resolve } from "node:path";

// Dokumentation: https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
//Skapar en sökväg till filen index.js och spara den i variabeln indexJsPath.
const indexJsPath = resolve("index.js");
//Skapar en sökväg till filen index.html och spara den i variabeln indexHTMLPath.
const indexHTMLPath = resolve("index.html");

//"utf-8" = läs filen som vanlig text
const options = "utf-8";

//Läser in all kod från index.js som text, så att vi kan använda den i testerna.
const indexJsCode = readFileSync(indexJsPath, options);

//Läser in all kod från index.html som text, så att vi kan använda den i testerna.
const indexHTMLCode = readFileSync(indexHTMLPath, options);

// Förbereder kalkylatorn inför varje test.
function loadCalculator() {
  // Lägger in HTML-koden från index.html i testets document.body.
  document.body.innerHTML = indexHTMLCode;

  // Kör koden från index.js och gör funktionerna tillgängliga i testet.
  const calculator = new Function(
    "document",
    `${indexJsCode}
    return {
      appendToDisplay,
      clearDisplay,
      calculate
    };`,
  );

  // Returnerar funktionerna och displayen så att testerna kan använda dem.
  return {
    ...calculator(document),
    display: document.getElementById("display"),
  };
}

//Grupperar tester som hör till kalkylatorn.
describe("Calculator", () => {
  //Testar att kalkylatorn kan addera två positiva tal.
  test("Addition med positiva tal", () => {
    // Arrange: förbereder kalkylatorn och testmiljön.
    const calculator = loadCalculator();

    // Arrange: skriver in uttrycket som ska räknas ut.
    calculator.display.value = "5+3";

    // Act: kör kalkylatorns calculate-funktion.
    calculator.calculate();

    // Assert: kontrollerar att resultatet i displayen blev 8.00
    expect(calculator.display.value).toBe("8.00");
  });
});
