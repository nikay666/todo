export class Storage{
    constructor(){
        this.keyApp = 'todo-app';
        this.prevState = {};
    }

    addItem(key, value){
        this.prevState = this.storage() || {};
        
        console.log(this.prevState)
        const notes =  this.toObject(key,  value);

        if(Object.keys(this.prevState).length === 0){
            console.log('NO')
            this.storage(notes);
        } else{

            Object.keys(this.prevState).forEach(key =>  {

                console.log('prev',this.prevState[key]);
                console.log('value', notes);
                
                if(!isEqual(this.prevState[key], notes[key])){
                    console.log('NO EQUAL')
                    const obj = this.toObject(notes.id, notes.value )
                    console.log(obj);
                    console.log( this.prevState);
                    const res = this.prevState.push(obj);
                    // res[notes.id] = notes.value;

                    // const arr = [{...this.prevState}, item]
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

    toObject(id, value){
        const res = {
            id:id,
            value: value
        };
        return res;
    }

    setLocalStorage(id, value){
        let res = toObject(id, value);

        res = JSON.stringify(res);

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
// export function storage(key, data = null){
//     if(!data){
//         return  JSON.parse(localStorage.getItem(key));
//     }
//     localStorage.setItem(key, JSON.stringify(data));
// }

export function isEqual(a, b){
    if(typeof a === 'object' && typeof b === 'object'){
        return JSON.stringify(a) === JSON.stringify(b);
    }
    return a ===  b;
}