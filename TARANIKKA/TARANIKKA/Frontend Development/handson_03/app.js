import { courses as rawCourses } from './data.js';

// Create a working copy of data so we don't ruin the original list
let courseWorkingState = [...rawCourses];

// Grab the elements from HTML
const gridContainer = document.querySelector('.course-grid');
const searchInput = document.getElementById('search-courses');
const sortButton = document.getElementById('sort-btn');
const totalCreditsBanner = document.getElementById('total-credits');
const gradeBox = document.getElementById('grade-box');

// ==========================================
// STEP 1: LOAD THE PAGE & INITIAL PAINT
// ==========================================
const renderCourseGrid = (arrayToRender) => {
    // Wipe out any old visual elements inside the grid
    gridContainer.innerHTML = '';

    // Loop through the array and create HTML for each course card
    arrayToRender.forEach(course => {
        const card = document.createElement('article');
        card.className = 'course-card';
        
        // Attach the ID directly onto the HTML card so we know which one it is later
        card.setAttribute('data-id', course.id);

        card.innerHTML = `
            <h3>${course.name}</h3>
            <p>Code: <strong>${course.code}</strong></p>
            <span>${course.credits} credits</span>
        `;
        gridContainer.appendChild(card);
    });

    // MATH: Calculate total credits dynamically using .reduce()
    const currentTotalCredits = arrayToRender.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsBanner.textContent = `Total Viewport Footprint: ${currentTotalCredits} Active Curriculum Credits Enrolled`;
};

// Fire Step 1 as soon as the page finishes loading
document.addEventListener('DOMContentLoaded', () => {
    renderCourseGrid(courseWorkingState);
});


// STEP 2: TYPING IN THE SEARCH BOX

searchInput.addEventListener('input', (event) => {
    const textTyped = event.target.value.toLowerCase().trim();

    // Use .filter() to keep only the items matching what was typed
    const filteredResults = courseWorkingState.filter(course => 
        course.name.toLowerCase().includes(textTyped)
    );

    // Re-run Step 1's renderer with just the filtered list
    renderCourseGrid(filteredResults);
});


// STEP 3: CLICKING THE SORT BUTTON

sortButton.addEventListener('click', () => {
    // Sort the list descending based on credit value
    courseWorkingState.sort((a, b) => b.credits - a.credits);

    // Re-run Step 1's renderer with our newly re-ordered list
    renderCourseGrid(courseWorkingState);
});

// STEP 4: CLICKING A COURSE CARD (Event Delegation)

gridContainer.addEventListener('click', (event) => {
    // Look up to see if the user clicked inside a .course-card container
    const clickedCard = event.target.closest('.course-card');
    
    if (clickedCard) {
        // Extract the hidden tracking ID from the card attribute
        const clickedId = parseInt(clickedCard.getAttribute('data-id'), 10);
        
        // Use .find() to find the matching object in our original data array
        const matchedCourse = rawCourses.find(course => course.id === clickedId);
        
        if (matchedCourse) {
            // Un-hide the green box and display the grade information
            gradeBox.style.display = 'block';
            gradeBox.innerHTML = `Selected <strong>${matchedCourse.name}</strong>. Current standing: <strong>Grade ${matchedCourse.grade}</strong>.`;
        }
    }
});