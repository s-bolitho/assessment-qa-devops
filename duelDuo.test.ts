
import { Builder, Capabilities, By } from "selenium-webdriver"
import { titleContains } from "selenium-webdriver/lib/until"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking draw button draws choices', async () => {
    let clickDrawbtn = await driver.findElement(By.id('choices'))
    let draw = await clickDrawbtn.isDisplayed()
    expect(draw).toBe(true)
    await driver.sleep(2000)
})

test('Clicking add to duo button moves bot to duo', async () => {
    let clickAddbtn = await driver.findElement(By.id('play-duo'))
    let add = await clickAddbtn.isDisplayed()
    expect(add).toBe(true)
    await driver.sleep(2000)
})