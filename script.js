// Switching between sections
document.querySelectorAll('.navbar nav ul li a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        // Remove active class from all menu items and hide all sections
        document.querySelectorAll('.navbar nav ul li a').forEach(link => link.classList.remove('active-menu'));
        document.querySelectorAll('.content-section').forEach(section => section.style.display = 'none');

        // Add active class to clicked menu item and show the corresponding section
        this.classList.add('active-menu');
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).style.display = 'block';
    });
});

// Smiles
document.getElementById('submit-button').addEventListener('click', function() {
    var smilesInput = document.getElementById('smiles').value;
    var messageElement = document.getElementById('message');

    if (isValidSMILES(smilesInput)) {
        messageElement.textContent = ''; // Clear message if valid
    } else {
        messageElement.textContent = 'Invalid SMILES'; // Display error message
        messageElement.style.color = 'red'; // Optional: Make the message stand out
    }
});

function isValidSMILES(smiles) {
    // Regular expression for allowed SMILES characters
    var regex = /^[A-Za-z0-9@+\-\[\]\(\)\\\/%=#$]*$/; // * instead of + to allow empty string as valid
    return regex.test(smiles);
}
