from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def test_checkbox(driver, base_url):
    driver.get(f"{base_url}/checkbox-demo")
    wait = WebDriverWait(driver, 10)

    try:
        wait.until(
            EC.element_to_be_clickable((By.ID, "CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"))
        ).click()
    except:
        pass

    checkbox = wait.until(
        EC.element_to_be_clickable((By.CSS_SELECTOR, "input[type='checkbox']"))
    )

    checkbox.click()

    assert checkbox.is_selected()