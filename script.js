function sendApiRequest(){
    let  userInput = document.getElementById('input').value

    let giphyApiKey = "8574c95d949f4bfcbfd507e384e8ce9d";
    let giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`;

    fetch(giphyApiURL).then(function(data){
        return data.json(); //Jjson— текстовый формат обмена данными,
    })
    .then(function(json){
        console.log(json.data[0].images.fixed_height.url);
        let imgPath = json.data[0].images.fixed_height.url;
        let img = document.createElement('img');
        img.setAttribute('src', imgPath) // setAttribute - позволяет добавить новы   аттрибут
        document.body.appendChild(img)
    })
}