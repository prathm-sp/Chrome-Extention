fetch("https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw", {
    "headers": {
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "7f2e03730cmsha9fa45c5231ddc1p11c442jsnb5a88a361c13",
        "x-bingapis-sdk": "true"
    }
})
    .then(response => response.json())
    .then(data => news(data))
function news(data) {
    document.getElementById('i1').src = data.value[0].image.thumbnail.contentUrl;
    document.getElementById('i2').src = data.value[1].image.thumbnail.contentUrl;
    document.getElementById('i3').src = data.value[2].image.thumbnail.contentUrl;
    document.getElementById('i4').src = data.value[3].image.thumbnail.contentUrl;
    document.getElementById('i5').src = data.value[4].image.thumbnail.contentUrl;
    document.getElementById('i6').src = data.value[5].image.thumbnail.contentUrl;
    document.getElementById('i7').src = data.value[6].image.thumbnail.contentUrl;
    document.getElementById('i8').src = data.value[7].image.thumbnail.contentUrl;
    document.getElementById('i9').src = data.value[8].image.thumbnail.contentUrl;
    document.getElementById('i10').src = data.value[9].image.thumbnail.contentUrl;
    document.getElementById('1').innerHTML = "⏩" + data.value[0].description;
    document.getElementById('2').innerHTML = "⏩" + data.value[1].description;
    document.getElementById('3').innerHTML = "⏩" + data.value[2].description;
    document.getElementById('4').innerHTML = "⏩" + data.value[3].description;
    document.getElementById('5').innerHTML = "⏩" + data.value[4].description;
    document.getElementById('6').innerHTML = "⏩" + data.value[5].description;
    document.getElementById('7').innerHTML = "⏩" + data.value[6].description;
    document.getElementById('8').innerHTML = "⏩" + data.value[7].description;
    document.getElementById('9').innerHTML = "⏩" + data.value[8].description;
    document.getElementById('10').innerHTML = "⏩" + data.value[9].description;

}