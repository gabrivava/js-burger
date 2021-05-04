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
        <div class="form-group d-flex align-center py-1">
                <img width="40" src="./assets/img/${lista[i][0] + '.svg'}">
                <label class="px-1" for="${lista[i][0]}">${lista[i][0]}</label>
                <input type="checkbox" name="${lista[i][0]}" id="${lista[i][0]}" data-price="${lista[i][1]}">
        </div>
        `
        );
    }
}
var el = document.querySelector('.ingredients');
renderInput(lista, el);

//calcola prezzo panino al click
document.querySelector('button').addEventListener('click', function() {
    //incrementa il prezzo quando un elemento viene aggiunto
    var prezzoPane = 2;
    var checks = document.querySelectorAll("input[type='checkbox']");
    var sumEl = null;
    for (var i = 0; i < checks.length; i++) {
        if (checks[i].checked) {
            sumEl += Number(checks[i].getAttribute('data-price'));
        }
    }   

    var priceBurger = prezzoPane + sumEl;
    var sconto = 0.5;
    var finalPrice;

    //creo array di codici sconto
    var listaCodiciSconto = [123456, 234567, 345678, 456789, 567890];
    //console.log(listaCodiciSconto);
    var codiceScontoUtente = document.querySelector('#codice_sconto').value;
    //console.log(codiceScontoUtente);
    if (isSconto(codiceScontoUtente, listaCodiciSconto)) {
        finalPrice = priceBurger * sconto;
    }   else {
        finalPrice = priceBurger;
    }
    
    document.querySelector('#prezzo_burger').innerHTML = finalPrice + '€';
    //console.log(finalPrice);
})

//funzione che mi cerca lo sconto
function isSconto(numero, listaNumeri) {
    for (var i = 0; i < listaNumeri.length; i++) {
        //se inserito un codice sconto corretto lo applico
        if (numero == listaNumeri[i]) {
            return true;
        }
    }   
}
