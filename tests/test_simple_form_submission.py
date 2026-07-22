import pytest
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from pages.simple_form_page import SimpleFormPage


@pytest.mark.parametrize("message", [
    "Hello",
    "Selenium Automation",
    "12345"
])
def test_simple_form_submission(driver, message):

    page = SimpleFormPage(driver)

    page.open()
    page.enter_message(message)
    page.submit()

    WebDriverWait(driver, 10).until(
        EC.url_contains("submitted-form.html")
    )

    assert "submitted-form.html" in driver.current_url