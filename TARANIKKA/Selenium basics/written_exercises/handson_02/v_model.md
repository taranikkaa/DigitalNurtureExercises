SDLC vs TDLC – V-Model & Agile QA Integration

Task 1: V-Model Mapping

1. V-Model Mapping

                SDLC                           TDLC

Requirements  ----------------------->  Acceptance Testing

System Design ----------------------->  System Testing

Architecture Design ---------------->  Integration Testing

Module Design ----------------------->  Unit Testing

Coding

-------------------------------------------------

2. Test Artifacts Produced

Requirements Phase
Test Artifact:
Acceptance Test Cases

System Design Phase
Test Artifact:
System Test Cases

Architecture Design Phase
Test Artifact:
Integration Test Cases

Module Design Phase
Test Artifact:
Unit Test Cases

Coding Phase
Test Artifact:
Source Code and Unit Test Results

-------------------------------------------------

3. Entry and Exit Criteria

Unit Testing

Entry Criteria
- Module development is completed.
- Unit test cases are prepared.

Exit Criteria
- All unit test cases are executed.
- No critical defects remain.

Integration Testing

Entry Criteria
- Individual modules have passed unit testing.
- Integration test cases are ready.

Exit Criteria
- Modules communicate correctly.
- No major integration defects remain.

System Testing

Entry Criteria
- Complete application is deployed.
- System test cases are prepared.

Exit Criteria
- Functional and non-functional tests are completed.
- Critical defects are fixed.

Acceptance Testing

Entry Criteria
- System testing is completed.
- Client receives the application.

Exit Criteria
- Client approves the application.
- Software is ready for release.

-------------------------------------------------

4. Two Places Where QA Should Engage Early

1. During Requirement Analysis
   QA reviews requirements to identify missing or unclear requirements before development starts.

2. During System Design
   QA reviews the design documents and prepares test cases early to find defects before coding.
-------------------------------------------------
Task 2: Agile QA and Shift-Left Testing


5. Problems in Traditional Waterfall Testing

1. Defects are found very late.
2. Fixing defects becomes more expensive.
3. Testing delays the project release.

-------------------------------------------------

6. QA Activities in Agile Ceremonies

Sprint Planning
- Understand user stories.
- Define acceptance criteria.
- Estimate testing effort.

Daily Stand-up
- Share testing progress.
- Discuss blockers.
- Coordinate with developers.

Sprint Review
- Demonstrate completed features.
- Verify acceptance criteria.
- Collect stakeholder feedback.

Sprint Retrospective
- Discuss what went well.
- Identify problems.
- Suggest improvements for the next sprint.

-------------------------------------------------

7. Shift-Left Practices

Requirement Review
QA reviews requirements before development starts to remove ambiguities.

Writing Test Cases Before Coding (TDD/BDD)
QA prepares test cases before developers begin coding.

Static Code Analysis
Developers use static analysis tools to detect coding issues early.

API Contract Testing
QA verifies API contracts before integrating different modules.

-------------------------------------------------

8. Acceptance Criteria (Given-When-Then)

Scenario: Create a New Course

Given
I am logged in as a College Admin.
  
When
I enter a valid course name and click the Create button.

Then
The course should be created successfully.

And
A success message should be displayed.

And
No duplicate course should be created if the same course already exists.