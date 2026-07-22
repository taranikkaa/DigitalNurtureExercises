from pages.checkbox_page import CheckboxPage


def test_checkbox(driver):

    page = CheckboxPage(driver)

    page.open()

    page.check_option(0)

    assert page.is_option_checked(0)

    page.uncheck_option(0)

    assert not page.is_option_checked(0)