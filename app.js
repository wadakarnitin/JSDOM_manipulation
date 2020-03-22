let wmf=document.querySelector('#book-list ul li:nth-child(2) .name');

console.log(wmf);

let allelements=document.querySelectorAll("#book-list li .name");

Array.from(allelements).forEach(item=>{
    console.log(item);
})

