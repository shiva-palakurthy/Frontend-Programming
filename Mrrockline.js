const button = document.getElementById("Mybutton");
const Mr_p = document.getElementById("Mr_p")

button.addEventListener("click", function () {
button.classList.toggle("clicked");
Mr_p.textContent = "belong to Mr Rockline"
Mr_p.style.color = '#FFFFFF';
Mr_p.style.backgroundColor = 'blue';
});

Mr_p.addEventListener("click" , function(){
Mr_p.classList.toggle("clicked");
Mr_p.textContent = "Be carefull it's Me "; 
Mr_p.style.color = '#FFFFFF';
Mr_p.style.backgroundColor = 'red' 
})

