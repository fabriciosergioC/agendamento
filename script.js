document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    // Obter os valores dos campos
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
  
    // Verificar se todos os campos estão preenchidos
    if (!service || !date || !time) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // Exibir mensagem de confirmação
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.classList.remove('hidden');
  
    // Limpar o formulário após o agendamento
    setTimeout(() => {
      document.getElementById('appointmentForm').reset();
      confirmationMessage.classList.add('hidden');
    }, 3000); // Esconde a mensagem após 3 segundos
  });