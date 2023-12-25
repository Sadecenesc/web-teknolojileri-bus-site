const options = {
    bottom: '64px', // default: '32px'
    right: '32px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
  let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'MERCEDES TRAVEGO',
        image: "../img/TRAVEGO2.1.JPG",
        price: 11100000
    },
    {
        id: 2,
        name: 'MAN',
        image: "../img/man2.JPG",
        price: 9100000
    },
    {
        id: 3,
        name: 'MERCEDES TOURİSMO',
        image: "../img/tourismo.2015.JPG",
        price: 11100000
    },
    {
        id: 4,
        name: 'NEOPLAN',
        image: "../img/neoplan.2.JPG",
        price: 11100000
    },
    {
        id: 5,
        name: 'TEMSA',
        image: "../img/temsa1.JPG",
        price: 10000000
    },
    {
        id: 6,
        name: 'MERCEDES TRAVEGO 2015',
        image: "../img/travego2015.JPG",
        price: 8900000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
   reloadCard();
}

// --------------------------------------anket kısmı----------------------------------------------- //


//memnuniyet
const correctAnswers = ['E', 'E', 'E', 'E', 'E'];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnsers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    console.log(userAnsers);
    userAnsers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 20;
        }
    })


    result.classList.remove('d-none');
    let puan = 0;
    const bastir = setInterval(() => {
        result.querySelector('span').textContent = '${puan}%' ;
        if (puan == score) {
            clearInterval(bastir);//setintervali durdurmayi saliyor
        }
        else {
            puan++;
        }
},10);


})









































