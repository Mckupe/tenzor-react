async function postData(url = 'Url моего будующего сервера') { //У меня пока что нет сервера
    const values = [].slice.call(document.getElementsByClassName("inpField")).map((n) => {return n}) //Получение значений полей имени/почты/номера
    const massage = document.getElementsByClassName('massage')[0].value;
    values.push(massage);
    console.log('try to post massage from : ' + values);
    try {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values) //Попробовать отправить json на мой сервер
        });
    } catch (err) {
        console.log(err);
    }
}

export {postData};