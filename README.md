# Speedometer [![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](http://gruntjs.com/)

* [User Stories](#user-stories)
* [My Approach](#my-approach)
* [App Usage and Features](#app-usage-and-features)
* [Download Instructions](#download-instructions)

## User Stories

```
As a User
So that I can immediately get a random number between 1-100
I want to see a random number between 1-100 each time I refresh the page

As a User
So that I can get a random number between 1-100 at set intervals
I want to set a timed interval to generate a new random number

As a User
So that I know how many seconds are left before a new random number is generated
I want to see a countdown telling me the number of seconds remaining
```

## My Approach

As required, I had created a Node/Express [server](https://github.com/hsheikhm/speedometer/blob/master/server.js) in order to serve as the back end for the app. This was straightforward as there were no API routes to create, nor was there a database to create.

Once the server and directory structure was setup I moved onto the front-end. I naturally chose **AngularJS** because of many reasons. Firstly it's one of the best frameworks to use for building a **single-page**, **responsive** app that doesn't rely on heavy data. Secondly, by using AngularJS, this helps to achieve a true separation of concerns through the use of [controllers](https://github.com/hsheikhm/speedometer/blob/master/public/src/js/controllers/mainCtrl.js), [factories](https://github.com/hsheikhm/speedometer/tree/master/public/src/js/factories) and [views](https://github.com/hsheikhm/speedometer/blob/master/public/src/views/main-page.html) etc.

After I had completed all the JavaScript logic and had a **MVP**, I then built the UI. I usually use **Bootstrap** in this case however, since there weren't many HTML components involved, I decided to use another framework, **Materialize**, which is a nice little framework for styling small apps. I also used **Sass** as a CSS extension because it's a really useful tool for [organizing stylesheets](https://github.com/hsheikhm/speedometer/tree/master/public/src/css/sass), thanks to features such as importing, variables, and mixins. Its syntax is also really easy to comprehend. In order to enhance the UI and make it run smoothly I also added in some [animations](https://github.com/hsheikhm/speedometer/blob/master/public/src/css/sass/_animations.sass) thanks to Angular's **ngAnimate** module.  
Lastly, I had used **Grunt** in order to [build the app](https://github.com/hsheikhm/speedometer/blob/master/gruntfile.js) in terms of file minification, JSHint checking, and Sass compiling.

The app is also fully **tested** in terms of [feature-testing](https://github.com/hsheikhm/speedometer/blob/master/test/e2e/scenarios.js) and [unit-testing](https://github.com/hsheikhm/speedometer/tree/master/test/unit).

#### What would I do differently?















installation instructions:

ruby and sass must be installed.

install sass via:

'gem install sass'
