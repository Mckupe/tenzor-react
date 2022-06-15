//Токен работает только с vpn(санкции) и меняется каждый час(приложение в бетте)
import {useState } from "react";
import data from '../data/goods.json';
import orders from '../data/orders.json';

const Data = (props) => {// загрузить товар
    return (
        <div className={props.className}>
            {data.slice(props.x, props.y).map((dat) => { return <img id={dat.id} src={dat.img} className='tovarFoto' alt={dat.name} onClick={() => {props.setId(dat.id); props.setActive(true)}} key={dat.id} /> })}
        </div>);
}

const Modal = ({active,setActive,id,setCounts,setSum}) =>{
    return(
        <div className={active ? "modal_wrapper open" : "modal_wrapper close"}  >
            <div className="modal_body">
                <div className="modal_close" onClick={() => { setActive(false) }}>X</div>
                <img className="modal_image" src={data[id].img}  alt={data[id].name} />
                <h1 className="modal_name">{data[id].name}</h1>
                <p className="modal_about">{data[id].about}</p>
                <h1 className="modal_price">{data[id].price} Руб.</h1>
                <button className="modal_cartButton" onClick={()=>{addOrder(id,setSum,setCounts);}}>В корзину</button>
            </div>
        </div>
    );
}

function addOrder(id,setSum,setCounts) {//добовляет товар в корзину
    if (localStorage.getItem('cart') != null) {
        orders = JSON.parse(localStorage.getItem('cart'));
    }
    var currId = Number(id) + 1;
    orders[0].count++;
    orders[0].sumPrice += data[id].price;
    if (orders[currId] !== undefined && orders[currId] !== null) {
        orders[currId].count++;
    }
    else orders[currId] = (data[id]);
    setCounts(orders[0].count);
    setSum(orders[0].sumPrice);
    localStorage.setItem('cart', JSON.stringify(orders));
}

function useInfo(item) {
    const [first, second] = useState(localStorage.getItem('cart') ? (JSON.parse(localStorage.getItem('cart') )[0][item]) : 0);
    return [first, second];
}

export { Data, Modal, useInfo};