import { toHTML } from "./utilit";

export class TodoItem{
    constructor(text, node){
        this.text = text;
        this.node = node;
        this.value = '';
        this.id =  'checkbox-' + new Date().getTime();
    }

    getTemplate(){
        this.value  = getTemplateItem(this.text, this.id);
        toHTML(this.value, this.node);
    }

    check(){
        this.checkBtn = document.getElementById(this.id);
        // console.log(this.checkBtn.dataset.check )

        if(this.checkBtn.dataset.check === 'false'){
            this.checkBtn.checked = true; 
            this.checkBtn.dataset.check = 'true';

        }else{
            this.checkBtn.checked = false;
            this.checkBtn.dataset.check = 'false';
        }
    }

    toDefalutCheck(){
        this.checkBtn = document.getElementById(this.id);
        this.checkBtn.checked = false;
        this.checkBtn.dataset.check = 'false';
    }

    render(){
        this.getTemplate();
    }
}

function getTemplateItem(text, id){
    return  `
    <li class="todo-item">
        <input type="checkbox" data-check="false" name="${id}" id="${id}" class="todo-checkbox">
        <label for="${id}" class="todo-label"></label>
        <p class="todo-text" contenteditable="true">${text}</p>
        <button class="btn-delete"></button>
    </li>
    `;
}