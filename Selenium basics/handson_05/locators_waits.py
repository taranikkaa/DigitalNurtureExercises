from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Launch Chrome
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.maximize_window()

# ----------------------------
# TASK 1 - Locator Strategies
# ----------------------------

driver.get("https://testmuai.com/selenium-playground/simple-form-demo/")
time.sleep(2)

# By ID
driver.find_element(By.ID, "user-message").send_keys("Hello by ID")
time.sleep(1)
driver.find_element(By.ID, "user-message").clear()

# By Class Name
driver.find_element(By.CLASS_NAME, "rounded").send_keys("Hello by Class")
time.sleep(1)
driver.find_element(By.CLASS_NAME, "rounded").clear()

# By Tag Name
driver.find_element(By.TAG_NAME, "input").send_keys("Hello by Tag")
time.sleep(1)
driver.find_element(By.TAG_NAME, "input").clear()

# By XPath
driver.find_element(By.XPATH, "//input[@id='user-message']").send_keys("Hello by XPath")
time.sleep(1)
driver.find_element(By.XPATH, "//input[@id='user-message']").clear()

# By CSS Selector
driver.find_element(By.CSS_SELECTOR, "#user-message").send_keys("Hello by CSS")
time.sleep(2)

# Click Show Message
driver.find_element(By.ID, "showInput").click()

time.sleep(3)

# ----------------------------
# TASK 2 - WebDriverWait
# ----------------------------

driver.get("https://testmuai.com/selenium-playground/bootstrap-alerts/")
time.sleep(2)

# Click Success Message button
driver.find_element(By.XPATH, "//button[contains(text(),'Success')]").click()

# Wait until alert appears
wait = WebDriverWait(driver, 10)

alert = wait.until(
    EC.visibility_of_element_located((By.CSS_SELECTOR, ".alert-success"))
)

print("Alert Text:")
print(alert.text)

# Verify alert text
assert len(alert.text) > 0

print("Task Completed Successfully")

time.sleep(5)

driver.quit()