import {createTitle, defaultTemplate} from './CreateApp.template';
import { getId } from './utilit';
export default class CreateApp {
    constructor(selector, title){
        this.selector =  selector;
        this.title = title;

        this.app = document.querySelector(this.selector);

        this.appID = getId();
        this.date = '25 Jule 2020';
        this.state = {}

    }

    getDefaultTemplate(){
        defaultTemplate(this.appID, this.app, this.state);
    }

    createTitle(){
        createTitle(this.app ,this.title);
    } 

    init(){
     console.log(this.appID);
     this.createTitle();
     this.getDefaultTemplate();
    }
}