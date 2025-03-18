async function loadInterpretations() {
  try {
    const response = await fetch("/assets/json/yi.json");
    if (!response.ok) {
      throw new Error(`Failed to load JSON: ${response.status}`);
    }
    const data = await response.json();
    console.log("Loaded interpretations data:", data); // Log the entire loaded data
    return data;
  } catch (error) {
    console.error("Error loading interpretations:", error);
    return {};
  }
}

function tossLine() {
  const coins = [Math.random(), Math.random(), Math.random()];
  const values = coins.map((coin) => (coin < 0.5 ? 2 : 3)); // 2 for tails, 3 for heads
  return values.reduce((sum, value) => sum + value, 0); // Sum can be 6, 7, 8, or 9
}

function tossHexagram() {
  return Array.from({ length: 6 }, tossLine);
}

function getStableLines(tossedLines) {
  return tossedLines.map((line) => (line === 6 || line === 8 ? 0 : 1)); // 0 for yin, 1 for yang
}

function getChangingLines(tossedLines) {
  return tossedLines.map((line) => {
    if (line === 6) return 1; // Changing yin becomes yang
    if (line === 9) return 0; // Changing yang becomes yin
    return null; // No change for 7 and 8
  });
}

function hasChangingLines(tossedLines) {
  return tossedLines.some((line) => line === 6 || line === 9);
}

function findHexagramByLines(interpretations, lines) {
  const lineString = lines.join("");
  console.log("Searching for line string:", lineString);
  for (const key in interpretations) {
    if (interpretations.hasOwnProperty(key)) {
      const hexagram = interpretations[key];
      const hexagramLineString = hexagram.lines.join("");
      console.log(`Comparing with hexagram ${key}: ${hexagramLineString}`);
      if (hexagramLineString === lineString) {
        console.log("Match found for hexagram:", key, hexagram);
        return hexagram;
      }
    }
  }
  console.log("No match found for:", lineString);
  return null;
}

function formatTossedLines(lines) {
  return lines
    .slice()
    .reverse()
    .map((line) => {
      switch (line) {
        case 6:
          return "─ ─ (changing yin)";
        case 7:
          return "─── (young yang)";
        case 8:
          return "─ ─ (young yin)";
        case 9:
          return "─── (changing yang)";
        default:
          return "";
      }
    })
    .join("\n");
}

function formatBinaryLines(lines) {
  return lines
    .slice()
    .reverse()
    .map((bit) => (bit === 1 ? "───" : "─ ─"))
    .join("\n");
}

document.addEventListener("DOMContentLoaded", async () => {
  const outputDiv = document.getElementById("output");
  const interpretations = await loadInterpretations();
  console.log("All interpretations:", interpretations);

  const newReadingButton = document.getElementById("newReading");

  function performReading() {
    const tossedLines = tossHexagram();
    console.log("Tossed Lines:", tossedLines);

    const stableLines = getStableLines(tossedLines);
    console.log("Stable Lines (0/1):", stableLines);

    const primaryHexagram = findHexagramByLines(interpretations, stableLines);
    console.log("Primary Hexagram:", primaryHexagram);

    let changingHexagram = null;
    let changedBinaryLines = null;

    if (hasChangingLines(tossedLines)) {
      const changedLines = getChangingLines(tossedLines);
      const initialBinary = getStableLines(tossedLines);
      changedBinaryLines = initialBinary.map((bit, index) =>
        changedLines[index] === null ? bit : changedLines[index],
      );
      console.log("Changed Binary Lines (0/1):", changedBinaryLines);
      changingHexagram = findHexagramByLines(
        interpretations,
        changedBinaryLines,
      );
      console.log("Changing Hexagram:", changingHexagram);
    }

    let outputHTML = `
      <button id="newReading" class="iching-button">New Reading</button>

      <div class="toggle-buttons">
        <button class="toggle-btn" data-toggle="primary-hexagram">Hexagram</button>
        <button class="toggle-btn" data-toggle="judgment">Judgment</button>
        <button class="toggle-btn" data-toggle="image">Image</button>
        <button class="toggle-btn" data-toggle="description">Description</button>
        ${changingHexagram ? '<button class="toggle-btn" data-toggle="changed-hexagram">Changed Hexagram</button>' : ""}
      </div>

      <div id="primary-hexagram-content">
        <h2>Primary Hexagram: ${primaryHexagram ? `${primaryHexagram.name} ${primaryHexagram.unicode}` : "Unknown"}</h2>
        <pre>${formatTossedLines(tossedLines)}</pre>
      </div>

      <div id="judgment-content" style="display: none;">
        <h3>Judgment:</h3><p>${primaryHexagram?.judgment || "N/A"}</p>
      </div>

      <div id="image-content" style="display: none;">
        <h3>Image:</h3><p>${primaryHexagram?.image || "N/A"}</p>
      </div>

      <div id="description-content" style="display: none;">
        <h3>Description:</h3><p>${primaryHexagram?.description || "N/A"}</p>
      </div>
    `;

    if (changingHexagram) {
      outputHTML += `
        <div id="changed-hexagram-content" style="display: none;">
          <hr>
          <h2>Resulting Hexagram: ${changingHexagram.name} ${changingHexagram.unicode}</h2>
          <pre>${formatBinaryLines(changedBinaryLines)}</pre>
          <div class="interpretation">
            <h3>Judgment:</h3><p>${changingHexagram.judgment}</p>
            <h3>Image:</h3><p>${changingHexagram.image}</p>
            <h3>Description:</h3><p>${changingHexagram.description}</p>
          </div>
        </div>
      `;
    } else {
      outputHTML += "<p>No changing lines.</p>";
    }

    outputDiv.innerHTML = outputHTML;

    const toggleButtons = document.querySelectorAll(".toggle-btn");
    toggleButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.dataset.toggle + "-content";
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.style.display =
            targetElement.style.display === "none" ? "block" : "none";
        }
      });
    });

    const newReadingButton = document.getElementById("newReading");
    if (newReadingButton) {
      newReadingButton.onclick = performReading;
    }
  }

  if (newReadingButton) {
    newReadingButton.onclick = performReading;
  } else {
    performReading(); // Initial reading if button doesn't exist on load
  }
});
