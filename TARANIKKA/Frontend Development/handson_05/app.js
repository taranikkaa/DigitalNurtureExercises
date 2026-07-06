const activeModules = [
    { id: 1, name: "Data Structures", code: "CS101", credits: 4 }
];

// Query HTML Form Elements
const form = document.getElementById('enrollment-form');
const gridContainer = document.querySelector('.course-grid');
const successAlert = document.getElementById('success-alert');

// Query Individual Input Elements
const nameInput = document.getElementById('course-name');
const codeInput = document.getElementById('course-code');
const creditsInput = document.getElementById('course-credits');

// ==========================================
// REGEX VALIDATION LOGIC ENGINE
// ==========================================
function validateForm() {
    let isValid = true;

    // 1. Validate Name (Length Check)
    if (nameInput.value.trim().length < 3) {
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('name-error').style.display = 'none';
    }

    // 2. Validate Course Code using Regular Expressions (2 Caps, 3 Digits)
    const codePattern = /^[A-Z]{2}\d{3}$/;
    if (!codePattern.test(codeInput.value.trim())) {
        document.getElementById('code-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('code-error').style.display = 'none';
    }

    // 3. Validate Credits (Range Boundary Check)
    const creditValue = parseInt(creditsInput.value, 10);
    if (isNaN(creditValue) || creditValue < 1 || creditValue > 5) {
        document.getElementById('credits-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('credits-error').style.display = 'none';
    }

    return isValid;
}

// ==========================================
// RENDER INTERFACE
// ==========================================
function renderGrid() {
    gridContainer.innerHTML = '';
    
    activeModules.forEach(module => {
        const card = document.createElement('article');
        card.className = 'course-card';
        card.innerHTML = `
            <h3>${module.name}</h3>
            <p>Code: <strong>${module.code}</strong></p>
            <span>${module.credits} credits</span>
        `;
        gridContainer.appendChild(card);
    });
}

// ==========================================
// SUBMIT EVENT HANDLER
// ==========================================
form.addEventListener('submit', (event) => {
    // Stop the page from standard browser refreshing
    event.preventDefault();

    if (validateForm()) {
        // Build new valid data object structure
        const newModule = {
            id: Date.now(), // Generates a unique tracking key
            name: nameInput.value.trim(),
            code: codeInput.value.trim(),
            credits: parseInt(creditsInput.value, 10)
        };

        // Push item straight into data state and update UI layout
        activeModules.push(newModule);
        renderGrid();

        // Show green success validation banner & wipe input fields
        successAlert.style.display = 'block';
        form.reset();

        // Smoothly dismiss banner notifications after 3 seconds
        setTimeout(() => {
            successAlert.style.display = 'none';
        }, 3000);
    }
});

// Initial boot layout setup execution
document.addEventListener('DOMContentLoaded', renderGrid);