function printDelayedText(text, delay, container) {
  let index = 0;

  function printNextChar() {
    if (index < text.length) {
      container.textContent += text[index];
      index++;
      setTimeout(printNextChar, delay);
    }
  }

  printNextChar();
}

const textToPrint = "Greetings, fellow student";
const delayMilliseconds = 200; // Adjust this value to change the delay
const textContainer = document.getElementById("text-container");

printDelayedText(textToPrint, delayMilliseconds, textContainer);

