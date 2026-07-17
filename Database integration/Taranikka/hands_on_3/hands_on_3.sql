TASK 1

SELECT s.student_id, s.first_name, s.last_name
FROM students s
JOIN enrollments e ON s.student_id = e.student_id
GROUP BY s.student_id, s.first_name, s.last_name
HAVING COUNT(e.course_id) >
(
    SELECT AVG(course_count)
    FROM
    (
        SELECT COUNT(*) AS course_count
        FROM enrollments
        GROUP BY student_id
    ) AS avg_table
);

-- 36. Courses where all enrolled students received grade 'A'
SELECT c.course_name
FROM courses c
WHERE NOT EXISTS
(
    SELECT *
    FROM enrollments e
    WHERE e.course_id = c.course_id
      AND e.grade <> 'A'
);

-- 37. Highest paid professor in each department
SELECT p1.prof_name,
       p1.salary,
       d.dept_name
FROM professors p1
JOIN departments d
ON p1.department_id = d.department_id
WHERE p1.salary =
(
    SELECT MAX(p2.salary)
    FROM professors p2
    WHERE p2.department_id = p1.department_id
);

-- 38. Departments with average salary greater than 85000
SELECT dept_name, avg_salary
FROM
(
    SELECT d.dept_name,
           AVG(p.salary) AS avg_salary
    FROM departments d
    JOIN professors p
    ON d.department_id = p.department_id
    GROUP BY d.dept_name
) AS salary_table
WHERE avg_salary > 85000;
TASK 2
-- ===========================
-- Hands-On 3 : Task 2
-- Views
-- ===========================

-- 39. Create Student Enrollment Summary View
CREATE VIEW vw_student_enrollment_summary AS
SELECT
    s.student_id,
    CONCAT(s.first_name,' ',s.last_name) AS student_name,
    d.dept_name,
    COUNT(e.course_id) AS total_courses,
    AVG(
        CASE
            WHEN e.grade='A' THEN 4
            WHEN e.grade='B' THEN 3
            WHEN e.grade='C' THEN 2
            WHEN e.grade='D' THEN 1
            WHEN e.grade='F' THEN 0
        END
    ) AS GPA
FROM students s
JOIN departments d
ON s.department_id=d.department_id
LEFT JOIN enrollments e
ON s.student_id=e.student_id
GROUP BY s.student_id,student_name,d.dept_name;

-- 40. Create Course Statistics View
CREATE VIEW vw_course_stats AS
SELECT
    c.course_name,
    c.course_code,
    COUNT(e.student_id) AS total_enrollments,
    AVG(
        CASE
            WHEN e.grade='A' THEN 4
            WHEN e.grade='B' THEN 3
            WHEN e.grade='C' THEN 2
            WHEN e.grade='D' THEN 1
            WHEN e.grade='F' THEN 0
        END
    ) AS avg_gpa
FROM courses c
LEFT JOIN enrollments e
ON c.course_id=e.course_id
GROUP BY c.course_name,c.course_code;

-- 41. Students with GPA above 3.0
SELECT *
FROM vw_student_enrollment_summary
WHERE GPA > 3.0;

-- 42. Try updating the view
UPDATE vw_student_enrollment_summary
SET GPA = 4
WHERE student_id = 1;

-- Comment:
-- Multi-table views generally cannot be updated because
-- SQL cannot determine which underlying table should be modified.

-- 43. Drop Views
DROP VIEW vw_course_stats;
DROP VIEW vw_student_enrollment_summary;

-- Recreate single-table view with CHECK OPTION
CREATE VIEW vw_student_enrollment_summary AS
SELECT student_id,
       first_name,
       last_name,
       enrollment_year
FROM students
WHERE enrollment_year >= 2022
WITH CHECK OPTION;
TASK 3
-- ===========================
-- Hands-On 3 : Task 3
-- Stored Procedures & Transactions
-- ===========================

-- 44. Stored Procedure to Enroll Student
DELIMITER $$

CREATE PROCEDURE sp_enroll_student(
    IN p_student_id INT,
    IN p_course_id INT,
    IN p_date DATE
)
BEGIN

IF EXISTS
(
    SELECT *
    FROM enrollments
    WHERE student_id=p_student_id
    AND course_id=p_course_id
)
THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT='Duplicate Enrollment';
ELSE
    INSERT INTO enrollments(student_id,course_id,enrollment_date)
    VALUES(p_student_id,p_course_id,p_date);
END IF;

END$$
DELIMITER ;

-- 45. Create Log Table
CREATE TABLE department_transfer_log(
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    old_department INT,
    new_department INT,
    transfer_date DATE
);

-- Transaction Example
START TRANSACTION;

UPDATE students
SET department_id=2
WHERE student_id=1;

INSERT INTO department_transfer_log
(student_id,old_department,new_department,transfer_date)
VALUES
(1,1,2,CURDATE());

COMMIT;

-- 46. Rollback Example
START TRANSACTION;

UPDATE students
SET department_id=5
WHERE student_id=2;

ROLLBACK;

-- 47. SAVEPOINT Example
START TRANSACTION;

INSERT INTO enrollments(student_id,course_id,enrollment_date)
VALUES(2,2,CURDATE());

SAVEPOINT sp1;

-- Intentional duplicate
INSERT INTO enrollments(student_id,course_id,enrollment_date)
VALUES(2,2,CURDATE());

ROLLBACK TO sp1;

COMMIT; 
