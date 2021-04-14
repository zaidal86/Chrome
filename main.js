const puppeteer = require('puppeteer');
const { password, pseudo } = require('./config.json');

(async () => {
  const browser = await puppeteer.launch({ userDataDir: ('./user_data'), headless: false })
  const page = await browser.newPage()

  await page.goto('https://www.twitch.tv/so_mtl')

  await page.setViewport({ width: 1920, height: 969 })
  await page.waitForTimeout(5000)

  try {
    await page.click('.tw-align-items-center > .ScCoreButton-sc-1qn4ixc-0 > .ScCoreButtonLabel-lh1yxp-0 > .tw-align-items-center > .tw-pd-x-1')
    await page.waitForTimeout(1000)
  } catch (e) { console.log("pas grave") }
  try {
    await page.click('.anon-user > .tw-pd-x-05:nth-child(1) > .ScCoreButton-sc-1qn4ixc-0 > .ScCoreButtonLabel-lh1yxp-0 > .tw-align-items-center')
    await page.waitForTimeout(1000)
    try {
    } catch (e) { console.log("pas grave") }
    const user = await page.waitForSelector('.tw-c-background-base #login-username')
    await user.type(pseudo)
    await page.waitForTimeout(1000)
  } catch (e) { console.log("pas grave") }
  try {
    const pass = await page.waitForSelector('.login-password-input #password-input')
    await pass.type(password)
    await page.waitForTimeout(1000)
  } catch (e) { console.log("pas grave") }
  try {
    await page.click('.tw-c-background-base > .tw-mg-t-2 > .ScCoreButton-sc-1qn4ixc-0 > .ScCoreButtonLabel-lh1yxp-0 > .tw-align-items-center')
    await page.waitForTimeout(30000)
  } catch (e) { console.log("pas grave") }
  try {
    await page.click('.ScInteractive-sc-18v7095-0 > .tw-align-left > .ScTextWrapper-sc-18v7095-1 > .tw-align-items-center > .tw-font-size-4')
  } catch (e) { console.log("pas grave") }

  await page.waitForTimeout(5000)
  await page.screenshot({ path: 'example.png' });
  await page.waitForTimeout(1000)
  await page.close()
})()