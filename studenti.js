// OGGETTI E FUNZIONI
// creo un oggetto Studente con nome,cognome,età
// stampo a schermo il contenuto dell'oggetto utilizzando for-in
var studente = {
    nome: "Pippo",
    cognome: "Franco",
    "età": 81
};
for (key in studente) {
    console.log(studente[key]);
}
// creo un array di oggetti studenti. stampo attraverso un ciclo nome e cognome
// mi restituisce undefined ogni elemento dell'array
var classe = [
    studente = {
        nome: "Galileo",
        cognome: "Galilei",
        "età": 35
    },
    studente = {
        nome: "Bill",
        cognome: "Gates",
        "età": 45
    },
    studente = {
        nome: "Linus",
        cognome: "Benedict Torvalds",
        "eta": 33
    }
]
// con stud.chiave mi restituisce undefined
// for (stud in classe) {
//     console.log(classe[]);
//     console.log(stud["cognome"]);
//     console.log(stud["età"]);
// }
function stampaClasse(classe) {
    for (var i = 0; i < classe.length; i++) {
        console.log(classe[i]);
    }
}

// l'utente può inserire attraverso 3 prompt() un nuovo oggetto studente. Inserendo in ordine nome,cognome, età
// una funzione per aggiungere uno studente
// posso utilizzare una funzione nel valore della proprietà
function addStudent() {
    // con una variabile globale dovrebbe funzionare e con una locale?
    var studenteAggiunto = {
        nome: prompt("inserire un nome"),
        cognome: prompt("inserire un cognome"),
        eta: parseInt(prompt("inserire l'età"))
    }

    // lo pusho nell'array 
    classe.push(studenteAggiunto);
}

// CORPO DEL PROGRAMMA


stampaClasse(classe);

addStudent();

stampaClasse(classe);



// NOTE
// creare una funzione per stampare gli oggetti e gli array

