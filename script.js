document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
  // Impede o formulário de recarregar a página
  event.preventDefault(); 

  const phone = document.getElementById('phone').value.replace(/\D/g, '');
  const message = document.getElementById('message').value;

  if (phone) {
    let fullPhoneNumber;

    if (phone.startsWith('55')) {
      fullPhoneNumber = phone;
    } else {
      fullPhoneNumber = '55' + phone;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${fullPhoneNumber}?text=${encodedMessage}`;
    
    // Abre o link em uma nova aba
    window.open(whatsappUrl, '_blank');

    // --- NOVIDADE ---
    // Limpa os campos do formulário após o envio
    this.reset();

  } else {
    alert('Por favor, insira um número válido.');
  }
});
