import { toObject } from "./utilit";
import { TodoItem } from "./TodoItem";

export class Storage{
    constructor(){
        this.keyApp = 'todo-app';
        this.prevState = {};
        this.initialState = this.storage() || {};
    }

    addItem(key, value, isCheck){
        this.prevState = this.storage() || {};
        const notes =  toObject(key,  value, isCheck);
        const resArr = Array.from(this.prevState);

        if(resArr.length  === 0){
            resArr.push(notes)
            this.storage(resArr);
        } else {
            if(resArr.every(item => item.id !== notes.id)){
                resArr.push(notes);
                this.storage(resArr);
            }
        }
    }

    removeItem(id){
        let store = Array.from(this.storage());
        store.forEach((item, i) =>  {
            if(item.id === id){
                if(i === 0 ) store.shift();
                store.splice(i, i);
                this.storage(store);
            }
        });
    }

    updateCheck(input, inputID){
        let store = Array.from(this.storage());

        store.forEach(item =>  {
            if(item.id === inputID){
                item.isCheck = input.checked;
            }
            this.storage(store);
        });

    }

    storage(data = null){
        if(!data){
            return  JSON.parse(localStorage.getItem(this.keyApp));
        }
        localStorage.setItem(this.keyApp, JSON.stringify(data));
    }

    getkeyApp(){
        return this.keyApp;
    }

    clearAll(){
        localStorage.removeItem(this.keyApp);
    }

    init(wrap,  stor){
        const prevStore =  Array.from(this.storage()  || {});

        if(prevStore.length === 0){
            return [];
        }

        let arr = []; 
        prevStore.forEach(item => {
            const child = new TodoItem(item.value, wrap, stor, item.id);

            child.render();
            child.allCheck(item.isCheck);
   
            arr.push(child);
        });
        return arr;
    }
}

export function isEqual(a, b){
    if(typeof a === 'object' && typeof b === 'object'){
        return JSON.stringify(a) === JSON.stringify(b);
    }
    return a ===  b;
}