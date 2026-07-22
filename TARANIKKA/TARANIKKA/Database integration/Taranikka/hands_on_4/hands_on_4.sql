TASK 1

-- 48. Run EXPLAIN on the query
EXPLAIN
SELECT
    s.first_name,
    s.last_name,
    c.course_name
FROM enrollments e
JOIN students s
ON s.student_id = e.student_id
JOIN courses c
ON c.course_id = e.course_id
WHERE s.enrollment_year = 2022;

-- 49 & 50. Analysis Comments

TASK 2

-- 51. Create index on enrollment_year
CREATE INDEX idx_students_enrollment_year
ON students(enrollment_year);

-- 52. Composite UNIQUE index
CREATE UNIQUE INDEX idx_enrollment_unique
ON enrollments(student_id, course_id);

-- 53. Index on course_code
CREATE INDEX idx_course_code
ON courses(course_code);

-- 54. Run EXPLAIN again
EXPLAIN
SELECT
    s.first_name,
    s.last_name,
    c.course_name
FROM enrollments e
JOIN students s
ON s.student_id = e.student_id
JOIN courses c
ON c.course_id = e.course_id
WHERE s.enrollment_year = 2022;



-- 55. Partial Index (PostgreSQL)
CREATE INDEX idx_null_grades
ON enrollments(student_id)
WHERE grade IS NULL;

TASK 3
import mysql.connector

conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your_password",
    database="college_db"
)

cursor = conn.cursor()

query_count = 1

cursor.execute("SELECT * FROM enrollments")
enrollments = cursor.fetchall()

for enrollment in enrollments:
    student_id = enrollment[1]

    cursor.execute(
        "SELECT first_name, last_name FROM students WHERE student_id=%s",
        (student_id,)
    )

    student = cursor.fetchone()
    print(student)

    query_count += 1

print("Total Queries Executed:", query_count)

cursor.close()
conn.close()
