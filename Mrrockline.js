const button_fire = document.getElementById("button_fire");
const textabove_button = document.getElementById("textabove_button")

button_fire.addEventListener("click", function () {
button_fire.classList.toggle("clicked");
textabove_button.textContent = "belong to Mr Rockline"
textabovebutton.style.color = '#FFFFFF';
textabove_button.style.backgroundColor = 'blue';
});

textabove_button.addEventListener("click" , function(){
textabove_button.classList.toggle("clicked");
textabove_button.textContent = "Be carefull it's Me "; 
textabove_button.style.color = '#FFFFFF';
textabove_button.style.backgroundColor = 'red' 
})
