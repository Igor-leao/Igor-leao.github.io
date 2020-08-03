  const state = document.querySelector('.estado');
  const states = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  function createListStates() {
    states.forEach(index => {
    const option = document.createElement('option');
    option.innerHTML = index;
    state.appendChild(option);
  });
}

createListStates();

let date = "20/10/2010";
console.log(date);
let ops = date.split("/");
console.log(ops);


function cvForm(event){
  const forElements = document.getElementById('cvForm').elements;
 for (let i=0; forElements.length; i++) {
   if(forElements[i].tagName !== 'FIELDSET' && forElements[i].tagName !== 'BUTTON') {
     document.getElementById("rendered-curriculum").innerHTML = "<div>"+forElements[i].value + "</div>";
      console.log(forElements[i].value);
    }

 }
  
}
let btn = document.querySelector('#button');
btn.addEventListener('click', function(event){
    event.preventDefault();
    cvForm();
});