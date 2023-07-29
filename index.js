const container = document.getElementById("container");

/*
<div class="card">
            <div class="top">
                <div class="first">
                <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579">
                    <span class="nameSymbol">
                        <div class="symbol">BTC</div>
                    <div class="name">Bitcoin</div>
                    </span>
                </div>
                <div class="second">0.97%</div>
            </div>
            <div class="bottom">
                <div class="price">$29,478</div>
                <div class="volume">Total Volume:1215454655415</div>
                <div class="cap">Market Cap:55545154655415</div>
            </div>
        </div>
*/

async function fetchCards() {
    let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
    const response = await fetch(url);
    const data = await response.json();
    appendData(data);
}

function appendData(cardsList) {
    cardsList.forEach((card) => {
        /*
        {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    "current_price": 29302,
    "market_cap": 569688754226,
    "price_change_percentage_24h": -0.21776
    "total_volume": 6407948001,
  
  }
         */

  let div = document.createElement("div");
        div.className="card";
        div.innerHTML = `
        <div class="top">
                <div class="first">
                <img src=${card.image}>
                    <span class="nameSymbol">
                    <div class="name">${card.name}</div>
                        <div class="symbol">${card.symbol}</div>
                    
                    </span>
                </div>
                <div class="second">${card.price_change_percentage_24h}</div>
            </div>
            <div class="bottom">
                <div class="price">$${card.current_price}</div>
                <div class="volume">Total Volume: ${card.total_volume}</div>
                <div class="cap">Market Cap:$${card.market_cap}</div>
            </div>
        `
        container.appendChild(div);
    })
}
fetchCards();