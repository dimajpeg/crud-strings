// addString('lorem');

// const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button');
const ulObj = document.querySelector('ul');
const ulStr = ulObj.outerHTML;

console.dir(ulStr);
console.dir(ulObj);

// form.onsubmit = handleSubmit;
input.onkeydown = handleEnter;
button.onclick = handleClick;

function handleEnter(e) {
  console.log(e);
  if (e.key === 'Enter') handleClick();
}

function handleClick() {
  const string = input.value;

  input.value = '';
  if (string.trim()) addString(string);
}

function handleSubmit() {
  const string = form.string.value;

  form.string.value = '';
  if (string.trim()) addString(string);
}

function addString(string) {
  const li = document.createElement('li');

  li.textContent = string;
  ulObj.appendChild(li);
}