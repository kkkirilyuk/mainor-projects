
var form = document.getElementById("big-form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

function send_data() {

    let name = document.getElementById("first_name").value;
    let summ = document.querySelector('input[name="summ"]:checked').value;
    let date = document.getElementById("date").value;
    
    let check = document.getElementById("check");
    check.innerText += "Имя: " + name + "\nСумма: " + summ + "\nДата: " + date
};
form.addEventListener('submit', send_data)