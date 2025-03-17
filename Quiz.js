function controllaRisposta(bottone, corretto) {
    let risultato = document.getElementById("quizRisultato");
    
    if (corretto) {
        risultato.innerHTML = "✅ Risposta corretta!";
        risultato.style.color = "green";
    } else {
        risultato.innerHTML = "❌ Risposta sbagliata! Riprova!";
        risultato.style.color = "red";
    }
}

// Domande del quiz con risposte
const prove = [
    { 
        prova: "Quanti anni terrestri impiega Saturno per orbitare attorno al Sole?", 
        opzioni: ["10 anni", "50 anni", "29,5 anni", "100 anni"], 
        vero: 2 
    },
    { 
        prova: "Saturno è composto per il 95% da...", 
        opzioni: ["Ossigeno", "Elio", "Idrogeno", "Azoto"], 
        vero: 2 
    },
    { 
        prova: "Qual è la luna più grande di Saturno?", 
        opzioni: ["Europa", "Ganimede", "Titano", "Io"], 
        vero: 2 
    },
    { 
        prova: "Gli anelli di Saturno sono composti principalmente da...", 
        opzioni: ["Ferro e Nichel", "Ghiaccio e Polvere", "Acqua e Roccia", "Gas"], 
        vero: 1 
    }
];

let provaCorrente = 0;

// Carica una nuova prova
function nuovaProva() {
    let index = Math.floor(Math.random() * prove.length);
    provaCorrente = index;
    
    document.getElementById("quizProva").innerText = prove[index].prova;
    let bottoni = document.getElementsByClassName("quizBtn");
    
    for (let i = 0; i < bottoni.length; i++) {
        bottoni[i].innerText = prove[index].opzioni[i];
    }
    
    document.getElementById("quizRisultato").innerText = "";
}

// Controlla la risposta
function controllaRisposta(scelta) {
    let risultato = document.getElementById("quizRisultato");
    
    if (scelta === prove[provaCorrente].vero) {
        risultato.innerHTML = "✅ Vero! Hai risposto correttamente!";
        risultato.style.color = "green";
    } else {
        risultato.innerHTML = "❌ Falso! Riprova!";
        risultato.style.color = "red";
    }
}

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


// Carica la prima prova all'avvio
window.onload = nuovaProva;
