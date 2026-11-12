// Set only after the client confirms the business WhatsApp number (country code + digits).
const WHATSAPP_NUMBER = '5521998592826';
const dialog = document.getElementById('preview-dialog');
document.querySelectorAll('[data-wa]').forEach(link => {
  if (!WHATSAPP_NUMBER) {
    link.addEventListener('click', event => { event.preventDefault(); dialog.showModal(); });
    return;
  }
  const message = link.dataset.topic
    ? `Olá, Dr. Gabriel! Vim pelo site e gostaria de conversar sobre ${link.dataset.topic}.`
    : 'Olá, Dr. Gabriel! Vim pelo site e gostaria de conversar sobre uma questão trabalhista.';
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
document.querySelectorAll('.close-dialog').forEach(button => button.addEventListener('click', () => dialog.close()));
document.getElementById('year').textContent = new Date().getFullYear();
