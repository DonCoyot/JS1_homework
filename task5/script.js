const duplicateField = document.querySelector('#duplicateField');
const inputtext = document.querySelector('#inputtext');
inputtext.addEventListener('input', (event) => {
    duplicateField.textContent = inputtext.value
});

const buttondel = document.querySelector('#buttondel');
buttondel.addEventListener('click' , (event) => {
    console.log(inputtext.value);
    inputtext.value = "";
    duplicateField.textContent = "";
    event.preventDefault();

})
