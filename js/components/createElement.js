export const createElement = (tag,atrr)=> {
const element = document.createElement(tag);
return Object.assign(element,atrr);
}