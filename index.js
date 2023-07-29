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
const table = document.getElementById("table");
const button = document.getElementById("gridView");
button.addEventListener("click",() =>  {
    
    fetchCards();
})

async function fetchCards() {
    let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
    const response = await fetch(url);
    const data = await response.json();
    clearData();
    appendData(data);
    appendData1(data);
    // listView(data);
}

function clearData(){
    for(let i=0;i<data.length;i++){
    let a = document.getElementsByTagName("div")[i];
    if(a === undefined) {
        return;
    }
    a.remove();
}
    
}


function appendData(cardsList) {
    console.log("done");
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
// fetchCards();



function appendData1(list){
    let tBody = document.createElement("tbody");
     for (let i = 0; i < list.length; i++) {
        let tr = document.createElement("tr");
        let t1 = document.createElement("img");
        t1.src = list[i].image;

        let t2 = document.createElement("td");
        t2.innerText = list[i].name;

        let t3 = document.createElement("td");
        t3.innerText = list[i].price_change_percentage_24h;

        let t4 = document.createElement("td");
        t4.innerText = list[i].current_price;

        let t5 = document.createElement("td");
        t5.innerText = list[i].total_volume;

        let t6 = document.createElement("td");
        t6.innerText = list[i].market_cap;

        tr.append(t1,t2,t3,t4,t5,t6);
        tBody.appendChild(tr);
     }
     table.appendChild(tBody);
}
fetchCards();