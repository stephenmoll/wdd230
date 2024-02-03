const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
const yearSpan = document.getElementById("year");
const lastModifiedParagraph = document.getElementById("lastModified");

// Populate the year
yearSpan.textContent = currentYear;

// Populate the lastModified paragraph
lastModifiedParagraph.textContent = `Last modified: ${lastModified.toLocaleString()}`;