import {createTitle, defaultTemplate} from './CreateApp.template';

export default class CreateApp {
    constructor(selector, title){
        this.selector =  selector;
        this.title = title;

        this.app = document.querySelector(this.selector);

        this.appID = new Date().getTime();
        this.date = '25 Jule 2020';

    }

    getTemplate(){
        const wrap = defaultTemplate(this.appID);
        this.app.insertAdjacentHTML("beforeend",  wrap);

    }

    createTitle(){
        createTitle(this.app ,this.title);
    } 


    init(){
     console.log(this.appID);
     this.createTitle();
     this.getTemplate();
    }
}