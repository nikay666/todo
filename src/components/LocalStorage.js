import { toObject } from "./utilit";

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
                store.splice(i, i);
                this.storage(store);
            }
        });
    }

    updateCheck(input, inputID){
        let store = Array.from(this.storage());

        store.forEach(item =>  {
            if(item.id === inputID){
                console.log(input.checked);
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

    init(){
        if(this.initialState !== {}){
            console.log(this.initialState);
        }

    }


}

export function isEqual(a, b){
    if(typeof a === 'object' && typeof b === 'object'){
        return JSON.stringify(a) === JSON.stringify(b);
    }
    return a ===  b;
}