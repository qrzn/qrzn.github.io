async function loadInterpretations() {
    try {
        const response = await fetch("/assets/json/yi.json");
        if (!response.ok) throw new Error(`Failed to load JSON: ${response.statusText}`);
        return await response.json();
    } catch (error) {
        console.error("Error loading interpretations:", error);
        return {}; // Return empty object to prevent crashes
    }
}

// Generate a 6-digit hexagram (each line is either "6" or "7")
function generateHexagram() {
    return Array.from({ length: 6 }, () => (Math.random() < 0.5 ? "6" : "7")).join("");
}

// Display hexagram as broken (yin) and solid (yang) lines
function displayHexagram(hexagram) {
    return hexagram
        .split("")
        .reverse()
        .map(line => (line === "6" ? "———————————" : "————— —————"))
        .join("\n");
}

// Retrieve hexagram interpretation or provide a default fallback
function getInterpretation(hexagram, interpretations) {
    const interpretationData = interpretations[hexagram];
    if (interpretationData) {
        return {
            hexagram: interpretationData.name || "Unknown Hexagram Name",
            image: interpretationData.image || "Unknown Image",
            judgment: interpretationData.judgment || "Unknown Judgment",
            description: interpretationData.description || "Unknown Description"
        };
    } else {
        return {
            hexagram: "Unknown Hexagram",
            image: "Unknown Image",
            judgment: "Unknown Judgment",
            description: "Unknown Description"
        };
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const interpretations = await loadInterpretations();
    const output = document.getElementById("output");

    function newReading() {
        const hexagram = generateHexagram();
        const interpretation = getInterpretation(hexagram, interpretations);

        output.innerHTML = `
            <button id="newReading" class="iching-button">New Reading</button>
            <h2>${interpretation.hexagram}</h2>
            <pre>${displayHexagram(hexagram)}</pre>
            
            <div class="toggle-buttons">
                <button class="toggle-btn" data-target="interpretation-image"><strong>Image</strong></button>
                <button class="toggle-btn" data-target="interpretation-judgment"><strong>Judgment</strong></button>
                <button class="toggle-btn" data-target="interpretation-description"><strong>Description</strong></button>
            </div>
            
            <div id="interpretation-image" class="toggle-content" style="display: none;">
                <p>${interpretation.image}</p>
            </div>
            <div id="interpretation-judgment" class="toggle-content" style="display: none;">
                <p>${interpretation.judgment}</p>
            </div>
            <div id="interpretation-description" class="toggle-content" style="display: none;">
                <p>${interpretation.description}</p>
            </div>
        `;

        // Reattach the "New Reading" button event listener inside the output
        const newReadingBtnInside = output.querySelector("#newReading");
        newReadingBtnInside.addEventListener("click", newReading);

        // Attach event listeners to toggle buttons so that only one section is visible at a time
        const toggleButtons = output.querySelectorAll('.toggle-btn');
        toggleButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');
                const allContentDivs = output.querySelectorAll('.toggle-content');
                allContentDivs.forEach(div => {
                    if (div.id !== targetId) {
                        div.style.display = 'none';
                    }
                });
                const contentDiv = document.getElementById(targetId);
                contentDiv.style.display = (contentDiv.style.display === 'none' || contentDiv.style.display === '') ? 'block' : 'none';
            });
        });
    }

    // Generate the first reading on page load
    newReading();
});
