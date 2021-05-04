/* Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.
Consigli del giorno:
Create inizialmente un html base con gli elementi minimi necessari al funzionamento, passate poi alla parte JS ragionando come sempre a step. Prima la logica in italiano e poi traduciamo in codice. console.log() è nostro amico. Quando tutto funziona passate alla parte visiva lavorando al css */

//creo una lista ingredienti e gli assegno un prezzo
var lista = [
    ['cheese', '1'],
    ['tomato', '0.5'],
    ['egg', '1'],
    ['lettuce', '0.5'],
    ['mustard', '0.5'],
    ['ketchup', '0.5']
];
//li stampo nell'html 
function renderInput(lista, el) {
    for (let i = 0; i < lista.length; i++) {
        el.insertAdjacentHTML('beforeend',
        `
        <div class="form-group">
        <img width="30" src="./assets/img/${lista[i][0] + '.svg'}">
                <label for="${lista[i][0]}">${lista[i][0]}</label>
                <input type="checkbox" name="${lista[i][0]}" id="${lista[i][0]}" data-price="${lista[i][1]}">
        </div>
        `
        );

    }
}
var el = document.querySelector('.ingredients');
renderInput(lista, el);

//incrementa il prezzo quando un elemento viene aggiunto
var checks = document.querySelectorAll("input[type='checkbox']");
console.log(checks.checked);
for (var i = 0; i < checks.length; i++) {
    var element = checks[i]; 
    if (element.checked) {
        console.log(cheks[i]);
    }
}
/* var sum = null;
var prezzoPane = 2;
var prezzoBurger = sum; */


//creo array di codici sconto
//se inserito un codice sconto corretto lo applico
//solo al click su generate aggiungo un addEventListener
document.querySelector('button').addEventListener('click', function() {
    
})