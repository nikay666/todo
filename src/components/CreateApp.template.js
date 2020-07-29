import { Field } from "./Field";

export function createTitle(app, title){
    const nodeTitle = document.createElement('h1');
    nodeTitle.innerHTML = title;
    app.append(nodeTitle);
}

export  function  createFooter(date){
    const footer =  `
    <footer class="todo__footer">
        <button type="button" class="btn-clear">Clear all</button>
        <p class="date-change">
            Changed: 
            <span data-date="${date}">${date}</span>
        </p>
    </footer>
    `;
    return footer;
}

export  function createMainSection(){
    const main = `
        <section class="todo__main">
            <ul class="todo-list">
            
            </ul>
        </section>
    `;
    return  main;
}

export  function createWrapApp(id, date){
    return `
        <section class="todo" data-todo="${id}">
        ${createHeader()}
        ${createMainSection()}
        ${createFooter(date)}
        </section>
    `;
}

export function defaultTemplate(id, app){
   new Field(app, id).render();

}
