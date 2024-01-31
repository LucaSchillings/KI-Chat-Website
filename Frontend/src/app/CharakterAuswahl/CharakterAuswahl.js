// Charaktere welche auf der Website eingefügt werden. Kann einfach erweitert werden.
var characters = [
    {
        name: "Codsworth",
        desc: "Your small Robot friend from Fallout 4!",
        image: "img/Codsworth.jpeg",
    },
    {
        name: "Test",
        desc: "TestBot",
        image: "Test.png",
    }
];
// Rendert die Charaktere auf die Website
function renderCharacters() {
    // Ein Element, das den Hauptbereich der Webseite enthält
    var main = document.getElementById("main");
    var _loop_1 = function (character) {
        // Charakterkarte
        var card = document.createElement("div");
        card.className = "card";
        // Bild des Charakters
        var cardImage = document.createElement("img");
        cardImage.className = "card-image";
        cardImage.src = character.image;
        cardImage.alt = character.name;
        // Name des Charakters
        var cardName = document.createElement("div");
        cardName.className = "card-name";
        cardName.textContent = character.name;
        // Beschreibung des Charakters bzw Eyecatcher Satz (?)
        var cardDesc = document.createElement("div");
        cardDesc.className = "card-desc";
        cardDesc.textContent = character.desc;
        // Elemente werden der Karte hinzugefügt
        card.appendChild(cardImage);
        card.appendChild(cardName);
        card.appendChild(cardDesc);
        // Reagiert auf die Karte wenn diese geklickt wird
        card.addEventListener("click", function () {
            // Wird zum chat vom Charakter weitergeleitet
            window.location.href = "../chat/chat.component.html?character=" + character.name;
        });
        // Karte wird zum Hauptbereich hinzugefügt
        main.appendChild(card);
    };
    // Geht einmal durch alle Charaktere durch
    for (var _i = 0, characters_1 = characters; _i < characters_1.length; _i++) {
        var character = characters_1[_i];
        _loop_1(character);
    }
}
// Wird aufgerufen wenn die Website geladen wird
window.addEventListener("load", renderCharacters);
