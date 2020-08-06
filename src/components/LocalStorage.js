import { toObject } from "./utilit";

export class Storage{
    constructor(){
        this.keyApp = 'todo-app';
        this.prevState = {};
    }

    addItem(key, value){
        this.prevState = this.storage() || {};
        const notes =  toObject(key,  value);

        if(Object.keys(this.prevState).length === 0){
            this.storage(notes);
        } else{

            Object.keys(this.prevState).forEach(key =>  {

                if(!isEqual(this.prevState[key], notes[key])){
                    const res = this.prevState;
                    const id  =  Object.keys(notes);

                    res[id] = notes[id];
                    this.storage(res);
                }
            });

        }
    
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

    removeTodo(){
        localStorage.removeItem(this.key);
    }

}

export function isEqual(a, b){
    if(typeof a === 'object' && typeof b === 'object'){
        return JSON.stringify(a) === JSON.stringify(b);
    }
    return a ===  b;
}