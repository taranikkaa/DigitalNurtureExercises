"""
Hands-On 4 – Selenium WebDriver Setup, Browser Drivers & Basic Commands

Selenium Components

1. WebDriver
   - WebDriver is the main Selenium API.
   - It communicates with browser drivers like ChromeDriver to automate browsers.

2. Selenium Grid
   - Used for running tests on multiple browsers and machines in parallel.

3. Selenium IDE
   - Browser extension used for record-and-playback automation and generating test scripts.
"""

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Chrome Options (Headless Mode)
options = webdriver.ChromeOptions()
options.add_argument("--headless=new")

# Launch Browser
driver = webdriver.Chrome(
    service=Service(ChromeDriverManager().install()),
    options=options
)

# Implicit Wait
# Implicit wait applies globally.
# Explicit waits are preferred because they wait only when needed,
# making tests faster and more reliable.
driver.implicitly_wait(10)

try:
    # -----------------------------
    # Task 25
    # -----------------------------
    driver.get("https://www.lambdatest.com/selenium-playground/")
    print("Page Title:", driver.title)

    # -----------------------------
    # Task 28
    # -----------------------------
    driver.find_element(By.LINK_TEXT, "Simple Form Demo").click()

    assert "simple-form-demo" in driver.current_url
    print("URL Assertion Passed")

    driver.back()

    # -----------------------------
    # Task 29
    # -----------------------------
    driver.execute_script("window.open('https://www.google.com');")

    print("Window Handles:", driver.window_handles)

    driver.switch_to.window(driver.window_handles[1])

    print("Google Title:", driver.title)

    # -----------------------------
    # Task 30
    # -----------------------------
    driver.switch_to.window(driver.window_handles[0])

    driver.save_screenshot("playground_screenshot.png")

    print("Screenshot Saved")

    # -----------------------------
    # Task 31
    # -----------------------------
    print("Current Window Size:", driver.get_window_size())

    driver.set_window_size(1280, 800)

    print("Updated Window Size:", driver.get_window_size())

    # Consistent window size helps ensure responsive UI tests
    # behave the same across different machines.

finally:
    driver.quit()