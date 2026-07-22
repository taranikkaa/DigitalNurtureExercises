from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from pages.base_page import BasePage

class SimpleFormPage(BasePage):

    URL = "https://www.selenium.dev/selenium/web/web-form.html"

    TEXT_INPUT = (By.NAME, "my-text")
    SUBMIT_BUTTON = (By.CSS_SELECTOR, "button")

    def open(self):
        self.driver.get(self.URL)
        WebDriverWait(self.driver, 10).until(
            EC.visibility_of_element_located(self.TEXT_INPUT)
        )

    def enter_message(self, message):
        self.type(*self.TEXT_INPUT, message)

    def submit(self):
        WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable(self.SUBMIT_BUTTON)
        ).click()