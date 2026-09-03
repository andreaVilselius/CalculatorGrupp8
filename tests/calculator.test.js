import { describe, expect, test } from "vitest";
// Hämtar Node.js funktion för att läsa innehållet i en fil.
import { readFileSync } from "node:fs";

// Hämtar Node.js funktion för att skapa rätt sökväg till en fil.
import { resolve } from "node:path";

// Läser in all kod från index.js som text, så att vi kan använda den i testerna.
const indexJsCode = readFileSync(resolve("index.js"), "utf-8");

//förbereder testmiljön
function loadCalculator() {
  // Skapar en fejkad display som fungerar som input-fältet i index.html.
  const display = {
    value: "",
    style: {
      color: "",
    },
  };
  // Skapar ett fejk-dokument med getElementById, eftersom index.js använder document.getElementById("display").
  const document = {
    getElementById: (id) => {
      // Om index.js frågar efter displayen skickar vi tillbaka vår fejkade display.
      if (id === "display") {
        return display;
      }
      // Om något annat id efterfrågas returneras null.
      return null;
    },
  };

  // Kör koden från index.js och gör funktionerna tillgängliga för testet.
  const calculator = new Function(
    "document",
    `${indexJsCode}
    return {
      appendToDisplay,
      clearDisplay,
      calculate,
      display
    };`,
  );

  // Startar kalkylatorn med vårt fejkade document och returnerar funktionerna.
  return calculator(document);
}

//Exempel testar kalkylatorns funktioner.
describe("Calculator", () => {
  test("lägger till siffror i displayen", () => {
    const calculator = loadCalculator();

    calculator.appendToDisplay("5");

    expect(calculator.display.value).toBe("5");
  });
});
