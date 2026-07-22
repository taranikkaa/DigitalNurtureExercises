from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select


def test_dropdown(driver, base_url):
    driver.get(f"{base_url}/select-dropdown-demo")

    dropdown = Select(driver.find_element(By.ID, "select-demo"))

    dropdown.select_by_visible_text("Wednesday")

    selected = dropdown.first_selected_option.text

    assert selected == "Wednesday"