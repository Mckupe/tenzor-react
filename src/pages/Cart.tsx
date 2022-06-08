import { useState } from "react";
import { Link } from 'react-router-dom';

const Cart = () => {
    const [counts, setCounts] = useState(localStorage.getItem('cart') ? (JSON.parse(localStorage.getItem('cart') || '{}')[0].count) : 0)
    const [sum, setSum] = useState(localStorage.getItem('cart') ? (JSON.parse(localStorage.getItem('cart') || '{}')[0].sumPrice) : 0)
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
                <h1 className='total_Count'>Товаров в корзине: {counts}</h1>
                <h1 className='total_Sum'>Общая сумма товаров: {sum}</h1>
                </div>
                <div className="orders_cart">
                    <div className="tovar_cart">
                        <button onClick={()=>{}} className="cart_Button"> Сделать заказ </button>
                    </div>
                </div>
                <div className="imputs_cart">             
                </div>
            </main>
        </div>
    )
}

export default Cart;