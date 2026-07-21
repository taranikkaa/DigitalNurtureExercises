from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def test_simple_form_submission(driver, base_url):
    driver.get(f"{base_url}/simple-form-demo")

    wait = WebDriverWait(driver, 10)

    input_box = wait.until(
        EC.presence_of_element_located((By.ID, "user-message"))
    )

    input_box.clear()
    input_box.send_keys("Hello Selenium")

    driver.find_element(By.ID, "showInput").click()

    # Verify the entered text
    assert input_box.get_attribute("value") == "Hello Selenium"