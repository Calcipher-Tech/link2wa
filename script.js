document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
  // Impede o formulário de recarregar a página
  event.preventDefault(); 

  // Pega o número de telefone e remove tudo que não for dígito
  const phone = document.getElementById('phone').value.replace(/\D/g, '');
  
  // Pega a mensagem do campo de texto
  const message = document.getElementById('message').value;

  if (phone) {
    let fullPhoneNumber;

    // --- LÓGICA CORRIGIDA ---
    // Verifica se o número já começa com 55. Se não, adiciona.
    if (phone.startsWith('55')) {
      fullPhoneNumber = phone;
    } else {
      fullPhoneNumber = '55' + phone;
    }
    
    // Codifica a mensagem para que ela funcione corretamente em uma URL
    const encodedMessage = encodeURIComponent(message);
    
    // Cria o link do WhatsApp com o número e a mensagem
    const whatsappUrl = `https://wa.me/${fullPhoneNumber}?text=${encodedMessage}`;
    
    // Abre o link em uma nova aba
    window.open(whatsappUrl, '_blank');
  } else {
    alert('Por favor, insira um número válido.');
  }
});
