import pytest
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


@pytest.mark.parametrize(
    "message",
    ["Hello", "Selenium Automation", "12345"]
)
def test_simple_form(driver, message):

    driver.get("https://www.lambdatest.com/selenium-playground/simple-form-demo")

    wait = WebDriverWait(driver, 10)

    input_box = wait.until(
        EC.presence_of_element_located((By.ID, "user-message"))
    )

    input_box.clear()
    input_box.send_keys(message)

    driver.find_element(By.ID, "showInput").click()

    assert input_box.get_attribute("value") == message