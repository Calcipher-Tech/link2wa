document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
  // Impede o formulário de recarregar a página
  event.preventDefault(); 

  // Pega o número de telefone e remove caracteres não numéricos
  const phone = document.getElementById('phone').value.replace(/\D/g, '');
  
  // Pega a mensagem do campo de texto
  const message = document.getElementById('message').value;

  if (phone) {
    // Codifica a mensagem para que ela funcione corretamente em uma URL
    const encodedMessage = encodeURIComponent(message);
    
    // Cria o link do WhatsApp com o número e a mensagem
    // Nota: Adicionei "55" como código de país padrão para o Brasil
    const whatsappUrl = `https://wa.me/55${phone}?text=${encodedMessage}`;
    
    // Abre o link em uma nova aba
    window.open(whatsappUrl, '_blank');
  } else {
    alert('Por favor, insira um número válido.');
  }
});
