// Panel switching
document.querySelectorAll('.gate button[data-target]').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active from all buttons and panels
    document.querySelectorAll('.gate button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));

    // Add active to clicked
    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.target);
    target.classList.add('active');
  });
});

// NMOS/PMOS theme toggle
const toggle = document.getElementById('mosToggle');
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.body.classList.remove('nmos');
    document.body.classList.add('pmos');
  } else {
    document.body.classList.remove('pmos');
    document.body.classList.add('nmos');
  }
});