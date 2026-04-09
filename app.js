// write code that shows the booking confirmation message and hides the form
document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  document.getElementById('bookingForm').style.display = 'none';
  document.getElementById('successMessage').style.display = 'block';
}); 