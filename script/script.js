
let eluserName = document.getElementById('nome');
console.log(eluserName);

let elAge = document.getElementById('userage');
console.log(elAge);

let elKmeters = document.getElementById('kilometers');
console.log(elKmeters);

let priceKm = elKmeters * 0.21;
console.log(priceKm);

let under18 = 20 / 100;
console.log(under18);

let over65 = 40 / 100;
console.log(over65);

let elBtngen = document.querySelector('.btn.bg-primary');
console.log(elBtngen);

let elBtnnull = document.querySelector('.btn.bg-warning');
console.log(elBtnnull);



elBtngen.addEventListener('click', function()
{
    console.log('hai confermato');
    let nome = eluserName.value;
    let eta = elAge.value;
    let meters = elKmeters.value;
    console.log(nome, eta, meters);
    if (eta === 'under18user') {
        priceKm -= ( priceKm * under18 );
        console.log(`il prezzo è ${priceKm.toFixed}`);
    }
});

