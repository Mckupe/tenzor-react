//Токен работает только с vpn(санкции) и меняется каждый час(приложение в бетте)
import data from '../data/goods.json';
import orders from '../data/orders.json';

function dataLoad() {// загрузить товар
    var tovar = document.getElementsByClassName('tovar');
    var i = 0;
    //console.log("скрипт запущен")
    for (let dat of data) {
        console.log(dat)
        const img = document.createElement("img");
        img.id = dat.id;
        img.src = dat.img;
        img.className = 'tovarFoto';
        img.alt = dat.name;
        img.addEventListener('click', function (event) { createModal(event) });
        tovar[i].append(img);
        if ((dat.id + 1) % 4 === 0) i++;
    }
    var count = document.getElementsByClassName('total_Count')[0];
    var sum = document.getElementsByClassName('total_Sum')[0];
    count.innerHTML = "Товаров в корзине: " + orders[0].count;
    sum.innerHTML = "Общая сумма товаров: " + orders[0].sumPrice + " Руб.";
}

function createModal(event) {//моздать и открыть модальное окно, при нажатии на товар
    const modal = document.createElement("div");
    const modalBody = document.createElement("div");
    const closeButton = document.createElement("div");
    const img = document.createElement("img");
    const price = document.createElement('h1');
    const name = document.createElement('h1');
    const about = document.createElement('p');
    const cartButton = document.createElement('button');

    name.innerHTML = data[event.target.id].name;
    name.className = "modal_name";

    price.innerHTML = data[event.target.id].price + " Руб.";
    price.className = "modal_price";

    img.src = data[event.target.id].img;
    img.className = "modal_image";

    about.innerHTML = data[event.target.id].about;
    about.className = "modal_about";

    cartButton.innerHTML = "В корзину";
    cartButton.addEventListener('click', function () { addOrder(event.target.id) });
    cartButton.className = "modal_cartButton";

    closeButton.className = "modal_close";
    closeButton.addEventListener('click', () => { document.getElementsByClassName('modal_wrapper')[0].remove() })
    closeButton.innerHTML = 'X';

    modalBody.className = "modal_body"
    modalBody.appendChild(closeButton);
    modalBody.appendChild(img);
    modalBody.appendChild(name);
    modalBody.appendChild(about);
    modalBody.appendChild(price);
    modalBody.appendChild(cartButton);
    modal.className = "modal_wrapper open";
    modal.appendChild(modalBody);
    document.body.appendChild(modal);
}

function addOrder(id) {//добовляет товар в корзину
    var currId = Number(id) + 1;
    var count = document.getElementsByClassName('total_Count')[0];
    var sum = document.getElementsByClassName('total_Sum')[0];
    orders[0].count++;
    orders[0].sumPrice += data[id].price;
    if (orders[currId] !== undefined && orders[currId] !== null) {
        orders[currId].count++;
    }
    else
        orders[currId] = (data[id]);
    //console.log(orders);
    count.innerHTML = "Товаров в корзине: " + orders[0].count;
    sum.innerHTML = "Общая сумма товаров: " + orders[0].sumPrice + " Руб.";
    localStorage.setItem('cart', JSON.stringify(orders));
}

function loadInfo() {//загружает информацию из карзины
    if (localStorage.getItem('cart') != null) {
        orders = JSON.parse(localStorage.getItem('cart'));
        var count = document.getElementsByClassName('total_Count')[0];
        var sum = document.getElementsByClassName('total_Sum')[0];
        count.innerHTML = "Товаров в корзине: " + orders[0].count;
        sum.innerHTML = "Общая сумма товаров: " + orders[0].sumPrice + " Руб.";
    }
    //console.log(orders);
}

function loadTovar() {//в этом пуше не реализоввал корзину 
    if (localStorage.getItem('cart') != null) {
        orders = JSON.parse(localStorage.getItem('cart'));
        for (let i = 1; i < orders.length; i++) {
            if (orders[i] != null) {
                var tovar = document.getElementsByClassName('tovar');
                const img = document.createElement("img");
                const price = document.createElement('h1');
                const name = document.createElement('h1');
                const about = document.createElement('p');
                const cartButton = document.createElement('button');

                name.innerHTML = orders[i].name;
                name.className = "modal_name";

                price.innerHTML = orders[i].price + " Руб.";
                price.className = "modal_price";

                img.src = orders[i].img;
                img.className = "modal_image";

                about.innerHTML = orders[i].about;
                about.className = "modal_about";

                cartButton.innerHTML = "Удалить";
                cartButton.addEventListener('click', function () {});
                cartButton.className = "modal_cartButton";

                tovar.appendChild(img);
                tovar.appendChild(name);
                tovar.appendChild(about);
                tovar.appendChild(price);
                tovar.appendChild(cartButton);
            }
        }
    }
}

function postOrders(url = 'Url моего будующего сервера') { //У меня пока что нет сервера
    //console.log('try to post massage from : ' + orders);
    try {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orders) //Попробовать отправить json на мой сервер с списком из корзины
        });
    } catch (err) {
        console.log(err);
    }
}

export { loadInfo, dataLoad, loadTovar, postOrders};