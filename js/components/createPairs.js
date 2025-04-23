import { createElement } from "./createElement.js";
import { showAlert } from "./showAllert.js";

export const createPairs = (app) => {
  const pairs = createElement("section", {
    className: "card section-offset",
  });
  const cardDiv = createElement("div",{
    className: "container card__container",
  });
  
  const cardBtnReturn = createElement("button",{
    className: "card__return",
    areaLabel: "Return to category",
  });
  const buttonCard=createElement("button",{
    className: "card__item",    
  });
  const btnSpanFront=createElement("span",{
    className: "card__front",
    textContent: 'one',
  });
  const btnSpanBack=createElement("span",{
    className: "card__back",
    textContent: 'two',
  });
    buttonCard.append(btnSpanFront,btnSpanBack);
    cardDiv.append(cardBtnReturn,buttonCard);
    pairs.append(cardDiv);

    const cardController=(data) => {
      showAlert('Click on the card to flip it!');
      let index =0;
      btnSpanFront.textContent=data[index][0];
      btnSpanBack.textContent=data[index][1];

      const flipcard=() => {
        buttonCard.classList.add('card__item_flipped');
        buttonCard.removeEventListener('click',flipcard);
        setTimeout(() => {
          buttonCard.classList.remove('card__item_flipped');
          setTimeout(() => {
            index++;
            if(index>=data.length){
              index=0;
            }
            btnSpanFront.textContent=data[index][0];
            btnSpanBack.textContent=data[index][1];
            buttonCard.addEventListener('click',flipcard);
          },100);   
        }, 1500);
      };

    buttonCard.addEventListener('click',flipcard);
    
};   
    
    const mount=(data) => {
        app.append(pairs);
        cardController(data.pairs);
    };
    const unmount=() => {
        pairs.remove();
    };
    return{cardBtnReturn,mount,unmount}
  }