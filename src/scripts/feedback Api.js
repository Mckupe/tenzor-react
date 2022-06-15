async function postData(url = 'Url моего будующего сервера') { //У меня пока что нет сервера
    const values = [].slice.call(document.getElementsByClassName("inpField")).map((n) => { return n.value }) //Получение значений полей имени/почты/номера
    const messege = document.getElementsByClassName('messege')[0].value;
    values.push(messege);
    console.log('try to post massage from : ' + values);
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values) //Попробовать отправить json на мой сервер
    });
}

export { postData };