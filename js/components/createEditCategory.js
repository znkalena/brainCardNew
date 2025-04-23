import { createElement } from "./createElement.js";
const TITLE = 'ВВедите название категории';


export const createEditeCategory =(app) => {
    const editCategory = createElement('section',{
        className:'category section-offset',
    });
    const conteiner = createElement('div',{
        className:'container edit-category',
    });
    const title = createElement('h2',{
        className:'edit__title',
        contentEditable:true,
        title:'можно редактировать',
        textContent:'Создание категории',
    });
    const table = createElement('table',{
        className:'edit__table table',
    });
    const thead = createElement('thead');
    const trThead = createElement('tr');

    const thCellMain = createElement('th',{
        className:'table__cell',
        textContent:'main',
    });
    const thCellSecond = createElement('th',{
        className:'table__cell',
        textContent:'second',
    });
    const thCellEpty = createElement('th',{
        className:'table__cell',       
    }); 
    const tbody = createElement('tbody');  
    const btnWrapper = createElement('div',{
        className:'edit__btn-wrapper',
    });
    const btnAddRow = createElement('button',{
        className:'edit__btn edit__add-row',
        textContent:'Добавитьпару',
    });
    const btnSave = createElement('button',{
        className:'edit__btn edit__save',
        textContent:'Сохранить категорию',
    }); 
    const btnCancel = createElement('button',{
        className:'edit__btn edit__cancel',
        textContent:'Отменить',
    }); 
    const createTrCell= (dataArr) => {
        const tr= createElement('tr');
        const tdOne = createElement('td',{
            className:'table__cell table__cell_one',
            textContent:dataArr[0], 
            contentEditable:true,          
        });
        const tdSecond = createElement('td',{
            className:'table__cell table__cell_two',
            textContent:dataArr[1], 
            contentEditable:true,           
        });
        const tdThree = createElement('td',{
            className:'table__cell',       
        }); 
        const delRow = createElement('button',{
            className:'table__del',
            textContent:'X',
        });
        delRow.addEventListener('click',()=>{
            if(confirm('Вы уверены, что хотите удалить строку?')){
                tr.remove();
            }            
        });
        tdThree.append(delRow);
        tr.append(tdOne,tdSecond,tdThree);
        return tr;
    }
    editCategory.append(conteiner);
    conteiner.append(title,table,btnWrapper);    
    table.append(thead,tbody);
    thead.append(trThead); 
    trThead.append(thCellMain,thCellSecond,thCellEpty);    
    btnWrapper.append(btnAddRow,btnSave,btnCancel); 
    
    const clearTitle = () => {
        if(title.textContent === TITLE){
            title.textContent = '';
        }
    };
    const checkTitle = () => {
        if(title.textContent === ''){
            title.textContent = TITLE;
        }
    };
    title.addEventListener('focus',clearTitle);
    title.addEventListener('blur',checkTitle);
    btnAddRow.addEventListener('click',()=>{
        const emptyRow = createTrCell(['','']);
        tbody.append(emptyRow);
    });
const parceData= () => {
        const cellMain=document.querySelectorAll('.table__cell_one');
        const cellSecond=document.querySelectorAll('.table__cell_two');
        const pairs =[];
        const data={
            pairs:[],
        };
        for (let i = 0; i < cellMain.length; i++) {
            const textMain = cellMain[i].textContent.trim();
            const textSecond = cellSecond[i].textContent.trim();
            if (textMain && textSecond){
                data.pairs[i]= [textMain,textSecond];
        }
        
    };    
        return data;
}
    const mount =(data) =>{
        tbody.textContent = '';
        title.textContent = TITLE;
        if(title.textContent === TITLE){
            title.classList.add('edit__title_change');
        }else{
            title.classList.remove('edit__title_change');
        }
        const rows =data.pairs.map(createTrCell)
        tbody.append(...rows);
        app.append(editCategory);        
    };

    const unmount=() => {
        editCategory.remove();       
    };     
 return {mount,unmount,parceData,btnSave,btnCancel};  
}