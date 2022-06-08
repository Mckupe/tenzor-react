import { useEffect, useState } from "react";

//Токен работает только с vpn(санкции) и меняется каждый час(приложение в бетте)
var token = "IGQVJXUFM4ZAVJjVjJwcFVhTXdTb2oxZAVhFVDdoRWxoZAk1BTmtJT3dkeXNSSF9Rc1c4QlFkaEM1RHhIblFwNndTS21GclowMHVZAZAGRra2RuLUhmRW00clhXbS0tc1dsYUkzUTBldW5HVmt1LTF2M1NEZAQZDZD";
const Instagram = () => {
  const [instData, setInstData] = useState([]);
  useEffect(() => {
    fetch(`https://graph.instagram.com/me?fields=media&access_token=` + token)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (let i of data.media.data) {
          fetch(`https://graph.instagram.com/` + i.id + `?fields=media_type,media_url&access_token=` + token)
            .then((response) => response.json())
            .then((data) => {
              let temp = instData;
              temp.push(data.media_url)
              setInstData(temp);
              console.log(instData);
              //console.log(data.media_url);
              // data.map((item) => {item.media_type === "IMAGE" ? <img src={data.media_url} class="instaFoto" alt="фото из инстаграмма" /> : <iframe src={data.media_url} class="instaFoto" title={i.id} href="https://www.youtube.com/watch?v=Z-WqqIBglIM" />})
              // if (data.media_type === "IMAGE") {
              //   list.push(<img src={data.media_url} class="instaFoto" alt="фото из инстаграмма" />)
              // }
              // if (data.media_type === "VIDEO") {
              //   list.push(<iframe src={data.media_url} class="instaFoto" title={i.id} href="https://www.youtube.com/watch?v=Z-WqqIBglIM" />)
              // }
            }).catch((err) => console.log(err))
        }
      }).catch((err) => console.log(err))
  }, [])
  
  //ХОТЬ УБЕЙ НЕ РАБОТАЕТ!!!! НЕ ПОНИМАЮ !! вроде создаёт и записывает instData, но ничего не меняет
  return (<>
    <h2 className="insta_Lable">Подпишитесь на мой инстаграм</h2>
    <a href="https://www.instagram.com/nelly_crystal/" className="insta">
      {instData.map((data)=>(<img src={data} className="instaFoto" alt="фото из инстаграмма"/>))}
    </a>
  </>);
}

export default Instagram;
