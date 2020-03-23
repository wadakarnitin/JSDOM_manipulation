let titles=document.getElementsByClassName("title");
console.log(Array.isArray(titles));  //gives false becoz is a collection not array

console.log(Array.isArray(Array.from(titles))); //converts collection to array

Array.from(titles).forEach(item=>{
    console.log(item);
})

//getElementByClassName gives output in html collection , further to traverse it we convert into array first n then foreach
//querySelectorAll gives nodelist which is array like on which we can directly use forEach

let wmf=document.querySelector('#book-list ul li:nth-child(2) .name');

console.log(wmf);

let allelements=document.querySelectorAll("#book-list li .name");

allelements.forEach(item=>{
    console.log(item);
})

let banner = document.querySelector('#page-banner');
console.log(banner.nodeType);//1
console.log(banner.nodeName);//DIV
console.log(banner.hasChildNodes())//true

let clonedNode=banner.cloneNode(true);//writing true here clones the whole node childs and all 
console.log(clonedNode);

//Node : every element on dom is a node 

