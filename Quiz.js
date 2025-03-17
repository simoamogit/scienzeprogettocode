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
    },
    { 
        prova: "Qual è il settore predominante del sistema saturniano?",
        opzioni: [
            "Primario - dovuto ai grandi depositi di risorse",
            "Secondario - dovuto alle numerose linee di montaggio sui diversi satelliti di Saturno",
            "Terziario - dovuto alla qualità della vita insieme alle istituzioni stabili e le località turistiche",
            "Non c'è una quarta opzione!"
        ],
        vero: 2
    },
    { 
        prova: "Quante fasce di anelli ha Saturno?",
        opzioni: ["7", "4", "9", "62"], 
        vero: 0 
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
        bottoni[i].onclick = function() {
            controllaRisposta(i);
        };
    }
    
    document.getElementById("quizRisultato").innerText = "";
}

// Controlla la risposta
function controllaRisposta(scelta) {
    let risultato = document.getElementById("quizRisultato"); // Definisci risultato
    
    if (provaCorrente >= 0 && provaCorrente < prove.length) {
        if (scelta === prove[provaCorrente].vero) {
            risultato.innerHTML = "✅ Vero! Hai risposto correttamente!";
            risultato.style.color = "green";
        } else {
            risultato.innerHTML = "❌ Falso! Riprova!";
            risultato.style.color = "red";
        }
    } else {
        console.error("Errore: provaCorrente fuori dai limiti!");
    }
}

// Effetto stelle di sfondo
document.addEventListener("DOMContentLoaded", function () {
    const starContainer = document.querySelector(".stars");

    for (let i = 0; i < 100; i++) {  
        let star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * 100 + "vh"; 
        star.style.left = Math.random() * 100 + "vw"; 
        star.style.animationDuration = (Math.random() * 3 + 2) + "s"; 
        starContainer.appendChild(star);
    }
});

// Avviso per dispositivi mobili
if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    alert("Il sito non è ottimizzato per dispositivi mobili. Accedi da un computer!");
    document.body.innerHTML = "<h2 style='text-align: center; color: red;'>Accesso negato: usa un PC</h2>";
}

// Carica la prima prova all'avvio
window.onload = nuovaProva;

