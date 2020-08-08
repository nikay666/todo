import { createMainSection } from "./CreateApp.template";
import { toHTML } from "./utilit";
import { TodoItem } from "./TodoItem";
import { Footer } from "./Footer";
import { LocalStorage, storage } from "./LocalStorage";


export class Field {
    constructor(app, appID, storage){
        this.app = app;
        this.childrens = [];
        this.appID = appID;
        this.storage = storage;  


    }

    getTemplate(){
        createStartInput(this.app, this.appID);
        this.todo = document.querySelector('.todo');
        this.check = document.querySelector('.todo-checkbox');
    }

    checkMainSection(){
        if(this.wrapNode){
          return;
        }
        toHTML(createMainSection(), this.todo);
        this.wrapNode = document.querySelector('.todo-list');
        this.footer = new Footer(this.childrens, this.todo);
        this.footer.render();
    }

    addEnterEvent(){
        const filed = document.querySelector('.todo-new');
        
        filed.addEventListener('keydown', (e) =>{
            const target = e.target;

            if(e.key === 'Enter'){
                if(target.value !== ''){
                    this.checkMainSection();

                    const item = new TodoItem(target.value, this.wrapNode);
                    item.render();
                    this.childrens.push(item);

                    this.storage.addItem(item.getItemID(), target.value, item.checkBtn.checked);

                    target.value = '';
                    this.checkChildrens();
                    this.toCheckboxDefault();
                    
                    if(!this.footer){
                        this.footer = new Footer(this.childrens, this.todo);
                        this.footer.render();
                    }

                    this.footer.updateDate();
                    this.footer.updateItems(this.childrens);


                }
            }
        });
    }

    checkChildrens(){
        if(this.childrens.length !== 0){
            this.check.removeAttribute("disabled");
        } else{
            this.check.setAttribute('disabled', 'disabled');
        }
    }

    toCheckboxDefault(){
        this.childrens.forEach(child => {
            child.toDefalutCheck();
            // this.storage.change
        }); 
        this.check.checked = false;
    }


    addCheckboxEvent(){
        this.check.addEventListener('click', () => {
            this.childrens.forEach(child => {
                child.allCheck(this.check.checked);
            }); 
        });

    }

    listenerChildrens(){
        this.todo.addEventListener('click', (e) => {
            if(e.target.classList.contains('btn-delete')){

                this.childrens = this.childrens.filter((child,  i)=>{
                    if(child.getItemID() !== e.target.parentNode.id){
                        return true;
                    }else{
                        this.storage.removeItem(child.itemID);
                        child.deleteItem();
                        return  false;
                    }
                   
                });
                
                if(this.childrens.length <=  0){
                    this.footer.destroy();
                    this.storage.clearAll();
                    delete this.footer;
                }else{
                    this.footer.updateDate();
                    this.footer.updateItems(this.childrens);
                }
            
            }
            if(e.target.classList.contains('btn-clear')){
                this.footer.clearAll();
                this.storage.clearAll();
                delete this.footer;
                this.childrens = [];
            }

        });
      
    }



    render(){
        this.getTemplate();
        this.addEnterEvent();
        this.addCheckboxEvent();
        this.listenerChildrens();
        
    }
}


function createStartInput(node,id){
    const value = `
        <section class="todo" data-todo="${id}">
        <header class="todo__header">
            <input type="checkbox" disabled name="title-checkbox" id="title-checkbox" class="todo-checkbox">
            <label for="title-checkbox" class="todo-label"></label>
            <input type="text" class="todo-new" placeholder="What needs to be done?">
        </header>
        </section>
    `;
    toHTML(value, node);
}
