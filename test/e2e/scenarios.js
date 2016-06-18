(function(){
  "use strict";

  describe('speedometerApp', function(){

    it("should redirect index.html to index.html#/speedometer", function(){
      browser.get('index.html');
      browser.getLocationAbsUrl().then(function(url){
        expect(url).toEqual('/speedometer');
      });
    });

  });

}());
