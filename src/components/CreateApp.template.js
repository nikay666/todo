export function createTitle(app, title){
    const nodeTitle = document.createElement('h1');
    nodeTitle.innerHTML = title;
    app.append(nodeTitle);
}

export  function createHeader(){
    const header = `
    <header class="todo__header">
        <input type="checkbox" name="title-checkbox" id="title-checkbox" class="todo-checkbox">
        <label for="title-checkbox" class="todo-label"></label>
        <input type="text" class="todo-new" placeholder="What needs to be done?">
    </header>
    `;
    return header;
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

export function defaultTemplate(id){
    return `
        <section class="todo" data-todo="${id}">
        ${createHeader()}
        </section>
    `;
}
