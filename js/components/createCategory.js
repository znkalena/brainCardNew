import { createElement } from "./createElement.js"

export const createCategory=(app) => {
const category = createElement('section',{
    className:'category section-offset',
});

const conteiner = createElement('div',{
    className:'container',
});
category.append(conteiner);

const categoryList = createElement('ul',{
    className:'category__list',
});
conteiner.append(categoryList);

const groop=["ТЕГИ","СВОЙСТВА"];
const id=['tegi','svoistva'];

const createCategoryCard=(groop,id) => {
    const item= createElement('li',{
        className:'category__item',
        //textContent:groop,
    });
    item.dataset.id=id;

    const btn= createElement('button',{
        className:'category__card',
    });
    const title= createElement('span',{
        className:'category__title',
        textContent:groop,
    });
    const pairs= createElement('span',{
        className:'category__pairs',
        //textContent:'26 пар',
    });
    const editBtn= createElement('button',{
        className:'category__btn category__edit',
        ariaLabel:'редактировать',
    });
    const delBtn= createElement('button',{
        className:'category__btn category__del',
        ariaLabel:'удалить',
    });
    item.append(btn,editBtn,delBtn);
    btn.append(title,pairs);
    return item;
}

const mount =() => {
    categoryList.textContent='';
    
    for (let i = 0; i < groop.length; i++) {
        const item = createCategoryCard(groop[i],id[i]);
        categoryList.append(item);
    }
    conteiner.append(categoryList);    
    app.append(category); 
};

const unMount =() => {
    category.remove(); 
}
return {mount,unMount,categoryList};

}