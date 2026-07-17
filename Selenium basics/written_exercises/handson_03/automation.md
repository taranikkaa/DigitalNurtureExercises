# Test Automation Process, Lifecycle & Framework Types

## Task 1: Automation Decision and Test Case Selection

### 1. Criteria for Deciding Automation

1. The test case is executed repeatedly.
2. The functionality is stable.
3. The test case is time-consuming when executed manually.
4. The test case has high regression risk.
5. The test uses multiple sets of input data.

---

### 2. Test Case Selection

| Test Case | Decision | Reason |
|-----------|----------|--------|
| Register first user of the day | Manual | Executed only occasionally |
| Verify student can view course details | Automate | Frequently executed regression test |
| Performance test with 1000 concurrent users | Automate | Large-scale repetitive execution |
| Call `/api/courses` | Automate | API testing is repeatable and stable |
| UI test for login form | Automate | Login is tested in every release |
| Verify API documentation is accurate | Manual | Requires human review |

---

### 3. ROI Calculation

Manual execution time = **30 minutes**

Regression frequency = **4 times per day**

Daily manual effort = **30 × 4 = 120 minutes (2 hours)**

If automation takes **10 minutes per day**, then

Time saved per day = **120 − 10 = 110 minutes**

Automation becomes beneficial after the initial automation effort because it saves significant testing time during every regression cycle.

---

### 4. Flaky Test

A flaky test is a test that sometimes passes and sometimes fails even though the application has not changed.

Example:
A login test occasionally fails because the page loads slowly.

Ways to prevent flaky tests:

- Use explicit waits instead of fixed delays.
- Make test data independent.
- Keep the test environment stable.

---

# Task 2: Compare Automation Framework Types

## 1. Linear Framework

Description:
Test scripts are written sequentially.

Advantages:
- Easy to create
- Suitable for beginners

Disadvantages:
- Difficult to maintain
- Code duplication

Example:
Small login application.

---

## 2. Modular Framework

Description:
Application is divided into reusable modules.

Advantages:
- Reusable scripts
- Easy maintenance

Disadvantages:
- Initial design takes time

Example:
Course Management System.

---

## 3. Data-Driven Framework

Description:
Test data is stored separately from scripts.

Advantages:
- Multiple data sets can be tested
- Less code duplication

Disadvantages:
- Slightly more complex

Example:
Login with multiple usernames and passwords.

---

## 4. Keyword-Driven Framework

Description:
Keywords represent actions like Login, Click and Logout.

Advantages:
- Easy for non-programmers
- High reusability

Disadvantages:
- Framework setup is complex

Example:
Business users preparing test cases.

---

## 5. Hybrid Framework

Description:
Combines Modular, Data-Driven and Keyword-Driven frameworks.

Advantages:
- Highly reusable
- Easy maintenance
- Flexible

Disadvantages:
- Takes more time to design

Example:
Large enterprise applications.

---

### 6. Recommended Framework

Recommended Framework: **Hybrid Framework**

Reason:

- Supports multiple users.
- Supports reusable modules.
- Supports data-driven testing.
- Easy to maintain.
- Best suited for large Course Management applications.

---

### 7. Suggested Folder Structure

```text
CourseManagementAutomation/
│
├── data/
│   ├── login.xlsx
│   └── testdata.json
│
├── pageObjects/
│   ├── LoginPage.py
│   ├── CoursePage.py
│   └── DashboardPage.py
│
├── tests/
│   ├── test_login.py
│   ├── test_courses.py
│   └── test_students.py
│
├── utilities/
│   ├── config.py
│   ├── logger.py
│   └── helpers.py
│
├── reports/
│
├── screenshots/
│
├── requirements.txt
│
└── README.md
```