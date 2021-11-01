let url = 'https://itunes.apple.com/search?term=';
let byId = `https://itunes.apple.com/lookup?id=`
async function getApi(api) {
    try {
        aWaitingGif()
        return await fetch(api)
            .then(response => response.json())
    }
    catch (error) {
        return error
    }
}

function aWaitingGif() {
    infoDiv.innerHTML = `<img id="waitGif" src="../../רקעים/waitingGif.gif" width="400px" height="500p">`
}

aButt.onclick = () => {
    getApi(url + anInput.value).then((res) => {
        display(res)
    })
        .catch((rej) => { console.log(rej); })
        .finally(() => { waitGif.style.display = "none";
       })
}

function display(info) {
    for (let item of info.results) {
        if(item.kind=="song"){
            console.log(item);
        infoDiv.innerHTML += `<div id="infoDivv"><h2>artist id</h2><p>${item.artistId}</p><h2>arist</h2><p>${item.artistName}</p>
        <h2>track</h2><p>${item.trackName}</p>
        <h2>album</h2><p>${item.collectionName}</p>
     <img class="songImg" src="${item.artworkUrl100}" width="200px" height="300px">
     <p><a class="artistPage" href="${item.trackViewUrl}" target="_blank">track page</a></p>
    <p><a class="artistPage" href="${item.artistViewUrl}" target="_blank">artist page</a></p>
    </div>`
    }
}
}


function displayById(info){
    for(let key of info.results){
        infoDiv.innerHTML=`<div id="infoDivv2"><h2>artist name</h2><p>${key.artistName}</p><h2>artist genere</h2><p>${key.primaryGenreName}</p>
        <a class="artistPage" href="${key.artistLinkUrl}" target="_blank">artist page</a></p></div>`
    }
}
serchId.onclick = () => {
    getApi(byId + idInput.value).then((res) => {
        displayById(res)
    })
    .catch((rej)=>{console.log(rej)})
    .finally(() => { waitGifId.style.display = "none" })
}
