from pages.dropdown_page import DropdownPage


def test_dropdown(driver):

    page = DropdownPage(driver)

    page.open()

    page.select_day("Two")

    assert page.get_selected_day() == "Two"