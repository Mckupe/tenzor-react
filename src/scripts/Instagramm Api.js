//Токен работает только с vpn(санкции) и меняется каждый час(приложение в бетте)
function instaScript() {
  var token = "IGQVJXUFM4ZAVJjVjJwcFVhTXdTb2oxZAVhFVDdoRWxoZAk1BTmtJT3dkeXNSSF9Rc1c4QlFkaEM1RHhIblFwNndTS21GclowMHVZAZAGRra2RuLUhmRW00clhXbS0tc1dsYUkzUTBldW5HVmt1LTF2M1NEZAQZDZD";
    fetch(`https://graph.instagram.com/me?fields=media&access_token=` + token)
    .then(function(response) {
      return response.json();//Получаем адишники медиа с аккаунта
    })
    .then(function(data) {
      console.log('Request successful', data);
      var list = document.getElementsByClassName('insta')[0];
      for (let i of data.media.data)
      {
        fetch(`https://graph.instagram.com/` + i.id + `?fields=media_type,media_url&access_token=` + token)
        .then(function(response) {
            return response.json();//Получаем url самих медиа
        })
        .then(function(data) {
            console.log('Request successful', data);//Вставляем наши медиа из инстаграмма на сайт
            if (data.media_type === "IMAGE")
            {const img = document.createElement("img"); //если фото
            img.src = data.media_url;
            img.className = 'instaFoto';
            list.append(img);}
            if (data.media_type === "VIDEO")
            {const video = document.createElement("iframe");//если видео
            video.src = data.media_url;
            video.className = 'instaFoto';
            list.append(video);}  
            return data.media_url;
        })
        .catch(function(error) {
            console.log('Request failed', error)
        });  
    }  
      return data.media.data;
    })
    .catch(function(error) {
      console.log('Request failed', error)
    });
}
document.addEventListener("DOMContentLoaded", instaScript);
