/* Must have for this project
-Cache at least one element using getElementById.
-Cache at least one element using querySelector or querySelectorAll.
-Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
-Iterate over a collection of elements to accomplish some task
-Create at least onereateE element using clement.
-Use appendChild and/or prepend to add new elements to the DOM.
-Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content.
-Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
-Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
-Modify at least one attribute of an element in response to user interaction.
-Register at least two different event listeners and create the associated event handler functions.
-Use at least two Browser Object Model (BOM) properties or methods.
-Include at least one form and/or input with HTML attribute validation
-Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above,
but should include event-based validation in addition to the HTML attribute validation.)
-Include a README file that contains a description of your application.*/

const text = document.getElementById('chrome')

//i want a hover event and when i hover change text green

function changeColor(event) {
    event.preventDefault();
    text.style.color = 'red'
}

function colorBack(event) {
    event.preventDefault();
    text.style.color = 'black'
}

text.addEventListener('mouseover', changeColor)
text.addEventListener('mouseleave', colorBack)
text.addEventListener('click', function() {
    text.style.fontSize = '60px'
})

const forms = document.querySelector('#user-forms')
forms.addEventListener('submit', function(event){
    event.preventDefault()
    const paragraph = document.createElement('p')
    const container = document.getElementById('container')
    paragraph.innerHTML = `thank you ${event.target[0].value}  ${event.target[1].value} From ${event.target[2].value} ${event.target[3].value}`
    console.log(paragraph)
    container.append(paragraph)
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    console.log(event.target[2].value)
    console.log(event.target[3].value)
})



