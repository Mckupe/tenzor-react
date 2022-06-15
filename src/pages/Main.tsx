import { postData } from '../scripts/feedback Api';
import { Link } from 'react-router-dom';
import Instagram from '../scripts/Instagramm Api';
import { Data, Modal, useInfo } from '../scripts/load Goods';
import { useState } from 'react';

const Main = () => { 
    const [id, setId] = useState(0)
    const [modActive, setModActive] = useState(false)
    //const [counts, setCounts] = useState(localStorage.getItem('cart') ? (JSON.parse(localStorage.getItem('cart') || '{}')[0].count) : 0)
    //const [sum, setSum] = useState(localStorage.getItem('cart') ? (JSON.parse(localStorage.getItem('cart') || '{}')[0].sumPrice) : 0)
    const sum = useInfo("sumPrice");
    const count = useInfo("count");
    return (
        <div className='Page_layout'>
            <div className="Main">
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

                <main className='content'>
                    <section className="about">
                        <div className="background"></div>
                        <div className="about-content">
                            <img className="foto1" src="./foto/1.jpg" alt="Первое фото" />
                            <img className="foto2" src="./foto/2.png" alt="Второе фото" />
                            <img className="foto3" src="./foto/3.JPG" alt="Третье фото" />
                            <div className="text1">
                                <h1>ABOUT US</h1>
                                <p className='text-p'>testtesttesttesttesttestettesttesttestetestettesttest</p>
                                <p className='text-p'>test testtesttesttesttestettesttesttestetestettesttesttest</p>
                                <p className='text-p'>Подпись заказчика</p>
                            </div>
                        </div>
                    </section>

                    <section className="shop">

                        <div className="shop_lable">
                            <i>SHOP</i>
                        </div>
                        <div className="block">
                            <div className="left_material">
                                <h1 className='material_name'>Bronze</h1>
                            </div>
                            <Data x='0' y='4' className="tovar bordered" setActive={setModActive} setId={setId}></Data>
                            <div className="material bordered"></div>
                            <div className="left_material bordered">
                                <h1 className='material_name'>Нень</h1>
                                <h1 className='material_name'>Vlasovdap dolinsky</h1>
                            </div>
                            <Data x='4' y='8' className="tovar bordered" setActive={setModActive} setId={setId}></Data>
                            <div className="material"></div>
                            <div className="left_material">
                                <h1 className='material_name'>Sperky</h1>
                            </div>
                            <Data x='8' y='12' className="tovar" setActive={setModActive} setId={setId}></Data>
                            <div className="material"></div>
                            <div className="left_material">
                            </div>
                            <Data x='12' y='16' className="tovar" setActive={setModActive} setId={setId}></Data>
                            <div className="material"></div>
                        </div>
                        <Link to="/cart"><button className="shopButton"> VICE </button></Link>

                    </section>
                    <a href= 'https://www.instagram.com/nelly_crystal/' className="insta">
                    </a>
                    <section className="deliver">
                    </section>
                    <Instagram></Instagram>
                    <section className="deliver" />
                </main>

                <footer className='footers'>
                    <i className="contact">Контакawdawт my</i>
                    <p className="questions">WDADWAFAGAWGAGWIPAPAPAP TEST TESTTEST?</p>
                    <p className="textMassage">send us Link message you can here</p>
                    <div className="fieldBlock">
                        <p>Name</p>
                        <input className="inpField"></input>
                        <p>Email</p>
                        <input className="inpField"></input>
                        <p>Phone</p>
                        <input className="inpField"></input>
                        <p>Messege</p>
                        <textarea className="messege"></textarea>
                    </div>
                    <button onClick={() => postData()} className="send">Send</button>
                </footer>
            </div>
            <div className='cartAlert'>
                <h2 className='total_Count'>Товаров в корзине: {count[0]}</h2>
                <h2 className='total_Sum'>Общая сумма товаров: {sum[0]} Руб.</h2>
                <Link to='/cart'>К корзине</Link>
            </div>
            <Modal active={modActive} setActive={setModActive} id={id} setCounts={count[1]} setSum={sum[1]}></Modal>
        </div>
    )
}

export default Main
