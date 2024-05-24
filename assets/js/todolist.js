let btn = document.querySelector('#ekleBtn');
let liste = document.querySelector('#liste');
let todoTxt = document.querySelector('#todoTxt');

function listeyeEkle() {
  if (todoTxt.value === '') {
    alert('Herhangi bir iş girmediniz!');
    return;
  }
  
  liste.innerHTML += '<li>' + todoTxt.value + '</li>';
}

btn.addEventListener('click', listeyeEkle);