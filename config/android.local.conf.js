module.exports = {

  "platformName": "Android",
  "appium:platformVersion": "13.0",
  "appium:deviceName": "emulator5554",
  "appium:deviceOrientation": "portrait",
  "appium:appPackage": "com.saucelabs.mydemoapp.android",
  "appium:appActivity": "com.saucelabs.mydemoapp.android.view.activities.SplashActivity",
  "appium:automationName": "UiAutomator2",
  "browserName": "",
  "appium:ensureWebviewsHavePages": "true",
  "appium:webSocketUrl": false, //configs para abordar o bidi
  "wdio:enforceWebDriverClassic": true
  
}