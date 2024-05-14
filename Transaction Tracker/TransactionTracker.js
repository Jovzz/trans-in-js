document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('transactionForm');
  const emailInput = document.getElementById('emailInput');
  const passwordInput = document.getElementById('passwordInput');
  const nameInput = document.getElementById('nameInput');
  const amountInput = document.getElementById('amountInput');
  const transactionList = document.getElementById('transactionList');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const name = nameInput.value.trim();
    const amount = parseFloat(amountInput.value.trim());

    if (email === '' || password === '' || name === '' || isNaN(amount)) {
      alert('Please enter valid values for email, password, name, and amount.');
      return;
    }

    const transactionItem = document.createElement('div');
    transactionItem.classList.add('transaction-item');
    transactionItem.innerHTML = `
      <strong>Email:</strong> ${email} - <strong>Password:</strong> ${password} - <strong>Name:</strong> ${name} - <strong>Amount:</strong> ${amount}
    `;
    transactionList.appendChild(transactionItem);

    // Clear input fields
    emailInput.value = '';
    passwordInput.value = '';
    nameInput.value = '';
    amountInput.value = '';
  });
});
