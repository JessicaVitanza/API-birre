fetch('https://api.punkapi.com/v2/beers')
.then(resp => resp.json()).then(res => displayBeers(res));

function displayBeers(beers) {
  const container = document.getElementById('cards');
  for (const beer of beers) {
    console.log(beer);
    const card = document.createElement('div');
    card.classList.add('card');

    const beerName = document.createElement('h2');
    beerName.innerText = beer.name;
    beerName.classList.add('name');
    card.appendChild(beerName);

    const beerImage = document.createElement('img');
    beerImage.classList.add('images');
    beerImage.src = beer.image_url;
    card.appendChild(beerImage);

    const beerDescr = document.createElement('p');
    beerDescr.innerText = beer.description;
    beerDescr.classList.add('description')
    card.appendChild(beerDescr);

    const foodPairing = document.createElement('h3');
    foodPairing.innerText = 'food pairings:'
    foodPairing.classList.add('pairings');
    card.appendChild(foodPairing);

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