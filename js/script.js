//console.dir(document); - Shows all properties and methods of the Document object. We can access the document propeties 

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// document.title = 123; //We can change the page title from scripts. 

//Methods to select elements

//getElementBy 

//console.log(document.getElementById('header-title'));

let headerTitle = document.getElementById('header-title');
headerTitle.style.color = 'black';
headerTitle.innerText = 'Todo Lister';

//getELementByClassName
let items = document.getElementsByClassName('list-group-item');
console.log(items);
items[0].innerText = 'Go for a run.';//innerText will return the visible text in a node. innerText is more performance heavy as it requires layout information to return the result.
items[1].textContent = 'Coding.';//textContent will return the full text even if it is hidden. 

//items.style.fontWeight = 'bold'; //We can not add a style to all the elements using this syntax as it is a HTML collection so we have loop through it like an array. 

for(let i = 0; i < items.length; i++){
     items[i].style.fontWeight = 'bold';
};

//getElemenentsByTagName //Works the same way as class except replace with tag.

let li = document.getElementsByTagName('li');
console.log(li);

//Query selector 
let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

let submit = document.querySelector('input[type="submit"]');
submit.value = 'Submit';

//To select individual elements with querySelector, we can use the CSS selectors last-child, nth-child(n) etc. 
//e.g. let secondItem = document.querySelector(''list-group-item:nth-child(2)');

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.background = '#ccc';
