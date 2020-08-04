export class State{
    constructor(keyApp){
        this.keyApp = keyApp;
        this.prevState = {};
    }
    addItem(id, value){
        this.prevState = localStorage.getItem(this.keyApp);
        console.log(this.prevState)
        console.log(value);
   
        // Object.keys(value).forEach(key =>  {
        //     if(!isEqual(this.prevState[key], value[key])){
        //         console.log(value[key])
        //     }
        // })
        // this.state.id = value;
    }

    getkeyApp(){
        return this.keyApp;
    }
    setLocalStorage(id, value){
        let res = {
            id: id,
            value: value
        };
        res = JSON.stringify(res);

        console.log(res);

        localStorage.setItem(this.keyApp, res);
    }
    getLocalStorage(){
        localStorage.getItem(this.key)
    }
    clearAll(){
        localStorage.clear();
    }
    removeTodo(){
        localStorage.removeItem(this.key);
    }

}
export function storage(key, data = null){
    if(!data){
        return  JSON.parse(localStorage.getItem(key));
    }
    localStorage.setItem(key, JSON.stringify(data));
}

export function isEqual(a, b){
    if(typeof a === 'object' && typeof b === 'object'){
        return JSON.stringify(a) === JSON.stringify(b);
    }
    return a ===  b;
}