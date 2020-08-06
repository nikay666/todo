import {createTitle, defaultTemplate} from './CreateApp.template';
import { getId } from './utilit';
import {  Storage } from './LocalStorage';
export default class CreateApp {
    constructor(selector, title){
        this.selector =  selector;
        this.title = title;

        this.app = document.querySelector(this.selector);

        this.appID = getId();
        this.date = new Date();

    }

    getDefaultTemplate(){
        defaultTemplate(this.appID, this.app, this.storage);
    }

    createTitle(){
        createTitle(this.app ,this.title);
    } 

    init(){
     console.log(this.appID);
     this.storage = new Storage();
     this.createTitle();
     this.getDefaultTemplate();
    }
}