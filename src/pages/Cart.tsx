import { useEffect } from "react";
import { Link } from 'react-router-dom';
import {loadInfo,postOrders} from '../scripts/load Goods';

const Cart = () => {
    useEffect(loadInfo)
    return (
        <div className="Cart">
            <header className="Main-header">
                    <div className="top-Main-header">
                        <Link to="/" className="Logo">NELLY</Link>
                        <Link to="/" className="Logo-bottom">crystal</Link>
                    </div>
                    <div className="bottom-Main-header">
                        <div className="left">
                            <Link to="/" className="link">Броши</Link>
                            <Link to="/" className="link">Ук. в волосы</Link>
                            <Link to="/" className="link">Ожерелья</Link>
                            <Link to="/" className="link">Браслет</Link>
                        </div>
                        <div className="right">
                            <Link to="/" className="link">Поиск</Link>
                            <Link to="/cart" className="link">Корзина</Link>
                        </div>
                    </div>
                </header>
            <main className="content_cart">
                <div className="info_cart">
                <h1 className='total_Count'>Товаров в корзине: 0</h1>
                <h1 className='total_Sum'>Общая сумма товаров: 0</h1>
                </div>
                <div className="orders_cart">
                    <div className="tovar_cart">
                        <button onClick={()=>postOrders("Url сервера, которого пока нет")} className="cart_Button"> Сделать заказ </button>
                    </div>
                </div>
                <div className="imputs_cart">             
                </div>
            </main>
        </div>
    )
}

export default Cart;