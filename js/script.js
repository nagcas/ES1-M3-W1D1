// Verifico su console log se il mio script è collegato al document html
console.log("It's working...");

/* EXTRA 1
   Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto 
   alla sezione "Altro" nell'elemento "aside". 
   Deve avvenire al caricamento della pagina, automticamente.
*/

// Assegno alla variabile il puntatore al document contenente il tag a di twitter
let listUnstyled = document.querySelectorAll(".p-4:last-child .list-unstyled li a");
// Stampa su console il contenuto del tag li numero 2 selezionato
//console.log(listUnstyled[1].textContent);

// Elemento contenitore della lista
let containerEl = listUnstyled[1].parentNode;
// console.log(containerEl)
// Rimuovo l'elemento
containerEl.removeChild(listUnstyled[1]);


/* EXTRA 2 
   Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM
   cliccando sul link "Continua a leggere".
*/

// Assegno alla variabile il puntatore della classe link 
let readToContinue = document.getElementsByClassName("font-weight-bold");
// Stampa su console il contenuto del puntatore readToContinue
// console.log(readToContinue[0].textContent)

// Eseguo un evento con la funzione sul click del button "continua a leggere"
readToContinue[0].addEventListener("click", function() {
   // Stampo su console il controllo se l'evento viene effettivamente cliccato
   // console.log("Hai premuto su continua...");
   
   // Assegno alla variabile il puntatore del contenuto di jumbotron
   let containerJumbotron = document.getElementsByClassName("jumbotron p-4 p-md-5 rounded ");
   // Stampo su console il contenuto testuale del jumbotron
   // console.log(containerJumbotron[0].textContent);
   // eseguo la rimozione del contenuto completo di jumbotron
   containerJumbotron[0].remove();
});

/* EXTRA 3
   Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta 
   che il cursore passa sopra l'autore del post.
*/

// Assegno alla variabile il puntatore della classe al nome dell'autore 
let authorAlert = document.querySelectorAll(".blog-post-meta a");
// Stampa su console il contenuto del puntatore 
// console.log(authorAlert[0].textContent);

// Eseguo un ciclo sui tre nomi degli autori
for (let i = 0; i < authorAlert.length; i++) {
   authorAlert[i].addEventListener("mouseover", function() {
      // Stampa su console l'evento mouseover di conferma
      // console.log("Sei sopra l'autore");
      // Visualizza su un alert il nome dell'autore
      alert("Article author: " + authorAlert[i].textContent);
   })
};








