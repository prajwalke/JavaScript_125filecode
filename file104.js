const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
//console.dir(htmlElementNode.childNodes);
const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
console.log(bodyElementNode);
console.log(headElementNode.parentNode);

/*----------------sibling relationship---------------------*/
console.log(headElementNode.nextSibling.textContent);
