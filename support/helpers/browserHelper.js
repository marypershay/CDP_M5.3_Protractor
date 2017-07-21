'use strict';

class BrowserHelper {

    pageLoad(page) {
        return browser.get(page);
    }

    waitForUrlContains(text, timeOut) {
        const timeoutMs = timeOut || browser.params.defaultTimeOut;
        return browser.wait(protractor.ExpectedConditions.urlContains(text), timeoutMs,
            `Waiting for URL contains ${text} failed`);
    }

    navigateBack() {
        return browser.navigate().back();
    }

    getCountTab() {
        return browser.getAllWindowHandles().then((windowsId) => {
            return windowsId.length;
        }, (err) => {
            const errMess = `Error trying to getAllWindowHandles(): ${err.toString()}. Stacktrace: ${err.stack.toString()}`;
            throw errMess;
        });
    }

    switchToTab(number) {
        return browser.getAllWindowHandles().then((windowsId) => {
            return windowsId[number];
        }).then((tabId) => {
            return browser.switchTo().window(tabId);
        });
    }
}
module.exports = BrowserHelper;