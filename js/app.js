const input = document.getElementById('textInput');
const submit = document.querySelector('form');
const ul = document.querySelector('ul');


//adding list item with buttons
submit.addEventListener('submit', (e) => {
  e.preventDefault();
  if(input.value === '') {

  } else {
    const text = input.value;
    input.value = '';
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    li.appendChild(span);

    const i = document.createElement('i');
    i.className ='fas fa-pencil-alt';
    // i.textContent = 'E';
    const editBtn = document.createElement('button');
    editBtn.appendChild(i);
    li.appendChild(editBtn);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'X';
    li.appendChild(removeBtn);

    ul.appendChild(li);
  }
});

//removing list item
ul.addEventListener('click', e => {
  const btn = e.target;
  if(btn.tagName === 'BUTTON') {
    if(btn.textContent === 'X') {
      btn.parentNode.parentNode.removeChild(btn.parentNode);
    }
  }
});

// editing list item
ul.addEventListener('click', e => {
  const btn = e.target;
  if(btn.tagName === 'I') {
    const li = btn.parentNode.parentNode;
    const span = li.firstChild;
    if(btn.className === 'fas fa-pencil-alt') {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      span.textContent = '';
      span.appendChild(input);

      btn.className = 'fas fa-check';
    } else if(btn.className === 'fas fa-check') {
      const input = li.querySelector('input');
      span.textContent = input.value;
      li.insertBefore(span, li.firstChild);
      btn.className = 'fas fa-pencil-alt';
    }
  }
});
