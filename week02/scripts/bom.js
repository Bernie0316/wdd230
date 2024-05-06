// hold references to the input, button, and .list elements.
const input = document.querySelector('#favchap'); 
const button = document.querySelector('button');
const list = document.querySelector('#list');

// button.addEventListener('click', () => { ... };
button.addEventListener('click', function() { 
    if (input.value != '') {
        const li = document.createElement('li');
        li.textContent = input.value;

        // populate the li elements textContent or innerHTML with the input value
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        
        // append the li element with the delete button
        li.append(deleteButton);
        // append the li element to the unordered list in HTML
        list.prepend(li);
        
        // add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
            input.value = '';
        });
    }
});
