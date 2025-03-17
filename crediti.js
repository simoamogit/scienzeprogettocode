document.addEventListener("DOMContentLoaded", function () {
    const starContainer = document.querySelector(".stars");
    
    for (let i = 0; i < 100; i++) {  // Modifica il numero di stelle se vuoi
        let star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * 100 + "vh"; // Posizione random verticale
        star.style.left = Math.random() * 100 + "vw"; // Posizione random orizzontale
        star.style.animationDuration = (Math.random() * 3 + 2) + "s"; // Effetto di "brillio" random
        starContainer.appendChild(star);
    }
    });

    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        alert("Il sito non è ottimizzato per dispositivi mobili. Accedi da un computer!");
        document.body.innerHTML = "<h2 style='text-align: center; color: red;'>Accesso negato: usa un PC</h2>";
      }
    