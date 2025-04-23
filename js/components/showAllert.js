import { createElement } from "./createElement.js"

export const showAlert= (message) => {
const alertBlock = createElement('div',{
    className:'alert',
});
const alertText =createElement('p',{
    className:'alert__text',
    textContent:message,
});
alertBlock.append(alertText);
document.body.append(alertBlock);

setTimeout(() => {
    alertBlock.classList.add('alert_show');
}, );
setTimeout(() => {
    alertBlock.classList.remove('alert_show');
    setTimeout(() => {
        alertBlock.remove();
    },200)

}, 2000);
};