import { toHTML, deleteElementById, getId, getNode } from "./utilit";

export class TodoItem{
    constructor(text, node, state){
        this.text = text;
        this.node = node;
        this.value = '';
        this.id =  getId('checkbox-');
        this.itemID =  getId('item-');
        this.classChecked = 'checked';
        this.state = state;
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

    allCheck(parentValue){
        if(parentValue === false){
            setFalseCheck(this.checkBtn, this.textNode, this.classChecked);

        }else if(parentValue === true){ 
            setTrueCheck(this.checkBtn, this.textNode, this.classChecked);
        }
    }

    check(){
        if(this.checkBtn.dataset.check === 'false'){
            setTrueCheck(this.checkBtn, this.textNode, this.classChecked);
        }else{
            setFalseCheck(this.checkBtn, this.textNode, this.classChecked);
        }
    }

    addCheckEvent(){
        this.checkBtn = document.getElementById(this.id);

        this.checkBtn.addEventListener('click', () => {
            this.check();
        });
        
    }

    addInputEvent(){
        this.textNode.addEventListener('keydown',  (e) => {
            if(e.key === 'Enter' ){
                e.preventDefault();
            }
            console.log(this.textNode.innerHTML);
        });
    }

    returnItemId(){
        return this.itemID;
    }

    render(){
        this.getTemplate();
        this.addInputEvent();
        this.addCheckEvent();
    }
}

function setTrueCheck(checkBtn, textNode, classChecked){
    checkBtn.checked = true; 
    checkBtn.dataset.check = 'true';
    textNode.classList.add( classChecked);
    textNode.setAttribute('contenteditable', 'false');
}
function setFalseCheck(checkBtn, textNode, classChecked){
    checkBtn.checked = false;
    checkBtn.dataset.check = 'false';
    textNode.classList.remove( classChecked);
    textNode.setAttribute('contenteditable', 'true');
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