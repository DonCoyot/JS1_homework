const targetlink = document.querySelector('#targetlink');

targetlink.addEventListener('click',
 (event) => {
   const newtext = prompt('Введите текст');
   event.preventDefault();
   targetlink.textContent = newtext;
});
