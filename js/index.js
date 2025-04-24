
import { createPairs } from './components/createPairs.js';
import { createCategory } from './components/createCategory.js';
import { createEditeCategory } from './components/createEditCategory.js';
import { createHeader } from '/js/components/createHeader.js';
import { showAlert } from './components/showAllert.js';
const dataCards={
    id:"tegi",
    pairs:[['таблица','table'],['контейнер','div'],['кнопка','button'],['ненумерованный список','ul'],
    ['ссылка','a'],['текст','p'],['заголовок','h1-h6'],['нумерованный список','ol'],['элемент списка','li'],
    ['изображение','img'],['таблица','table'],['ячейка таблицы','td'],['строка таблицы','tr'],
    ['заголовок таблицы','th'],['наклонный шрифт','i'],['жирный шрифт','b'],['перенос на другую строку','br'],['формы','form'],['метка у инпута','label'],['текстовое поле','textarea'],
    ['поле выбора цвета','input type="color"'],['поле выбора даты','input type="date"'],['поле выбора времени','input type="time"'],
    ['поле выбора файла','input type="file"'],['выпадающий список','select'],['опция выпадающего списка','option'],
    ['переключатель инпутов','input type="checkbox"'],
    ['радиокнопка','input type="radio"'],['контейнер в форме','fieldset'],['заголовок в форме','legend'],['поле ввода','input']]
};
const dataCardsSecond={
    id:"svoistva",
    pairs:[['цвет текста','color'],['цвет фона','background-color'],['цвет рамки','border-color'],
    ['размер текста','font-size'],['шрифт','font-family'],
    ['блюр','filter:blur'],
    ['жирность шрифта','font-weight'],['вывод на экран в строку','display:inline'],['вывод на экран в строку и размер','display:inline-block'],['изменение положения','transform'],
    ['прозрачность','opacity'],['высота строки','line-height'],['ширина','width'],['высота','height'],
    ['внутренний отступ','padding'],['выравнивание по горизонтали','text-align'],['выравнивание по вертикали','vertical-align'],['тень текста','text-shadow'],['тень блока','box-shadow'],
    ['граница','border'],['скругление углов','border-radius'],['фон картинка','backgraund-image'],
    ['изменить позицию','position'],['относительно своего положения','position:relative'],['позиционированние относительно родителя','position:absolute'],
    ['фиксированная позиция','position:fixed'],['плавающая позиция','position:float'],['отображение','display'],['внешний отступ','margin']]
};
const initApp = () => {

const headerParent =document.querySelector('.header');
const app =document.querySelector('#app');

const headerObj=createHeader(headerParent);

const categoriesObj= createCategory(app);
const editCategoryObj= createEditeCategory(app);
const pairsObj= createPairs(app);

const allSectionAnmount = () => {  
    editCategoryObj.unmount();
    categoriesObj.unMount();
    pairsObj.unmount();
};

const postHandler= ()=> {
    const saveArr =editCategoryObj.parceData();    
    dataCards.pairs = saveArr;
    
    showAlert('Сохранено', 'success');
    allSectionAnmount();
    headerObj.updateHeaderTitle('Category');
    categoriesObj.mount();   
    pairsObj.mount(dataCards.pairs);
    
}
const postHandlerSecond= ()=> {
    const saveArr =editCategoryObj.parceData();    
    dataCardsSecond.pairs = saveArr;
    showAlert('Сохранено', 'success');
    allSectionAnmount();
    headerObj.updateHeaderTitle('Category');
    categoriesObj.mount();
    pairsObj.mount(dataCardsSecond.pairs);
}
categoriesObj.mount();

const returnIndex = (e) => {
    e.preventDefault();
    allSectionAnmount();   
    headerObj.updateHeaderTitle('Category'); 
    categoriesObj.mount();   
}
headerObj.headerLogoLink.addEventListener('click',returnIndex);
headerObj.headerBtn.addEventListener('click',() => { 
    allSectionAnmount();  
    headerObj.updateHeaderTitle('New category');    
    editCategoryObj.mount({pairs:[['','']]});     
});


categoriesObj.categoryList.addEventListener('click',({target}) => {
    const categoryItem = target.closest('.category__item');
    
        if (target.closest('.category__edit')){
            
            allSectionAnmount();
            headerObj.updateHeaderTitle('Edit');
            if(categoryItem.dataset.id==='tegi'){
                editCategoryObj.mount(dataCards);
                editCategoryObj.btnSave.addEventListener('click',postHandler);
                
                return;
            }
            else{
                editCategoryObj.mount(dataCardsSecond);
                editCategoryObj.btnSave.addEventListener('click',postHandlerSecond);
                
                return;
            }            
        }
        if (target.closest('.category__del')){
            console.log('delete');
            return
        }
        if (categoryItem){
            let dataArr={}
            if(categoryItem.dataset.id==='tegi'){
                    dataArr=dataCards
            }
            else{
                    dataArr=dataCardsSecond
            }                
            
            allSectionAnmount();
            headerObj.updateHeaderTitle('Pairs');
            pairsObj.mount(dataArr);
        }
});
pairsObj.cardBtnReturn.addEventListener('click',returnIndex);
};
initApp()
