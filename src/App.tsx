import React from 'react';
import { postData } from './scripts/feedback Api';
import './scripts/Instagramm Api';

function App() {
  return(
    <div className="App">        
        <header className="App-header"> 
            <div className="top-App-header">
                <a href="/test" className="Logo">NELLY</a>
                <a href="/" className="Logo-bottom">crystal</a>
            </div>
            <div className="bottom-App-header">
                <div className="left">
                    <a href="/" className="link">Броши</a>
                    <a href="/" className="link">Ук. в волосы</a>
                    <a href="/" className="link">Ожерелья</a>
                    <a href="/" className="link">Браслет</a>
                </div>
                <div className="right">
                    <a href="/" className="link">Поиск</a>
                    <a href="/" className="link">Корзина</a>
                </div>
            </div>         
        </header>

        <main className='content'>
            <section className="about">
                <div className="background"></div>
                <div className="about-content">
                    <img className="foto1" src="./foto/1.jpg" alt="Первое фото"/>
                    <img className="foto2" src="./foto/2.png" alt="Второе фото"/>
                    <img className="foto3" src="./foto/3.JPG" alt="Третье фото"/>
                    <div className="text1">
                        <h1>ABOUT US</h1>
                        <p>testtesttesttesttesttestettesttesttestetestettesttest</p>
                        <p>test testtesttesttesttestettesttesttestetestettesttesttest</p>
                        <p>Подпись заказчика</p>
                    </div>
                </div>            
            </section>

            <section className="shop">
                <div className="Block">
                    <div className="material">
                    </div>                  
                    <div className="tovar">  
                        <i>SHOP</i>                                    
                    </div>
                    <div className="material">
                    </div>
                </div>
                <div className="block">
                    <div className="material">
                        <h1>Bronze</h1>
                    </div>                  
                    <div className="tovar bordered"> 
                        <a href="/"><img className="tovarFoto" src="./foto/mater1.png" alt="Первый материал"/></a>
                        <a href="/"><img className="tovarFoto" src="./foto/mater1.png" alt="Первый материал"/></a>  
                        <a href="/"><img className="tovarFoto" src="./foto/mater1.png" alt="Первый материал"/></a>
                        <a href="/"><img className="tovarFoto" src="./foto/mater1.png" alt="Первый материал"/></a>       
                    </div>
                    <div className="material bordered"></div>
                </div>
                <div className="block">
                    <div className="material bordered">
                        <h1>Нень</h1>
                        <h1>Vlasovdap dolinsky</h1>
                    </div>
                    <div className="tovar bordered"> 
                        <a href="/"><img className="tovarFoto" src="./foto/mater1.png" alt="Первый материал"/></a>
                        <a href="/"><img className="tovarFoto" src="./foto/mater2.png" alt="Первый материал"/></a>  
                        <a href="/"><img className="tovarFoto" src="./foto/mater1.png" alt="Первый материал"/></a>
                        <a href="/"><img className="tovarFoto" src="./foto/mater2.png" alt="Первый материал"/></a>                     
                    </div>
                    <div className="material"></div>
                </div>
                <div className="block">
                    <div className="material">
                        <h1>Sperky</h1>
                    </div>               
                    <div className="tovar">  
                        <a href="/"><img className="tovarFoto" src="./foto/mater2.png" alt="Первый материал"/></a>
                        <a href="/"><img className="tovarFoto" src="./foto/mater1.png" alt="Первый материал"/></a>  
                        <a href="/"><img className="tovarFoto" src="./foto/mater2.png" alt="Первый материал"/></a>
                        <a href="/"><img className="tovarFoto" src="./foto/mater1.png" alt="Первый материал"/></a>                   
                    </div>
                    <div className="material"></div>
                </div>
                <div className="block">
                    <div className="material">
                    </div>               
                    <div className="tovar"> 
                        <a href="/"><img className="tovarFoto" src="./foto/mater2.png" alt="Первый материал"/></a>
                        <a href="/"><img className="tovarFoto" src="./foto/mater2.png" alt="Первый материал"/></a>  
                        <a href="/"><img className="tovarFoto" src="./foto/mater2.png" alt="Первый материал"/></a>
                        <a href="/"><img className="tovarFoto" src="./foto/mater2.png" alt="Первый материал"/></a>                    
                    </div>
                    <div className="material"></div>
                </div>            
                <button className="shopButton"> VICE </button>                    
            </section>

            <section className="insta">
            </section>

            <section className="deliver">
                
            </section>
        </main>

      <footer className='footers'>
        <i className="contact">Контакawdawт my</i>
        <p className="questions">WDADWAFAGAWGAGWIPAPAPAP TEST TESTTEST?</p>
        <p className="textMassage">send us a message you can here</p>
        <div className="fieldBlock">
          <p>Name</p>
          <input className="inpField"></input>
          <p>Email</p>
          <input className="inpField"></input>
          <p>Phone</p>
          <input className="inpField"></input>
          <p>Mesage</p>
          <textarea className="message"></textarea>
        </div>
        <button onClick={() => {postData("Url сервера, которого пока нет")}} className="send">Send</button>
      </footer>
    </div>
  )
}

export default App;
