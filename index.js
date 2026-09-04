const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    let result = eval(display.value);
    display.value = parseFloat(result).toFixed(2);
  } catch (error) {
    display.value = "E";
    display.style.color = "red";
  }
}

function squareRoot() {
  try {
    let value = parseFloat(display.value);
    let result = Math.sqrt(value);

    if (isNaN(result)) {
      throw new Error("Invalid input");
    }
    display.value = parseFloat(result).toFixed(2);
  } catch (error) {
    display.value = "E";
    display.style.color = "red";
  }
}

window.appendToDisplay = appendToDisplay;
window.clearDisplay = clearDisplay;
window.calculate = calculate;

// ==============================================================================
// Förklarning!
// 1. const display = document.getElementById("display");

// Hämtar en referens till ett input HTML-element med id="display".
// Detta element används för att visa och manipulera innehållet i en kalkylator.

// 2. function appendToDisplay(input)

// Denna funktion tar en parameter (input) och lägger till den i slutet av värdet i display.
// Exempel: Om display.value är "12" och input är "3", blir resultatet "123".

// 3. function clearDisplay()

// Rensar innehållet i display.
// Det sätter helt enkelt display.value till en tom sträng ("").

// 4. function calculate()

// Utför en beräkning baserat på det användaren har skrivit i display.
// Steg för steg i funktionen:
// let result = eval(display.value);
// : eval() utvärderar strängen i display.value som om det vore kod.
// Till exempel, om display.value är "2+2", blir resultatet 4.
// parseFloat(result).toFixed(2);
// : Omvandlar resultatet till ett flyttal (decimaltal) och rundar det till två decimaler.
// Om något går fel (t.ex. om användaren skriver något ogiltigt, som "2++2"),
// fångas felet i catch. Då:
// Visas "E" i display.
// Texten i display blir röd.
