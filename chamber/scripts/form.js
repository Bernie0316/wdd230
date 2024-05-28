document.addEventListener('DOMContentLoaded', function() {
    const timestampInput = document.getElementById('timestamp');
    const currentDate = new Date().toISOString();
    timestampInput.value = currentDate;
});