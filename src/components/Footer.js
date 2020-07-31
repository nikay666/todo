import { createFooter } from "./CreateApp.template";
import { toHTML, getId, deleteElementById } from "./utilit";
import { TodoItem } from "./TodoItem";


export class Footer {
    constructor(items, wrap){
        this.date = new Date();
        this.items =  items;
        this.wrap = wrap;
        this.id = getId('id-');
        this.btnID = getId('btnID-');
        this.footerID =  getId('footer-');
    }
    destroy(){
        deleteElementById(this.footerID);
    }

    clearAll(){
        this.items.forEach(item => {
            item.deleteElement();
        });
        this.destroy();
    }
 
    updateItems(items){
        this.items = items; 
    }


    updateDate(){
        this.date = new Date();
        const dateRes = checkDate(this.date);
        updateDateHtml(dateRes, this.id);

    }


    getTemplate(){
        const value = createFooter(this.date, this.id, this.btnID, this.footerID);
        toHTML(value, this.wrap);
    }


    render(){
        this.getTemplate();
        this.updateDate();
        // this.clearAll();
    }
}

function checkDate(date){  
    //  31 декабря 2020 г.
    const formatter = new Intl.DateTimeFormat("ru", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    //23:20
    const formatterToday = new Intl.DateTimeFormat("ru", {
        hour: "numeric",
        minute: "numeric"
      });

    if(formatter.format(date) == formatter.format(new Date())){
        return formatterToday.format(date);

    }else {
        return formatter.format(date);
    }
}

function  updateDateHtml(date, id){
    const dateNode = document.getElementById(id);
    dateNode.innerHTML = date;
}