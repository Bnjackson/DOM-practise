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
headerTitle.innerText = 'Todo List';

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

//To select individual elements with querySelector, we can use the CSS psuedo selectors last-child, nth-child(n) etc. 
//e.g. let secondItem = document.querySelector(''list-group-item:nth-child(2)');

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.background = '#ccc';

//querySelectorAll - Unlike the regular querySelector, querySelectorAll will grab multiple elements. Anything can be used such as ids, class, tags etc.

let titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Add Items';
titles[1].textContent = 'Items';

//With querySelectorAll we can alternate between elements which used to be difficult in vanilla JavaScript. Using a loop and the odd or even psuedo selectors.
let odd = document.querySelectorAll('li:nth-child(odd)');

for(let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
};


//Traversing the DOM - Is finding HTML elements based on their relation to other elements. Traversing the DOM is more efficient than the previous method as it selecting an element from neighbours rather than searching the whole DOM. 

let itemList = document.querySelector('#items');

// parentNode;

console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4'; //changes the parent node.

//childNodes - is usually not worth using as it lists text(whitespace) in the nodelist along with the childNodes. 
console.log(itemList.childNodes);

//children - Only lists the elements and in a HTML collection instead of in a node list 
console.log(itemList.children);
//console.log(itemList.children[1]);//To select a single element.
//itemList.children[1].style.backgroundColor = 'yellow';

//firstChild/lastChild - like the childNodes this includes text(whitespace)
//console.log(itemList.firstChild);

//firstElementChild/lastELementChild - Is the better method as it only list elements not text(whitespace)
console.log(itemList.firstElementChild);
//itemList.firstELementChild[1].style.color = 'blue';

//nextSibling - Includes text(whitespace) 
//console.log(itemList.nextSibling);

//nextElementSibling - Choses the next sibling - Siblings are elements who share the same parent 
let listGroupItem = document.getElementsByClassName('list-group-item');
console.log(listGroupItem[1].nextElementSibling);








