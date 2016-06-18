(function(){
  "use strict";

  describe('speedometerApp', function(){

    beforeEach(function(){
      browser.get('index.html');
      browser.driver.manage().window().maximize();
    });

    it("should redirect index.html to index.html#/speedometer", function(){
      browser.getLocationAbsUrl().then(function(url){
        expect(url).toEqual('/speedometer');
      });
    });

    it("clicking on the page refresh button will generate a new random number", function(){
      var randomNumberOne = element(by.css('.main-page__number-display__text')).getText();
      element(by.css('.refresh-page-button')).click();
      var randomNumberTwo = element(by.css('.main-page__number-display__text')).getText();
      expect(randomNumberOne === randomNumberTwo).toBe(false);
    });

    describe('Interval Setter', function(){

      var getIntervalNumbers = function(){
        return element.all(by.css('.interval-number')).getText().then(function(text){
          return text.join("");
        });
      };

      it("should already be set at 5 seconds on page load", function(){
        expect(getIntervalNumbers()).toEqual('05');
      });

      it("clicking on the increase button should increase the interval by one second", function(){
        element(by.css('.increase-button')).click();
        expect(getIntervalNumbers()).toEqual('06');
      });

      it("clicking on the decrease button should decrease the interval by one second", function(){
        element(by.css('.decrease-button')).click();
        expect(getIntervalNumbers()).toEqual('04');
      });

      it("user should not be able to go below 1 second when setting the interval", function(){
        for(var i=0; i<7; i++){
          element(by.css('.decrease-button')).click();
        }
        expect(getIntervalNumbers()).toEqual('01');
      });

      it("the increase and decrease buttons should dissapear once the interval starts", function(){
        expect(element(by.css('.middle-section__arrow-buttons')).isDisplayed()).toBe(true);
        element(by.css('.start-timer-button')).click();
        expect(element(by.css('.middle-section__arrow-buttons')).isDisplayed()).toBe(false);
      });

      it("clicking on the stop button should bring the increase and decrease buttons back into view", function(){
        element(by.css('.start-timer-button')).click();
        expect(element(by.css('.middle-section__arrow-buttons')).isDisplayed()).toBe(false);
        element(by.css('.stop-timer-button')).click();
        expect(element(by.css('.middle-section__arrow-buttons')).isDisplayed()).toBe(true);
      });

      it("a new random number should be generated after each complete interval", function(){
        var randomNumberOne = element(by.css('.main-page__number-display__text')).getText();
        element(by.css('.start-timer-button')).click();
        browser.sleep(7000);
        element(by.css('.stop-timer-button')).click();
        var randomNumberTwo = element(by.css('.main-page__number-display__text')).getText();
        expect(randomNumberOne === randomNumberTwo).toBe(false);
      });

      it("a different background color for the main number should be displayed after each complete interval", function(){
        var backgroundColorOne = element(by.css('.main-page__number-display__text')).getCssValue('background-color');
        element(by.css('.start-timer-button')).click();
        browser.sleep(7000);
        element(by.css('.stop-timer-button')).click();
        var backgroundColorTwo = element(by.css('.main-page__number-display__text')).getCssValue('background-color');
        expect(backgroundColorOne === backgroundColorTwo).toBe(false);
      });

    });

    describe('Countdown Clock', function(){

      it("should not be visible on page load", function(){
        expect(element(by.css('.main-page__countdown')).isDisplayed()).toBe(false);
      });

      it("should be visible when the interval starts", function(){
        element(by.css('.start-timer-button')).click();
        expect(element(by.css('.main-page__countdown')).isDisplayed()).toBe(true);
      });

      it("should not be visible when the interval stops", function(){
        element(by.css('.start-timer-button')).click();
        expect(element(by.css('.main-page__countdown')).isDisplayed()).toBe(true);
        element(by.css('.stop-timer-button')).click();
        expect(element(by.css('.main-page__countdown')).isDisplayed()).toBe(false);
      });

    });

  });

}());
