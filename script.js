const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;

  const imc = (weight / (height * height)).toFixed(2);

  const value = document.getElementById('value');
  let description = '';
  value.classList.add('attention');

  document.getElementById('infos').classList.remove('hidden');

  if (imc < 18.5) {
    description = 'Cuidado! Você está abaixo do peso normal'
   
  } else if (imc >= 18.5 && imc <= 25) {
      description = 'Peso normal';
      value.classList.remove('attention');
      value.classList.add('normal');
  } else if (imc > 25 && imc < 30) {
      description = 'Levemente acima do peso';
  } else if (imc >= 30 && imc <= 35) {
      description = 'Obesidade';
  } else if (imc > 35 && imc <= 40) {
      description = 'Obesidade severa';
  } else {
      description = 'Cuidado! Você está com obesidade mórbida';
}
  
  value.textContent = imc.replace('.', ',');
  document.getElementById('description').textContent = description;
});