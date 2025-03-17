console.log("crediti.js caricato!");

document.addEventListener("DOMContentLoaded", function () {
    const starContainer = document.querySelector(".stars");
    if (!starContainer) {
        console.error("Errore: elemento '.stars' non trovato!");
        return;
    }

    for (let i = 0; i < 150; i++) {
        let star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.width = star.style.height = Math.random() * 3 + "px";
        star.style.animationDuration = (Math.random() * 3 + 2) + "s";
        starContainer.appendChild(star);
    }
});

    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        alert("Il sito non è ottimizzato per dispositivi mobili. Accedi da un computer!");
        document.body.innerHTML = "<h2 style='text-align: center; color: red;'>Accesso negato: usa un PC</h2>";
      }
    