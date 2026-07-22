const gridContainer = document.querySelector('.course-grid');
const loadingSpinner = document.getElementById('loading-spinner');
const errorBox = document.getElementById('error-box');
const totalCreditsBanner = document.getElementById('total-credits');

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchCoursesFromServer() {
    loadingSpinner.style.display = 'block';
    gridContainer.innerHTML = '';
    errorBox.style.display = 'none';

    try {
        await wait(2000); // Simulated network lag
        const response = await fetch('courses.json');

        if (!response.ok) {
            throw new Error(`Server returned status code: ${response.status}`);
        }

        const databaseCourses = await response.json();
        loadingSpinner.style.display = 'none';
        renderCourseGrid(databaseCourses);

    } catch (error) {
        loadingSpinner.style.display = 'none';
        errorBox.style.display = 'block';
        errorBox.innerHTML = `⚠️ <strong>Database Connection Failed:</strong> ${error.message}`;
    }
}

function renderCourseGrid(coursesArray) {
    gridContainer.innerHTML = '';
    coursesArray.forEach(course => {
        const card = document.createElement('article');
        card.className = 'course-card';
        card.innerHTML = `
            <h3>${course.name}</h3>
            <p>Code: <strong>${course.code}</strong></p>
            <span>${course.credits} credits</span>
        `;
        gridContainer.appendChild(card);
    });

    const totalCredits = coursesArray.reduce((sum, item) => sum + item.credits, 0);
    totalCreditsBanner.textContent = `Total Live Footprint: ${totalCredits} Verified Server Credits`;
}

document.addEventListener('DOMContentLoaded', fetchCoursesFromServer);