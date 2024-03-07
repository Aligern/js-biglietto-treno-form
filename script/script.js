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

let elBtngen = document.getElementsByClassName('.btn.bg-primary');
console.log(elBtngen);

let elBtnnull = document.getElementsByClassName('.btn.bg-warning');
console.log(elBtnnull);



elBtngen.addEventListener('click', function(){
    const nome = eluserName.value;
    const eta = elAge.value;
    const meters = elKmeters.value;
    console.log(nome, eta, meters);
} 
)






