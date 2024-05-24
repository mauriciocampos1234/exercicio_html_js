document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
        var campoA = document.getElementById('campoA').value;
        var campoB = document.getElementById('campoB').value;
    
        if (campoB > campoA) {
        alert('Formulário válido!');
        } else {
        alert('Formulário inválido! O número B deve ser maior que o número A.');
        }
    });