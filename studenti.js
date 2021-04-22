// creo un oggetto Studente con nome,cognome,età
// stampo a schermo il contenuto dell'oggetto utilizzando for-in
var studente = {
    nome:"Pippo",
    cognome:"Franco",
    età: 81
};
for (key in studente) {
    console.log(studente[key]);
}
// creo un array di oggetti studenti. stampo attraverso un ciclo nome e cognome
var classe = [studente]

// l'utente può inserire attraverso 3 prompt() un nuovo oggetto studente. Inserendo in ordine nome,cognome, età



