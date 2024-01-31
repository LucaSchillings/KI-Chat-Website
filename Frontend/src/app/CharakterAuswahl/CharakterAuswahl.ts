interface Character {
    name: string;
    desc: string;
    image: string;
  }
  
  // Charaktere welche auf der Website eingefügt werden. Kann einfach erweitert werden.
  const characters: Character[] = [
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
    const main = document.getElementById("main") as HTMLDivElement;
  
    // Geht einmal durch alle Charaktere durch
    for (const character of characters) {
      // Charakterkarte
      const card = document.createElement("div") as HTMLDivElement;
      card.className = "card";
  
      // Bild des Charakters
      const cardImage = document.createElement("img") as HTMLImageElement;
      cardImage.className = "card-image";
      cardImage.src = character.image;
      cardImage.alt = character.name;
  
      // Name des Charakters
      const cardName = document.createElement("div") as HTMLDivElement;
      cardName.className = "card-name";
      cardName.textContent = character.name;
  
      // Beschreibung des Charakters bzw Eyecatcher Satz (?)
      const cardDesc = document.createElement("div") as HTMLDivElement;
      cardDesc.className = "card-desc";
      cardDesc.textContent = character.desc;
  
      // Elemente werden der Karte hinzugefügt
      card.appendChild(cardImage);
      card.appendChild(cardName);
      card.appendChild(cardDesc);
  
      // Reagiert auf die Karte wenn diese geklickt wird
      card.addEventListener("click", () => {
        // Wird zum chat vom Charakter weitergeleitet
        window.location.href = "../chat/chat.component.html?character=" + character.name;
      });
  
      // Karte wird zum Hauptbereich hinzugefügt
      main.appendChild(card);
    }
  }
  
  // Wird aufgerufen wenn die Website geladen wird
  window.addEventListener("load", renderCharacters);
  