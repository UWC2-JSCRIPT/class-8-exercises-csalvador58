setTimeout(
    removeDisplay,
    5000            // in milliseconds
);

function removeDisplay() {
    document.getElementById('maintenance-notice').style.display = 'none';
}