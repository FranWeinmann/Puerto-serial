document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userInputForm');
    const inputTypeSelect = document.getElementById('inputType');
    const userInput = document.getElementById('userInput');
    const result = document.getElementById('result');
    const submittedValue = document.getElementById('submittedValue');

    inputTypeSelect.addEventListener('change', function() {
        const selectedType = this.value;
        userInput.type = selectedType;
        
        if (selectedType === 'color') {
            userInput.style.height = '50px';
        } else {
            userInput.style.height = '';
        }

        if (selectedType === 'number') {
            userInput.placeholder = 'Ingresa un número';
        } else if (selectedType === 'text') {
            userInput.placeholder = 'Escribe aquí...';
        } else {
            userInput.placeholder = '';
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const inputType = inputTypeSelect.value;
        const value = userInput.value;

        result.classList.remove('hidden');

        if (inputType === 'color') {
            submittedValue.innerHTML = `
                <div class="color-preview" style="background-color: ${value};"></div>
                ${value}
            `;
            let color = document.querySelector('.mostrarColor');
            color.style.backgroundColor=`${value}`
        } else {
            submittedValue.textContent = value;
        }
        postData('mandarDatos', { value })

        userInput.value = '';
    });
});