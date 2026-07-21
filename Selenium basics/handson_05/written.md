### Task 35: Rank the locator strategies
Rank	Locator Strategy	Reason
1	ID	It is unique and the fastest way to locate an element.
2	CSS Selector	It is fast and easy to write.
3	XPath	It is flexible and can locate almost any element.
4	Name	It works well if the element has a unique name attribute.
5	Class Name	It may not be unique because many elements can have the same class.
6	Tag Name	It usually finds multiple elements, so it is less accurate.
### Task 37: Compare time.sleep() and WebDriverWait
time.sleep()
It waits for a fixed amount of time.
It waits even if the element is already available.
It can make the test slower.
WebDriverWait
It waits only until the required condition is met.
It makes the test faster and more reliable.
It is the recommended way to wait in Selenium.
### Task 38: Difference between visibility_of_element_located() and element_to_be_clickable()
visibility_of_element_located()
Waits until the element is visible on the page.
The element can be seen, but it may not be clickable.
element_to_be_clickable()
Waits until the element is visible and enabled.
After this condition is met, the element can be clicked safely.
### Task 39: Fluent Wait

Code:

from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException

wait = WebDriverWait(
    driver,
    timeout=10,
    poll_frequency=0.5,
    ignored_exceptions=[NoSuchElementException]
)

wait.until(
    EC.visibility_of_element_located((By.CSS_SELECTOR, ".alert-success"))