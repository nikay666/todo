import { toHTML, deleteElementById, getId, getNode } from "./utilit";

export class TodoItem{
    constructor(text, node){
        this.text = text;
        this.node = node;
        this.value = '';
        this.id =  getId('checkbox-');
        this.itemID =  getId('item-');
        this.classChecked = 'checked';
    }

    getTemplate(){
        this.value  = getTemplateItem(this.text, this.id, this.itemID);
        toHTML(this.value, this.node);
        this.textNode = getNode(this.itemID, '.todo-text');
        this.btnNode = getNode(this.itemID, '.btn-delete');
    }

    toDefalutCheck(){
        this.checkBtn = document.getElementById(this.id);
        this.checkBtn.checked = false;
        this.checkBtn.dataset.check = 'false';
    }

    deleteElement(){
        deleteElementById(this.itemID);
    }
    
    deleteItem(){
        deleteElementById(this.itemID);
    }
    
    getItemID(){
        return this.itemID;
    }

    check(){
        if(this.checkBtn.dataset.check === 'false'){
            this.checkBtn.checked = true; 
            this.checkBtn.dataset.check = 'true';
            this.textNode.classList.add( this.classChecked);
            this.textNode.setAttribute('contenteditable', 'false');


        }else{
            this.checkBtn.checked = false;
            this.checkBtn.dataset.check = 'false';
            this.textNode.classList.remove( this.classChecked);
            this.textNode.setAttribute('contenteditable', 'true');
        }
    }

    addCheckEvent(){
        this.checkBtn = document.getElementById(this.id);

        this.checkBtn.addEventListener('click', () => {
            this.check();
            //TODO Сделать чтобы работало не  криво
        })
        
    }

    addInputEvent(){
        this.textNode.addEventListener('keydown',  (e) => {
            if(e.key === 'Enter' ){
                e.preventDefault();
            }
            console.log(this.textNode.innerHTML);
        });
    }



    render(){
        this.getTemplate();
        this.addInputEvent();
        this.addCheckEvent();
    }
}


function getTemplateItem(text, id, itemID){
    return  `
    <li class="todo-item" id="${itemID}">
        <input type="checkbox" data-check="false" name="${id}" id="${id}" class="todo-checkbox">
        <label for="${id}" class="todo-label"></label>
        <p class="todo-text" contenteditable="true">${text}</p>
        <button class="btn-delete" aria-label='delete item'></button>
    </li>
    `;
}