const ul = document.querySelector('ul');
const input = document.querySelector('input');

function addItem() {
    let li = document.createElement('li');
    let btn = document.createElement('button');
    let span = document.createElement('span');

    const myItem = input.value;
    // input.value = '';

    li.appendChild(span);
    span.textContent = myItem;
    li.appendChild(btn);
    btn.textContent = 'Delete';
    ul.appendChild(li);

    btn.addEventListener('click', () => {
        ul.removeChild(li);
    })

    input.focus();
}

