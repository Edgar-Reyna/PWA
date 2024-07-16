document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phoneNumber');
    const errorText = document.getElementById('error');
    const submitBtn = document.getElementById('submitBtn');

    phoneInput.addEventListener('input', function(e) {
        // Elimina cualquier carácter que no sea un número
        this.value = this.value.replace(/[^0-9]/g, '');
        
        if (this.value.length === 10) {
            errorText.textContent = '';
            submitBtn.disabled = false;
        } else {
            errorText.textContent = 'El número debe tener 10 dígitos';
            submitBtn.disabled = true;
        }
    });

    submitBtn.addEventListener('click', function() {
        if (phoneInput.value.length === 10) {
            //alert('Número válido: ' + phoneInput.value);
            // Aquí puedes agregar la lógica para enviar el número al servidor
            window.open('https://wa.me/+52'+phoneInput.value);
        }
    });
});