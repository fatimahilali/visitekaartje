/**
 * @file script.js
 * @description Deze code telt het aantal keren dat de pagina is bezocht en toont dit aantal op de pagina. Het maakt gebruik van de opslag van de browser om het aantal bezoeken bij te houden.
 * @bronnen School opdracht
 * @author Fatima el Hilali
 */

// Haal het aantal keren dat de pagina is bezocht op uit de opslag van de browser
let visitCount = localStorage.getItem("page_view");

// Controleer of er al een aantal bezoeken is opgeslagen
if (visitCount) {
  console.log(visitCount)
  // Als er al een aantal bezoeken is, zet dit om in een getal en verhoog het met 1
  visitCount = Number(visitCount) + 1;
  // Sla het nieuwe aantal bezoeken op in de opslag van de browser
  localStorage.setItem("page_view", visitCount);
} else {
  // Als er nog geen aantal bezoeken is opgeslagen, begin dan met 1
  visitCount = 1;
  // Zet het aantal bezoeken op 1 in de opslag van de browser
  localStorage.setItem("page_view", 1);
}

// Zoek het element op de pagina met het ID 'visit-counter' en zet de tekst naar het aantal bezoeken
document.getElementById(
  "visit-counter"
).textContent = `Bezoeken: ${visitCount}`;
