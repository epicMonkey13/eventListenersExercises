// hamburger
const hamburgerIcon = document.querySelector('#nav-toggle-button');
const navItems = document.querySelector('#nav-items');
hamburgerIcon.addEventListener('click', () => {
  navItems.classList.toggle('active');
});
// end of hamburger

// ex 1
const toggleButton = document. 
querySelector('#button');
const collapsibleContentToggle = document.querySelector(
  '#div-to-hide'
);

toggleButton.addEventListener('click', () => {
  collapsibleContentToggle.classList.toggle('hide');
});
//end of ex 1

//ex 2
function checkPswLength() {
  console.log("checkPswLength was called");
  let passwordInput = document.querySelector("#psw");
  if (passwordInput.value.length < 8) {
    alert("the password is too short");
  }
}
const form = document.querySelector("form");
form.addEventListener("submit", () => {
  console.log('submitted')
  checkPswLength();
});
//end of ex2

//ex 3
      const list = document.querySelector('#shopping-list');
      const input = document.querySelector('#item');
      const button = document.querySelector('#adding-button');

      button.addEventListener('click', () => {
        const myItem = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'Delete';
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
          list.removeChild(listItem);
        });

        input.focus();
      });
// end of ex 3

//ex 4
// see currencyConverter folder, didn't work here for some unknown reason
//end of ex 4 

// ex 5 accordion 
const accordianHeaders = document.querySelectorAll('.accordion-item-header');
console.log(accordianHeaders);
accordianHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    header.nextElementSibling.classList.toggle('hide-accordion');
  });
});
// end of ex 5 accordion 

//ex 6 event listeners 5
// function logSubmit
// log text content name.value, Prevent default
function logSubmit(event) {
  log.textContent = `Form Submitted! Welcome ${nameField.value}`;
  event.preventDefault();
}

//Define form, log and name
const helloForm = document.querySelector('#form');
const log = document.querySelector('#log');
const nameField = document.querySelector('#name');

// add event listener to form with a submit event trigering the logSubmit function
helloForm.addEventListener('submit', logSubmit);

// Other events

// Keyup
nameField.addEventListener('keyup', (event) => {
  console.log(event.key);
});

// Focus
nameField.addEventListener('focus', () => {
  console.log('Focussed');
});
// Blur
nameField.addEventListener('blur', () => {
  console.log('Blur');
});


// ex 8 session storage practice
arrowExp = (e) => {
  //   console.log(`Event: ${e.type}`);
  inputValue = exampleInput.value;
  console.log(inputValue);
  //   console.log(inputValue);

  funcLocal();
  // This is how you get the data out of LocalStorage
  console.log(localStorage.getItem('LocalText'));

  funcSession();
  // This is how you get the data out of SessionStorage
  console.log(sessionStorage.getItem('sessionText'));
  // clear/resetting the input value
  e.preventDefault();
};

// Set Selectors to variables
const exampleInput = document.querySelector('#exampleInput');
const exampleForm = document.querySelector('#exampleForm');

// Variable to catch the data
let inputValue;
// Event listening to the form submission
exampleForm.addEventListener('submit', arrowExp);

// Local Storage
funcLocal = () => localStorage.setItem('LocalText', inputValue);
// Session Storage
funcSession = () => sessionStorage.setItem('sessionText', inputValue);

document.querySelector('p').innerHTML = localStorage.getItem('LocalText');
// end of ex 8 session storage practice

