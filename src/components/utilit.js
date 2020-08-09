export function toHTML(content, node){
    node.insertAdjacentHTML("beforeend",  content);
}

export function deleteElementById(id){
    const el = document.getElementById(id);
    el.remove();
}

export function getId(srt = ''){
    const id = `f${(~~(Math.random()*1e8)).toString(16)}`;
    return srt + id;
}

export function getNode(wrapID, selector){
    const wrap = document.getElementById(wrapID);
    const node = wrap.querySelector(selector);
    return node;
}

export function  toObject(id, value, isCheck){
    const res = {
        id: id,
        value: value,
        isCheck: isCheck

    };
    return res;
}