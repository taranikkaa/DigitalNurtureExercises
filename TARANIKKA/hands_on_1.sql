
CREATE TABLE departments (
    department_id SERIAL PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL,
    head_of_dept VARCHAR(100),
    budget DECIMAL(12,2)
);

CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    date_of_birth DATE,
    department_id INT REFERENCES departments(department_id),
    enrollment_year INT
);
-- 1. Add phone_number column to the students table
ALTER TABLE students ADD COLUMN phone_number VARCHAR(15);

-- 2. Add max_seats column to the courses table (with a default value)
ALTER TABLE courses ADD COLUMN max_seats INT DEFAULT 60;

-- 3. Add a CHECK constraint to the enrollments table to ensure valid grades
ALTER TABLE enrollments ADD CONSTRAINT chk_grade 
CHECK (grade IN ('A', 'B', 'C', 'D', 'F') OR grade IS NULL);

-- 4. Rename 'hod_name' to 'head_of_dept' in the departments table
-- Note: Syntax below works for PostgreSQL; for MySQL use: CHANGE COLUMN hod_name head_of_dept VARCHAR(100)
ALTER TABLE departments RENAME COLUMN hod_name TO head_of_dept;

-- 5. Drop the phone_number column to simulate a rollback/cleanup
ALTER TABLE students DROP COLUMN phone_number;

-- Continue creating tables: courses, enrollments, and professors [cite: 199]

-- Your CREATE TABLE commands are here...
-- Your ALTER TABLE commands are here...

-- 1NF: Each column (e.g., student_id, email) contains atomic values.
-- 2NF: All non-key attributes (e.g., budget) depend on the full primary key of their respective tables.
-- 3NF: No transitive dependencies exist; for example, head_of_dept depends on department_id, not student_id.
-- Enrollments Table Analysis: The composite key (student_id, course_id) uniquely identifies each enrollment.
-- Every non-key attribute in enrollments, such as enrollment_date, depends on the entire composite key.
-- Therefore, the enrollments table adheres to 3NF standards.