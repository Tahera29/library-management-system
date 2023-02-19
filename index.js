const bookNameElement= document.getElementById('book-name');
const issueToElement= document.getElementById("issue-to");
const btnElement= document.getElementById('btn');
const tableBody= document.querySelector("tbody");
const books=[];

function createTableRow(data,tableBody,index){
    //first create a tr
    const tr= document.createElement('tr');

    //create 5 ths and add data inside it
    const id = document.createElement('th');

    //add these ths in tr
    //add this tr in body
}

function renderBooksInsideTable(){
books.map(function(book,index){
    createTableRow(book,tableBody,index+1);//to create table row and add it inside tbody
})
}