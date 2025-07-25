document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('message');
    
    // Objeto com as funções de validação para cada campo
    const validators = {
        name: (value) => {
            return value.length >= 3 || 'O nome deve ter pelo menos 3 caracteres';
        },
        email: (value) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value) || 'Digite um e-mail válido';
        },
        phone: (value) => {
            const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
            return phoneRegex.test(value) || 'Digite um telefone válido: (99) 99999-9999';
        },
        address: (value) => {
            return value.length >= 5 || 'O endereço deve ter pelo menos 5 caracteres';
        }
    };

    // Formata o número de telefone enquanto o usuário digita
    document.getElementById('phone').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 11) {
            value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            e.target.value = value;
        }
        validateField('phone', value);
    });

    // Adiciona validação em tempo real para todos os campos
    ['name', 'email', 'phone', 'address'].forEach(fieldName => {
        const field = document.getElementById(fieldName);
        const errorSpan = document.getElementById(fieldName + 'Error');

        field.addEventListener('input', () => {
            validateField(fieldName, field.value);
        });

        field.addEventListener('blur', () => {
            validateField(fieldName, field.value);
        });
    });

    // Função para validar um campo específico
    function validateField(fieldName, value) {
        const field = document.getElementById(fieldName);
        const errorSpan = document.getElementById(fieldName + 'Error');
        const validationResult = validators[fieldName](value);

        if (validationResult === true || value === '') {
            field.classList.remove('border-red-500');
            field.classList.add('border-gray-300');
            errorSpan.classList.add('hidden');
            errorSpan.textContent = '';
        } else {
            field.classList.remove('border-gray-300');
            field.classList.add('border-red-500');
            errorSpan.classList.remove('hidden');
            errorSpan.textContent = validationResult;
        }
    }

    // Manipula o envio do formulário
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Valida todos os campos antes de enviar
        let isValid = true;
        ['name', 'email', 'phone', 'address'].forEach(fieldName => {
            const field = document.getElementById(fieldName);
            const validationResult = validators[fieldName](field.value);
            if (validationResult !== true) {
                isValid = false;
                validateField(fieldName, field.value);
            }
        });

        if (!isValid) {
            showMessage('Por favor, corrija os erros no formulário.', 'error');
            return;
        }

        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="inline-block animate-spin mr-2">⌛</span> Enviando...';

        try {
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value
            };

            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                showMessage('Cadastro realizado com sucesso!', 'success');
                form.reset();
            } else {
                throw new Error(data.error || 'Erro ao cadastrar');
            }
        } catch (error) {
            showMessage(error.message, 'error');
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });

    // Função para mostrar mensagens de sucesso ou erro
    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.classList.remove('hidden', 'bg-green-100', 'text-green-700', 'bg-red-100', 'text-red-700');
        
        if (type === 'success') {
            messageDiv.classList.add('bg-green-100', 'text-green-700');
        } else {
            messageDiv.classList.add('bg-red-100', 'text-red-700');
        }

        // Auto-hide after 5 seconds
        setTimeout(() => {
            messageDiv.classList.add('hidden');
        }, 5000);
    }
});
