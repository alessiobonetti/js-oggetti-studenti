// Creare un oggetto che descriva uno studente con le seguenti proprietà:
 // nome, cognome e età.

var profiloStudente = {
  "nome" : "Alessio",
  "cognome" : "Bonetti",
  "eta" : 32,
}
// Stampare a schermo attraverso il for in tutte le proprietà.

for ( var key in profiloStudente){
  console.log(profiloStudente[key]);
}
// Sampo con anche il valore di key
for ( var key in profiloStudente){
console.log(key + " : " + profiloStudente[key]);
}

// Creare un array di oggetti di studenti.

var arrayStudenti = [
  {
    "nome": "Margherita",
    "cognome": "Franz",
  },
  {
    "nome": "Francesco",
    "cognome": "Zanetti",
  },
  {
    "nome": "Laura",
    "cognome": "Roli",
  },
]
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
for (var i = 0; i<arrayStudenti.length; i++) {
  for ( var k in arrayStudenti[i]){
    console.log(arrayStudenti[i][k]);
  }
}

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente
// inserendo nell’ordine: nome, cognome e età.
var nomeInserito = prompt("Inserisci il nome dell'allunno:");
var cognomeInserito = prompt("Inserisci il cognome dell'allunno");
var etaInserita = prompt("Inserisci l'età dell'allunno");

var nuovoAlunno = {
  "nome" : nomeInserito,
  "cognome" : cognomeInserito,
  "eta" : etaInserita
}

arrayStudenti.push(nuovoAlunno);

console.log(arrayStudenti);
