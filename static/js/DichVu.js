document.addEventListener('DOMContentLoaded', () => {
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.attraction-grid');
// Doi tab
function switchTab(targetTabId) {
tabButtons.forEach(button => {
button.classList.remove('active');
});
tabContents.forEach(content => {
content.classList.remove('active');
});
const activeTabButton = document.querySelector(`.tab-button[data-tab="${targetTabId}"]`);
if (activeTabButton) {
activeTabButton.classList.add('active');
}
const activeTabContent = document.getElementById(targetTabId);
if (activeTabContent) {
activeTabContent.classList.add('active');
}
}
// Nut
tabButtons.forEach(button => {
button.addEventListener('click', () => {
const targetTabId = button.getAttribute('data-tab');
switchTab(targetTabId);
});
});
});