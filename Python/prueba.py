import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By


class Browser:
    browser, service = None, None

    # Initialise the webdriver with the path to chromedriver.exe
    def __init__(self, driver: str):
        self.service = Service(driver)
        self.browser = webdriver.Chrome(service=self.service)

    def open_page(self, url: str):
        self.browser.get(url)

    def close_browser(self):
        self.browser.close()

    def add_input(self, by: By, value: str, text: str):
        field = self.browser.find_element(by=by, value=value)
        field.send_keys(text)
        time.sleep(1)

    def click_button(self, by: By, value: str):
        button = self.browser.find_element(by=by, value=value)
        button.click()
        time.sleep(1)

    def login_linkedin(self, username: str, password: str):
        self.add_input(by=By.ID, value='email', text=username)
        self.add_input(by=By.ID, value='pass', text=password)
        self.click_button(by=By.ID, value='u_0_5_xy')

    def whatsapp(self):

        self.click_button(by=By.ID, value='action-button')
        time.sleep(2)
        self.click_button(by=By.CLASS_NAME, value='_9vd5')


if __name__ == '__main__':
    browser = Browser('C:\Repos\Selenium\chromedriver_win32\chromedriver.exe')

    browser.open_page('https://es-la.facebook.com/')
    time.sleep(13)

    browser.login_linkedin(username='USERNAME', password='PASSWORD')
    time.sleep(12)

    browser.close_browser()

    browser2 = Browser('C:\Repos\Selenium\chromedriver_win32\chromedriver.exe')

    browser2.open_page('https://api.whatsapp.com/send?phone=542214768198&tet=Estamos+en+la+cursada+Ingenieria')
    time.sleep(3)
    browser2.whatsapp()
    time.sleep(5)
    browser2.close_browser()
