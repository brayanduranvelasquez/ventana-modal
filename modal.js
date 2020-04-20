var openModal = document.getElementById('open_modal');
var closeModal = document.getElementById('close_modal');
var fondoModal = document.getElementById('fondoModal');
var modal = document.getElementById('modal');

function close(){
	modal.style.display = "none";
	fondoModal.style.display = "none";
}

function open(){
	modal.style.display = "block";
	fondoModal.style.display = "block";
}

openModal.addEventListener('click', open);
closeModal.addEventListener('click', close);
fondoModal.addEventListener('click', close);