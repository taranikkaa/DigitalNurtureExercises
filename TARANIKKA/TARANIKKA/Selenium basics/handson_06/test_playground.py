from test_checkbox import test_checkbox
from test_dropdown import test_dropdown


def test_playground(driver, base_url):
    test_checkbox(driver, base_url)
    test_dropdown(driver, base_url)