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
        console.log(data);
        let requests = data.media.data.map(i => fetch(`https://graph.instagram.com/` + i.id + `?fields=id,media_type,media_url&access_token=` + token));
        Promise.all(requests)
          .then(responses => Promise.all(responses.map(r => r.json())))
          .then((data) => {
            const temp = instData.slice();
            temp.push(data);
            setInstData(data);
            console.log(instData);
          }).catch((err) => console.log(err))
      }
      ).catch((err) => console.log(err))
  }, [])

  if (instData.length !== 0)
  return (<>
    <a href="https://www.instagram.com/nelly_crystal/">
      <h2 className="insta_Lable">Подпишитесь на мой инстаграм !</h2>
      <div href="https://www.instagram.com/nelly_crystal/" className="insta">
        {instData.map((data) => {
          switch (data.media_type) {
            case "IMAGE":
              return <img src={data.media_url} className="instaFoto" alt="фото из инстаграмма" key={data.id} />;
            case "VIDEO":
              return <iframe src={data.media_url} class="instaFoto" title={data.id} key={data.id} href="https://www.youtube.com/watch?v=Z-WqqIBglIM" />;
            default:
              return {};
          }
        })}
      </div>
    </a>
  </>);
  else return (<></>)
}

export default Instagram;
