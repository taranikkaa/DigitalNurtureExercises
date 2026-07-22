from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from pages.base_page import BasePage


class DropdownPage(BasePage):

    URL = "https://www.selenium.dev/selenium/web/web-form.html"

    DROPDOWN = (By.NAME, "my-select")

    def open(self):
        self.driver.get(self.URL)

    def select_day(self, day_name):
        dropdown = Select(self.find(*self.DROPDOWN))
        dropdown.select_by_visible_text(day_name)

    def get_selected_day(self):
        dropdown = Select(self.find(*self.DROPDOWN))
        return dropdown.first_selected_option.text 