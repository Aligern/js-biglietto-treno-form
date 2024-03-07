let under18 = 20 / 100;
console.log(under18);

let over65 = 40 / 100;
console.log(over65);

let elBtngen = document.querySelector('.btn.bg-primary');
console.log(elBtngen);

let elBtnnull = document.querySelector('.btn.bg-warning');
console.log(elBtnnull);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

elBtngen.addEventListener('click', function(){
    // conferma il click su console 
    console.log('hai confermato');
    // variabili che agiscono nella funzione
    let eluserName = document.getElementById('nome');
    console.log(eluserName);
    let elAge = document.getElementById('userage');
    console.log(elAge);
    let elKmeters = document.getElementById('kilometers').value;
    console.log(elKmeters);
    let priceKm = elKmeters * 0.21;
    console.log(priceKm);
    let nome = eluserName.value;
    let eta = elAge.value;
    let meters = elKmeters.value;
    console.log(nome, eta, meters);
    // condizioni 
    if (eta === 'under18user') {
        priceKm -= ( priceKm * under18 );
        document.getElementById('ticket-type').innerHTML = 'Sconto minori';
    } else if (eta === 'over65user') {
        priceKm -= ( priceKm * over65 );
        document.getElementById('ticket-type').innerHTML = 'Sconto over65';
    } else {
        document.getElementById('ticket-type').innerHTML = 'Biglietto standard';
    }
    console.log(`il prezzo è ${priceKm.toFixed(2)}`);
    document.getElementById('ticket-user').innerHTML = `${nome}`;
    document.getElementById('ticket-value').innerHTML = `${priceKm.toFixed(2)}`;
    document.getElementById('ticket-id').innerHTML = getRndInteger(80000, 99999);
    document.getElementById('wagon-nmb').innerHTML = getRndInteger(1,9);
});

elBtnnull.addEventListener('click', function(){
    console.log('hai annullato');
    document.getElementById('nome').value = "";
    document.getElementById('userage').value = "";
    document.getElementById('kilometers').value = "";
    console.log('cancella tutto')
}
)

