/*<div class="container">
        <div class="AllCards row row-cols-2">
            <div class="OneCard col">
                <div class="card">
                    <div class="card-body">
                        <p class="card-text">🩷</p>
                    </div>
                </div>
            </div>
        </div>
</div>
*/

let container=document.querySelector(".container");
let AllCards  =document.createElement("div");
let moves=document.querySelector(".moves");
let retry=document.querySelector(".retry");

let firstCard=null;
let secondCard=null;
let blockFlip=false ;

let countMoves=0;
let Emojies=[
    "🧟‍♀️","🧟‍♀️","🛞","🛞","🌟","🌟","🎃","🎃","🦥","🦥",
    "⚓","⚓","🧶","🧶","🏀","🏀","🎐","🎐","☃️","☃️",
    "🦒","🦒","🍊","🍊","🍳","🍳","🚀","🚀","🪁","🪁","🔔","🔔",
    "🎭","🎭","🍔","🍔","🧁","🧁","🛸","🛸","🫧","🫧",

];
Emojies.sort(()=>Math.random()-0.5);
for (let i=0 ; i <Emojies.length;i++){
     
     let OneCard=document.createElement("div");
     let card=document.createElement("div");
     let cardBody=document.createElement("div");
     let cardP=document.createElement("p");

     AllCards.classList.add("AllCards");
     AllCards.classList.add("row");
     AllCards.classList.add("g-3");
     OneCard.classList.add("OneCard");
    //  OneCard.classList.add("col-4");
     OneCard.classList.add("col-3");
    OneCard.classList.add("col-md-2");
    OneCard.classList.add("col-lg-2");

     card.classList.add("card");
     card.classList.add("closed");
     cardBody.classList.add("card-body");
     cardP.classList.add("card-text");


     cardBody.appendChild(cardP);
     card.appendChild(cardBody);
     OneCard.appendChild(card);

     AllCards.appendChild(OneCard);
     container.appendChild(AllCards);
    /////////////////////////////////////////////////////////////////////////////
    //now we should think about how to add each emoji and make it refers to specific element 
    //-dataset -
    card.dataset.emoji=Emojies[i];
    //////////////////////////////////////////////////////////////////////////////
    

    /* 
       on the click we should flip  the card and show the emoji 
       if we click -> class should be opened instead of closed 
       remove class  , add class 
       we should opened only two cards then compare when we compare if match keep them open 
       if don't close and allow to open other cards 
     */

     card.addEventListener("click",function (){
         
        // we need two vars to refer to the two cards the user opened 
        // and we need a var to block the flip until we compare the twocards 
        /*
        let firstCard=null;
        let secondCard=null;
        let blockFlip=false ;
        */
        if (blockFlip) return 
        // if the blockflip = true you can't flip the cards yet 
        ///////////////////////////////////////////////////////////////
        if (this.classList.contains("opened")) return 
        // prevent clicking opened cards again

        //////////////////////////////////////////////////////////////////
        this.classList.remove("closed");
        this.classList.add("opened");
        cardP.textContent=this.dataset.emoji;
        // change the classes to open the cards and show the emoji
        ////////////////////////////////////////////////////////////////////////
       if (firstCard==null){
            firstCard=this;
            return ;
       }
       // we store the clicked card in the first card and 
       // to make sure this card will not store in the second card we put return
      //////////////////////////////////////////////////////////////////////////////
      secondCard=this;
      blockFlip=true;
      countMoves++;
      moves.textContent=countMoves;
      //to compare then we should reset them (first , second , flip)
      /////////////////////////////////////////////////////////////////////////////
      if(firstCard.dataset.emoji=== secondCard.dataset.emoji){
        firstCard.style.background = "rgba(239, 196, 95, 0.22)";
        firstCard.style.border = "1.5px solid #efc45f";
        firstCard.style.boxShadow = "0 0 18px rgba(239, 196, 95, 0.35), 0 4px 16px rgba(0, 0, 0, 0.3)";

        secondCard.style.background = "rgba(239, 196, 95, 0.22)";
        secondCard.style.border = "1.5px solid #efc45f";
        secondCard.style.boxShadow = "0 0 18px rgba(239, 196, 95, 0.35), 0 4px 16px rgba(0, 0, 0, 0.3)";
        firstCard=null;
        secondCard=null;
        blockFlip=false;

        // if they match we should reset the (first, second, flip )
      }
      // if they don't match ?
      // we should change the classes foe each first , second 
      // set "" for the p 
      //reset (first , second , flip)
      //to reset them we need a time (delay)
      else {
      setTimeout(() => {
           firstCard.classList.remove("opened");
           secondCard.classList.remove("opened");
           

           firstCard.classList.add("closed");
           secondCard.classList.add("closed");

           firstCard.querySelector("p").textContent="";
           secondCard.querySelector("p").textContent="";


           firstCard=null;
           secondCard=null;
           blockFlip=false;
      }, 500);
    }

     });




}
retry.addEventListener("click", function (){
   

    countMoves=0;
    moves.textContent=countMoves;
    document.querySelectorAll(".card").forEach(card => {
        firstCard=null;
        secondCard=null;
        blockFlip=false;

        card.classList.remove("opened");
        card.classList.add("closed");

        card.querySelector("p").textContent="";
        card.style.background="rgba(255,255,255,0.15)";
        card.style.border = "1px solid white";
        card.style.boxShadow = "";


    });
    


});
