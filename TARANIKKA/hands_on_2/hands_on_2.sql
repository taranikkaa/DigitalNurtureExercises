TASK 1
-- ===========================
-- Hands-On 2 : Task 1
-- Insert, Update and Delete Data
-- ===========================

-- 15. Insert Sample Data

-- Departments
INSERT INTO departments (dept_name, head_of_dept, budget) VALUES
('Computer Science', 'Dr. Ramesh Kumar', 850000.00),
('Electronics', 'Dr. Priya Nair', 620000.00),
('Mechanical', 'Dr. Suresh Iyer', 540000.00),
('Civil', 'Dr. Ananya Sharma', 430000.00);

-- Students
INSERT INTO students (first_name, last_name, email, date_of_birth, department_id, enrollment_year) VALUES
('Arjun', 'Mehta', 'arjun.mehta@college.edu', '2003-04-12', 1, 2022),
('Priya', 'Suresh', 'priya.suresh@college.edu', '2003-07-25', 1, 2022),
('Rohan', 'Verma', 'rohan.verma@college.edu', '2002-11-08', 2, 2021),
('Sneha', 'Patel', 'sneha.patel@college.edu', '2004-01-30', 3, 2023),
('Vikram', 'Das', 'vikram.das@college.edu', '2003-09-14', 1, 2022),
('Kavya', 'Menon', 'kavya.menon@college.edu', '2002-05-17', 2, 2021),
('Aditya', 'Singh', 'aditya.singh@college.edu', '2004-03-22', 4, 2023),
('Deepika', 'Rao', 'deepika.rao@college.edu', '2003-08-09', 1, 2022);

-- Courses
INSERT INTO courses (course_name, course_code, credits, department_id) VALUES
('Data Structures & Algorithms', 'CS101', 4, 1),
('Database Management Systems', 'CS102', 3, 1),
('Object Oriented Programming', 'CS103', 4, 1),
('Circuit Theory', 'EC101', 3, 2),
('Thermodynamics', 'ME101', 3, 3);

-- Enrollments
INSERT INTO enrollments (student_id, course_id, enrollment_date, grade) VALUES
(1,1,'2022-07-01','A'),
(1,2,'2022-07-01','B'),
(2,1,'2022-07-01','B'),
(2,3,'2022-07-01','A'),
(3,4,'2021-07-01','A'),
(4,5,'2023-07-01',NULL),
(5,1,'2022-07-01','C'),
(5,2,'2022-07-01','A'),
(6,4,'2021-07-01','B'),
(7,5,'2023-07-01',NULL),
(8,1,'2022-07-01','A'),
(8,3,'2022-07-01','B');

-- Professors
INSERT INTO professors (prof_name, email, department_id, salary) VALUES
('Dr. Anand Krishnan', 'anand.k@college.edu', 1, 95000.00),
('Dr. Meena Pillai', 'meena.p@college.edu', 1, 88000.00),
('Dr. Sunil Rajan', 'sunil.r@college.edu', 2, 82000.00),
('Dr. Latha Gopal', 'latha.g@college.edu', 3, 79000.00),
('Dr. Kartik Bose', 'kartik.b@college.edu', 4, 76000.00);

-- 16. Insert Two Additional Students
INSERT INTO students (first_name, last_name, email, date_of_birth, department_id, enrollment_year)
VALUES
('Nithik', 'Venkat', 'nithik.venkat@college.edu', '2004-06-15', 1, 2023),
('Rahul', 'Sharma', 'rahul.sharma@college.edu', '2003-12-10', 2, 2022);

-- 17. Update Grade
UPDATE enrollments
SET grade = 'B'
WHERE student_id = 5
AND course_id = 1;

-- 18. Preview Records with NULL Grade
SELECT *
FROM enrollments
WHERE grade IS NULL;

-- Delete Records with NULL Grade
DELETE FROM enrollments
WHERE grade IS NULL;

-- 19. Verify Row Counts
SELECT COUNT(*) AS departments_count FROM departments;
SELECT COUNT(*) AS students_count FROM students;
SELECT COUNT(*) AS courses_count FROM courses;
SELECT COUNT(*) AS enrollments_count FROM enrollments;
SELECT COUNT(*) AS professors_count FROM professors;
TASK 2
-- ===========================
-- Hands-On 2 : Task 2
-- Single-Table Queries and Filtering
-- ===========================

-- 20. Retrieve all students enrolled in 2022, ordered by last_name
SELECT *
FROM students
WHERE enrollment_year = 2022
ORDER BY last_name ASC;

-- 21. Find all courses with more than 3 credits
SELECT *
FROM courses
WHERE credits > 3
ORDER BY credits DESC;

-- 22. List all professors whose salary is between 80,000 and 95,000
SELECT *
FROM professors
WHERE salary BETWEEN 80000 AND 95000;

-- 23. Find all students whose email ends with '@college.edu'
SELECT *
FROM students
WHERE email LIKE '%@college.edu';

-- 24. Count the total number of students per enrollment_year
SELECT enrollment_year, COUNT(*) AS total_students
FROM students
GROUP BY enrollment_year;
TASK 3
-- ===========================
-- Hands-On 2 : Task 3
-- Multi-Table Joins
-- ===========================

-- 25. Student full name with department name
SELECT
    CONCAT(s.first_name, ' ', s.last_name) AS student_name,
    d.dept_name
FROM students s
JOIN departments d
ON s.department_id = d.department_id;

-- 26. Enrollment with student name and course name
SELECT
    CONCAT(s.first_name, ' ', s.last_name) AS student_name,
    c.course_name,
    e.enrollment_date,
    e.grade
FROM enrollments e
JOIN students s
ON e.student_id = s.student_id
JOIN courses c
ON e.course_id = c.course_id;

-- 27. Students not enrolled in any course
SELECT
    s.student_id,
    s.first_name,
    s.last_name
FROM students s
LEFT JOIN enrollments e
ON s.student_id = e.student_id
WHERE e.student_id IS NULL;

-- 28. Every course with number of enrolled students
SELECT
    c.course_name,
    COUNT(e.student_id) AS enrollment_count
FROM courses c
LEFT JOIN enrollments e
ON c.course_id = e.course_id
GROUP BY c.course_id, c.course_name;

-- 29. Departments with professors and salaries
SELECT
    d.dept_name,
    p.prof_name,
    p.salary
FROM departments d
LEFT JOIN professors p
ON d.department_id = p.department_id; 
TASK 4
-- ===========================
-- Hands-On 2 : Task 4
-- Aggregations and Grouping
-- ===========================

-- 30. Total enrollments per course
SELECT
    c.course_name,
    COUNT(e.enrollment_id) AS enrollment_count
FROM courses c
LEFT JOIN enrollments e
ON c.course_id = e.course_id
GROUP BY c.course_id, c.course_name;

-- 31. Average salary of professors per department
SELECT
    d.dept_name,
    ROUND(AVG(p.salary), 2) AS average_salary
FROM departments d
LEFT JOIN professors p
ON d.department_id = p.department_id
GROUP BY d.department_id, d.dept_name;

-- 32. Departments where budget exceeds 600000
SELECT
    dept_name,
    budget
FROM departments
WHERE budget > 600000;

-- 33. Grade distribution for course CS101
SELECT
    e.grade,
    COUNT(*) AS grade_count
FROM enrollments e
JOIN courses c
ON e.course_id = c.course_id
WHERE c.course_code = 'CS101'
GROUP BY e.grade;

-- 34. Departments with more than 2 enrolled students
SELECT
    d.dept_name,
    COUNT(e.student_id) AS total_students
FROM departments d
JOIN students s
ON d.department_id = s.department_id
JOIN enrollments e
ON s.student_id = e.student_id
GROUP BY d.department_id, d.dept_name
HAVING COUNT(e.student_id) > 2;
