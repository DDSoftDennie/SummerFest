// Highlight the active nav link based on current page
(function () {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(function (link) {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
})();

// Booking form logic
(function () {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  const TICKET_PRICE = 99;

  const qtyInput = document.getElementById('qty');
  const pricePerUnit = document.getElementById('pricePerUnit');
  const totalTickets = document.getElementById('totalTickets');
  const totalPrice = document.getElementById('totalPrice');
  const successMessage = document.getElementById('successMessage');
  const confirmName = document.getElementById('confirmName');
  const confirmTickets = document.getElementById('confirmTickets');
  const confirmTotal = document.getElementById('confirmTotal');

  function updateSummary() {
    var qty = parseInt(qtyInput.value, 10) || 1;
    if (qty < 1) qty = 1;
    if (qty > 10) qty = 10;
    pricePerUnit.textContent = '\u20AC' + TICKET_PRICE;
    totalTickets.textContent = qty;
    totalPrice.textContent = '\u20AC' + (TICKET_PRICE * qty);
  }

  qtyInput.addEventListener('input', updateSummary);
  updateSummary();

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var qty = parseInt(qtyInput.value, 10) || 1;
    var total = TICKET_PRICE * qty;

    confirmName.textContent = firstName + ' ' + lastName;
    confirmTickets.textContent = qty + (qty === 1 ? ' ticket' : ' tickets');
    confirmTotal.textContent = '\u20AC' + total;

    form.style.display = 'none';
    successMessage.style.display = 'block';
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
})();
