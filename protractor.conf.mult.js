'use strict';

const config = {
    params: {
        defaultTimeOut: 5000
    },
    getPageTimeout: 10000,
    allScriptsTimeout: 19000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine2',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 40000,
        showTiming: true
    },
    multiCapabilities: [
        {
            name: 'maximizedScreen',
            browserName: 'chrome',
            maxInstances: 4,
            shardTestFiles: true,
            chromeOptions: {
                args: ['--start-maximized', '--disable-infobars']
            }
        },
        {
            name: 'tablet',
            browserName: 'chrome',
            maxInstances: 4,
            shardTestFiles: true,
            chromeOptions: {
                args: ['window-size=' + process.env.VIEW, '--disable-infobars']
            }
        }
    ],

    specs: [
        'test/e2e/scenarios/*.e2e.js'
    ],

    seleniumServerJar: 'node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar'
};

exports.config = config;
