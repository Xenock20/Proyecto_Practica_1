const boton = document.querySelector('button')

boton.addEventListener('click', evento =>{
  evento.preventDefault();

  document.getElementById('input-two').value = document.getElementById('input-one').value
})
