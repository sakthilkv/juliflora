window.onload = function() {
    document.querySelector('body').style.visibility = 'visible';
  }
const treeCountInput = document.getElementById('tree-count');
const charcoalAmountInput = document.getElementById('charcoal-amount');
const electricityAmountInput = document.getElementById('electricity-amount');

function calculateElectricity() {
const treeCount = treeCountInput.valueAsNumber || 0;
const charcoalAmount = (treeCount * 15 * 0.3).toFixed(2);
const electricityAmount = (charcoalAmount * 5).toFixed(2);

charcoalAmountInput.value = charcoalAmount + ' Kg';
electricityAmountInput.value = electricityAmount + ' kWh';
}

// Trigger the input event on page load
window.addEventListener('load', () => {
calculateElectricity();
});

// Listen for changes to the tree count input
treeCountInput.addEventListener('input', () => {
calculateElectricity();
});