import { createElement } from '../components/createElement.js';

    export const createHeader =(parent) => {
        const conteiner = createElement('div',{
            className:'container header__container',
        });
    parent.append(conteiner);
    const headerLogoLink=createElement('a',{    
        className:'header__logo-link',
        href:'#',
    });

    const logo=createElement('img',{
        className:'header__logo',
        src:'../../img/HWS_Logo_FullStylemo.svg',
        alt:'logo',        
    });
    

    headerLogoLink.append(logo);
    
    const headerTitle=createElement('h2',{
        className:'header__subtitle',
        textContent:'Category'
    });
    const headerBtn=createElement('button',{
        className:'header__btn',
        textContent:'Add new category',
    });
    conteiner.append(headerLogoLink,headerTitle,headerBtn);
    const updateHeaderTitle=(title)=>{
        headerTitle.textContent=title;
    };
    return {headerLogoLink,headerBtn,updateHeaderTitle};
};