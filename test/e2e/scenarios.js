(function(){
  "use strict";

  describe('speedometerApp', function(){

    it("should redirect index.html to index.html#/speedometer", function(){
      browser.get('index.html');
      browser.getLocationAbsUrl().then(function(url){
        expect(url).toEqual('/speedometer');
      });
    });

    describe('Interval Setter', function(){

      beforeEach(function(){
        browser.get('index.html');
      });

      it("should already be set at 5 seconds on page load", function(){
        var intervalNumbers = element.all(by.css('.interval-number')).getText().then(function(text){
          expect(text.join("")).toEqual('05');
        });
      });

    });

  });

}());
