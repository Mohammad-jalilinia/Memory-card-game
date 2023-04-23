
const cards = document.querySelectorAll(".cards");

let cardOne , cardTwo;
let disableDeck = false;
let matchedCard = 0;

function flipcard(e){
    let clickedCard = e.target;
    if(clickedCard !== cardOne && !disableDeck){
        clickedCard.classList.add("flip");
        if(!cardOne){
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;

        let cardOneImg = cardOne.querySelector("img").src;
        let cardTwoImg = cardTwo.querySelector("img").src;
        matchedCarts(cardOneImg, cardTwoImg);
    }
}

function matchedCarts(img1 , img2){
    if(img1 === img2){
        matchedCard++
        if(matchedCard === 8){
            return shuffleCard();
        }
        cardOne.removeEventListener("click",flipcard);
        cardTwo.removeEventListener("click",flipcard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(()=>{
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    },500)
    setTimeout(()=>{
        cardOne.classList.remove("shake","flip");
        cardTwo.classList.remove("shake","flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    },1200)
}

function shuffleCard(){
    matchedCard = 0;
    cardOne = cardTwo = "";
    cards.forEach(card => {
        card.classList.remove("flip");
        card.addEventListener("click",flipcard);
        document.querySelector(".p").innerHTML = 'you won !'
    });
}

cards.forEach(card => {
    card.addEventListener("click",flipcard)
});
