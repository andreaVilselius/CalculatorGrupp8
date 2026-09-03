import { test, describe, expect } from "vitest";
import appendToDisplay from "../index.js";

describe("testa miniräknare ", () => {
  test("ska testa addition", () => {
    document.body.innerHTML = `
    <input id="display">
  `;

    appendToDisplay("8");
    appendToDisplay("+");
    appendToDisplay("8");

    const display = document.getElementById("display");

    expect(display.value).toBe("8+8");
  });
});
