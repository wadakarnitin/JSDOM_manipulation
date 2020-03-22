let titles=document.getElementsByClassName("title");
console.log(Array.isArray(titles));  //gives false becoz is a collection not array

console.log(Array.isArray(Array.from(titles))); //converts collection to array

Array.from(titles).forEach(item=>{
    console.log(item);
})