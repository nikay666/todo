import { createMainSection } from "./CreateApp.template";
import { toHTML } from "./utilit";
import { TodoItem } from "./TodoItem";


export class Field {
    constructor(app, appID){
        this.app = app;
        
        this.childrens = [];
        this.appID = appID;
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
                    target.value = '';
                    this.checkChildrens();
                    this.toCheckboxDefault();
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
        }); 
        this.check.checked = false;
    }


    addCheckboxEvent(){
        this.check.addEventListener('click', () => {
            this.childrens.forEach(child => {
                child.check();
            }); 
        });

    }


    render(){
        this.getTemplate();
        this.addEnterEvent();
        this.addCheckboxEvent();
        
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
