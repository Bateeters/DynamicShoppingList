const listEl = document.querySelector('ul');
const userInput = document.querySelector('input');
const addBtn = document.querySelector('button');

addBtn.addEventListener('click', () => {
    const listItem = userInput.value;
    userInput.value = '';

    const groceryItem = document.createElement('li');
    const groceryText = document.createElement('span');
    const removeBtn = document.createElement('button');

    groceryItem.appendChild(groceryText);
    groceryText.textContent = listItem;

    groceryItem.appendChild(removeBtn);
    removeBtn.textContent = 'Delete';

    listEl.appendChild(groceryItem);

    removeBtn.addEventListener('click', () =>{
        groceryItem.remove();
    });

    input.focus();
});
