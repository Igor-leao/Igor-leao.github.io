var picker = new Pikaday({ field: document.getElementById('datepicker') });
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
function getDataForm(event){
  const formElements = document.getElementById('cvForm').elements;
  const divDados = document.querySelector('#endered-curriculum');
  // console.log(formElements);
    for (let i = 0; i < formElements.length; i++){
      if (formElements[i].tagName !== 'FIELDSET' && formElements[i].tagName !== 'BUTTON'){
        console.log(formElements[i].value);
        let dados = document.createElement('p');
        // checa se o elemento da vez é um input, do tipo radio e está selecionado.
        if (formElements[i].tagName == 'INPUT' && formElements[i].type == 'radio' && formElements[i].checked) {
          // Caso seja fazemos esse mapeamento usando esse objeto para saber o que vai ser apresentado de acordo com o value.
          const values = {"apt": "Apartamento", "casa": "Casa"}
          // Exibiremos de acordo com o valor do radio que está checado
          dados.innerHTML += values[formElements[i].value];
        } else {
          // Para evitar que o valor do elemento radio que não está selecionado seja exibido fazemos esse if para não exibir o valor dos inputs do tip radio.
          if (formElements[i].tagName == 'INPUT' && formElements[i].type !== 'radio') {
            dados.innerHTML += formElements[i].value;
          }
        }
        if (formElements[i].tagName == 'SELECT' || formElements[i].tagName == 'TEXTAREA') {
          dados.innerHTML += formElements[i].value;
        }
        divDados.appendChild(dados);
      }
    }
    }
new window.JustValidate('.lecture-form', {
  rules: {
    email: {
      required: false,
      email: true
    },   
  },
  messages: {
    name: {
      minLength: 'My custom message about only minLength rule'
    },
    email: 'My custom message about error (one error message for all rules)'
  },

  submitHandler: function (form, values) {
   console.log(form, values);
  },
});