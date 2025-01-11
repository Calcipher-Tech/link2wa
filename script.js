document.getElementById('whatsapp-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const phone = document.getElementById('phone').value.trim();

  if (phone) {
    // Formata o link para abrir o WhatsApp
    const whatsappUrl = `https://wa.me/${phone}`;
    window.open(whatsappUrl, '_blank');
  } else {
    alert('Por favor, insira um número válido.');
  }
});
