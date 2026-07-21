QA CONCEPTS, FUNCTIONAL TESTING & DEFECT LIFECYCLE

-------------------------------------------------
Task 1: Map Testing Types to a Real System
-------------------------------------------------

1. Testing Types  

Unit Testing:
Tests a single function or module independently.
Example: Verify the createCourse() function stores the course correctly.

Integration Testing:
Tests whether multiple modules work together.
Example: Verify the Course API communicates correctly with the database.

System Testing:
Tests the complete application.
Example: Check whether users can create, update, view and delete courses successfully.

User Acceptance Testing (UAT):
Performed by the end user to verify the application meets business requirements.
Example: The admin verifies that all course management operations work correctly.

-------------------------------------------------

2. Functional vs Non-Functional Testing

Functional Testing:
- Create Course
- Update Course
- Delete Course
- View Course Details
- Search Course

Non-Functional Testing:
- Performance
- Security
- Reliability
- Scalability
- Usability

-------------------------------------------------

3. Black Box Testing vs White Box Testing

Black Box Testing:
- Tests the application without knowing the source code.
- Focuses on inputs and outputs.
- Mainly performed by testers.

White Box Testing:
- Tests the internal code and program logic.
- Requires programming knowledge.
- Mainly performed by developers.

-------------------------------------------------

4. Test Cases for POST /api/courses

Test Case ID : TC01
Description  : Create course with valid data
Precondition : API is running
Steps:
1. Open Postman.
2. Send POST request to /api/courses.
3. Enter valid course details.
4. Click Send.
Expected Result:
Course should be created successfully with status code 201.


-------------------------------------------------

Test Case ID : TC02
Description  : Create course with empty course name
Precondition : API is running
Steps:
1. Send POST request.
2. Leave Course Name empty.
3. Click Send.
Expected Result:
Validation error (400 Bad Request).


-------------------------------------------------

Test Case ID : TC03
Description  : Create course with duplicate course ID
Precondition : Same Course ID already exists
Steps:
1. Send POST request.
2. Enter an existing Course ID.
3. Click Send.
Expected Result:
Duplicate record error (409 Conflict).


----------------------------------------------------

Test Case ID : TC04
Description  : Create course with invalid credits
Precondition : API is running
Steps:
1. Enter negative credits.
2. Send request.
Expected Result:
Validation error (400 Bad Request).
Actual Result:


5. One Non-Functional Requirement

The Course API should respond within 2 seconds for 95% of requests under normal system load.


Task 2: Defect Lifecycle & Severity Classification


6. Defect Lifecycle

New
↓
Assigned
↓
Open
↓
Fixed
↓
Retest
↓
Verified
↓
Closed

Rejected Path:
New → Assigned → Rejected

Deferred Path:
New → Assigned → Deferred

-------------------------------------------------

Defect 1

Title:
POST /api/courses returns 500 Internal Server Error for all requests.

Environment:
Course Management API v1.0

Steps to Reproduce:
1. Open Postman.
2. Send POST request to /api/courses.
3. Enter valid course details.
4. Click Send.

Expected Result:
Course should be created successfully.

Actual Result:
500 Internal Server Error.

Severity:
Critical

Priority:
P1

Reason:
The main functionality is completely unavailable and blocks all users.

-------------------------------------------------

Defect 2

Title:
Course names longer than 150 characters are silently truncated.

Environment:
Course Management API v1.0

Steps to Reproduce:
1. Send POST request.
2. Enter a course name longer than 150 characters.
3. Save the course.

Expected Result:
Validation error should be displayed.

Actual Result:
The course name is automatically truncated.

Severity:
Medium

Priority:
P3

Reason:
The application works, but incorrect data is stored.

-------------------------------------------------
Defect 3

Title:
Login with valid credentials occasionally returns 401 Unauthorized on the first attempt.

Environment:
Course Management API v1.0

Steps to Reproduce:
1. Open the login page.
2. Enter valid username and password.
3. Click Login.

Expected Result:
Login should be successful.

Actual Result:
Sometimes the first login attempt fails with 401 Unauthorized. The second attempt succeeds.

Severity:
High

Priority:
P2

Reason:
Users experience login issues, but retrying allows access.     
--------------------------------------------------------------
