/*DOM - Document Object Model - Is a tree like representation of all the content on a page that can be modified. The DOM is created when the page is loaded. The document object is the main "entry point" to the page. We can change or create anything on the page using it. With the object model JavaScript can change all the HTML, CSS on the page. As well as adding more elements, styles etc. 
*/

//When your HTML is parsed by a web broswer it is converted to the DOM.

/*DOM Nodes - Everything in an HTML document is a node - nodes are objects that have many properties and methods attached to them. These properties and methods are the primary tools we use to manipulate our webpage with JavaScript.: 
*The entire document is a document node 
*Every HTML element is an element node 
*The text inside HTML elements are text nodes
*Every HTML attribute is an attribute node(deprecated)
*All comments are comment nodes

You can use a combination of CSS style selectors and relationship properties to target the nodes you want. e.g. class, id, element and relationship to other element e.g. parent, sibling child.
*/

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

//getELementsByClassName
let items = document.getElementsByClassName('list-group-item');
console.log(items);
items[0].innerText = 'Go for a run.';//innerText will return the visible text in a node. innerText is more performance heavy as it requires layout information to return the result.
items[1].textContent = 'Coding.';//textContent will return the full text even if it is hidden. 

//items.style.fontWeight = 'bold'; //We can not add a style to all the elements using this syntax as it is a HTML collection so we have to loop through it like an array. 

for(let i = 0; i < items.length; i++){
     items[i].style.fontWeight = 'bold';
};

//getElemenentByTagName //Works the same way as class except replace with tag.

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


//Traversing the DOM - Is finding HTML elements based on their relation to other elements. Traversing the DOM is more efficient than the previous method as it is selecting an element from neighbours rather than searching the whole DOM. 

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

//nextSibling/previousSibling - Includes text(whitespace) 
//console.log(itemList.nextSibling);

//nextElementSibling/previousElementSibiling - Choses the next sibling or the previous sibling - Siblings are elements who share the same parent.
let listGroupItem = document.getElementsByClassName('list-group-item');
console.log(listGroupItem[1].nextElementSibling);

//Creating and inserting elements into the DOM - createElement this only creates the element to add it to the webpage we have to append it or use the insertBefore method. 
let newDiv = document.createElement('div');

//add class
newDiv.className = 'new-div-class';

//add id 
newDiv.id = 'new-div-id';

//add attribute 
newDiv.setAttribute('title','New Div')

//create text node
let newDivText = document.createTextNode('Hello World');

//add text to div
newDiv.appendChild(newDivText);

//Adding div made in JavaScript to the DOM 

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

//container.insertBefore(newDiv, h1);//takes two parameters what we are inserting and what we are inserting before

console.log(newDiv);

//We can remove an element from the DOM using this.
//parentNode.removeChild(div);

/* 
EVENTS - The DOM allows us to execute JavaScript when an event occurs such as a user clicking on a HTML element. Events are triggered by listeners and can fire when a button is pressed, when you click an element, when the page loads etc. 

Listeners - using addEventListener() we can add an event type and a event handler to an element. When the listerner is triggered the event handler will run.
*/

//Event handlers - The event handler is the block of code usually a function that runs when the event fires.

//We can add e to the function parameters, e is is an object that references the event itself. Within the object you have access to many useful propeties and functions such as which mouse button or key was pressed or information about the events target.

let button = document.getElementById('button');
button.addEventListener('click' , buttonClick);

function buttonClick(){
    console.log('Button clicked');
    document.getElementById('button').style.background = 'cyan';
}
//By adding e to the function parameters connected to an event we are able to get data such as the id, classname etc. function functionName (e) {} console.log(e.target.id); 


/*Other event types include - dblclick, mousedown, mouseup, mouseenter, mouseleave, mousemove, keydown, keyup, focus, blur, cut, paste, input, change, submit   */

//Keyboard events 
let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');

form.addEventListener('submit', runEvent);

itemInput.addEventListener('keydown', runEvent);

function runEvent(e) {
    e.preventDefault();//There is no external file to submit form to this prevents it from submiting to an external file by default.
    console.log('EVENT TYPE: '+e.type);
}

//If attaching lots of similar event listeners to mamy elements. We can use a loop to iterate through a nodelist of all the items matching a specific selector. 


/*Bubbling 
When an event happens on an element, it first runs the handlers on it then on its parents then all the way up on other ancestors.
It is called bubbling because events bubble up from the inner element up through parents like a bubble in water.
*/



