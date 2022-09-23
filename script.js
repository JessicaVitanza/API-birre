
// richiamo i dati dall'api
fetch('https://api.punkapi.com/v2/beers')
.then(resp => resp.json()).then(res => displayBeers(res));

// creo una funzione per portare a display tutte le birre contenute nell'api e per ognuna creo una card
function displayBeers(beers) {

  // prendo l'elemento div nell'html tramite il suo id "cards" 
  const container = document.getElementById('cards');
  for (const beer of beers) {

    // creo un div che rappresenta la card
    console.log(beer);
    const card = document.createElement('div');
    card.classList.add('card');

    // creo un div che racchiude nome e immagine della birra per creare una divisione in css nella card visibile
    const topCard = document.createElement('div');
    topCard.classList.add('top-card');
    card.appendChild(topCard);

    // creo il nome per ogni elemento
    const beerName = document.createElement('h2');
    beerName.innerText = beer.name;
    beerName.classList.add('name');
    topCard.appendChild(beerName);

    // creo l'immagine per ogni elemento
    const beerImage = document.createElement('img');
    beerImage.classList.add('images');
    beerImage.src = beer.image_url;
    topCard.appendChild(beerImage);

    // creo la scritta "Descrizione :"
    const description = document.createElement('h3');
    description.innerText = 'description :'
    description.classList.add('description');
    card.appendChild(description);

    // creo la descrizione di ogni elemento
    const beerDescr = document.createElement('p');
    beerDescr.innerText = beer.description;
    beerDescr.classList.add('beer-description');
    card.appendChild(beerDescr);

    // creo la scritta "Food pairings :"
    const foodPairing = document.createElement('h3');
    foodPairing.innerText = 'food pairings :'
    foodPairing.classList.add('pairings');
    card.appendChild(foodPairing);

    // creo una lista per ogni elemento
    const foodPairingList = document.createElement('ul');
    for (const pairing of beer.food_pairing) {
      const pairingLi = document.createElement('li');
      pairingLi.innerText = pairing;
      pairingLi.classList.add('list')
      foodPairingList.appendChild(pairingLi);
    }
    card.appendChild(foodPairingList);
    

    cards.appendChild(card);

  }
}