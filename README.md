# gm-fabric-nightwatch
A Fracking Friday Investigation of how to perform end-to-end testing of [Grey Matter Fabric Dashboard](https://github.com/DecipherNow/gm-fabric-dashboard) via [Mocha](https://mochajs.org/), [Nightwatch](http://nightwatchjs.org/), and [BrowserStack](https://www.browserstack.com/)

## Goal

Investigate the various Node.js end-to-end testing frameworks supported by BrowserStack, select a framework, and refactor a handful of Selenium tests from Java into JavaScript.

## How it benefits Decipher
Grey Matter Fabric Dashboard was approved for free access to BrowserStack Automate services as an open source project. Jamie wrote end-to-end test for the dashboard in Selenium, but because they are in Java, they are not maintainable by the UI/UX team. This would work form the basis for a strategy to integrate these tests into our CI/CD pipeline and later roll out to other Decipher open-source UI/UX projects

Developer: [Sean McBride](https://github.com/spmcbride1201)
Approved By: [David Tillery](https://github.com/tilleryd)

## Setup
* Clone the repo
* Install dependencies `npm install`
* Set your BrowserStack credentials to the environment variables `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY`. If you have an account, you can obtain these credentials form https://www.browserstack.com/accounts/settings

## Running your tests
- To run a single test, run `npm run single`
- To run local tests, run `npm run local`
- To run parallel tests, run `npm run parallel`

 Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)

## Notes
* You can view your test results on the [BrowserStack automate dashboard](https://www.browserstack.com/automate)
* To test on a different set of browsers, check out our [platform configurator](https://www.browserstack.com/automate/node#setting-os-and-browser)

## Connecting to BrowserStack via a proxy server
You can specify proxy settings in Nightwatch by adding the `proxy` key in your `*.conf.js` 

```javascript
  test_settings: {
    default: {
      desiredCapabilities: {
        // Your capabilities
      },
      proxy: {
        "host": "",     // "127.0.0.1"
        "port": "",     // "8081"
        "protocol": ""  // "http"
      }
    }
  }
```
  
## Additional Resources
* [Documentation for writing automate test scripts in Node](https://www.browserstack.com/automate/node)
* [Customizing your tests on BrowserStack](https://www.browserstack.com/automate/capabilities)
* [Browsers & mobile devices for selenium testing on BrowserStack](https://www.browserstack.com/list-of-browsers-and-platforms?product=automate)
* [Using REST API to access information about your tests via the command-line interface](https://www.browserstack.com/automate/rest-api)
* [Example to update the Browserstack session status based on the test results](https://github.com/blueimp/nightwatch-browserstack)
