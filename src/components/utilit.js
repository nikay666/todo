export function toHTML(content, node){
    node.insertAdjacentHTML("beforeend",  content);
}

export function deleteElementById(id){
    const el = document.getElementById(id);
    el.remove();
}

export function getId(srt = ''){
    return srt + new Date().getTime();
}

export function getNode(wrapID, selector){
    const wrap = document.getElementById(wrapID);
    const node = wrap.querySelector(selector);
    return node;
}
