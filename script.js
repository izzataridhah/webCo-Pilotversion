// Toggle tema gelap/terang
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  toggle.textContent = isDark ? '☀️ Tema' : '🌙 Tema';
});

// Modal proyek
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeBtn = modal.querySelector('.modal-close');

document.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-modal]');
  if (btn) {
    modalTitle.textContent = btn.getAttribute('data-modal');
    modalDesc.textContent = btn.getAttribute('data-desc');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
});

// Validasi form kontak
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

function setError(input, message) {
  const wrapper = input.closest('.form-row');
  const errorEl = wrapper.querySelector('.error');
  errorEl.textContent = message || '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  const name = form.name;
  const email = form.email;
  const message = form.message;

  // Nama
  if (!name.value.trim()) {
    setError(name, 'Nama wajib diisi.');
    valid = false;
  } else {
    setError(name, '');
  }

  // Email (cek sederhana)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    setError(email, 'Email wajib diisi.');
    valid = false;
  } else if (!emailPattern.test(email.value)) {
    setError(email, 'Format email tidak valid.');
    valid = false;
  } else {
    setError(email, '');
  }

  // Pesan
  if (!message.value.trim()) {
    setError(message, 'Pesan wajib diisi.');
    valid = false;
  } else {
    setError(message, '');
  }

  if (valid) {
    statusEl.textContent = 'Terima kasih! Pesan Anda berhasil dikirim (simulasi).';
    form.reset();
  } else {
    statusEl.textContent = 'Periksa kembali isian Anda.';
  }
});