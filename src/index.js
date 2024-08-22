const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = "";
  console.log("Start");
  for (let i = 0; i < expr.length; i += 10) {
    const binarySymbol = expr.slice(i, i + 10);
    if (binarySymbol === "**********") {
      result += " ";
    } else {
      let morseCode = "";
      for (let j = 0; j < binarySymbol.length; j += 2) {
        const morseChar = binarySymbol.slice(j, j + 2);
        if (morseChar === "10") morseCode += ".";
        if (morseChar === "11") morseCode += "-";
      }

      result += MORSE_TABLE[morseCode];
    }
  }
  return result;
}

module.exports = {
  decode,
};
