function SleepingCorgies(ratio, imageurl){
  this.ratio = ratio;
  this.imageurl = imageurl;
}

 var getSleepingCorgies = {
  init: function(mySleepingCorgies){
    this.mySleepingCorgies = mySleepingCorgies;
  },

  horizontal: function(){
    return this.mySleepingCorgies.filter(function(mySleepingCorgies){
      return mySleepingCorgies.ratio === "horizontal";
    });
  },

  vertical: function(){
    return this.mySleepingCorgies.filter(function(mySleepingCorgies){
      return mySleepingCorgies.ratio === "vertical";
    });
  },

  square: function (){
    return this.mySleepingCorgies.filter(function(mySleepingCorgies){
      return mySleepingCorgies.ratio === "square";
    });
  }
 };

 function Randomize(images){
    return Math.floor(Math.random() * images.length)
 }

var mySleepingCorgies = [
  new SleepingCorgies("horizontal", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-horiz-1.jpg"),
  new SleepingCorgies("horizontal", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-horiz-2.jpg"),
  new SleepingCorgies("horizontal", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-horiz-3.jpg"),
  new SleepingCorgies("horizontal", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-horiz-4.jpg"),
  new SleepingCorgies("horizontal", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-horiz-5.jpg"),
  new SleepingCorgies("horizontal", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-horiz-6.jpg"),
  new SleepingCorgies("horizontal", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-horiz-7.jpg"),
  new SleepingCorgies("horizontal", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-horiz-8.jpg"),
  new SleepingCorgies("horizontal", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-horiz-9.jpg"),
  new SleepingCorgies("vertical", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-vert-1.jpg"),
  new SleepingCorgies("vertical", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-vert-2.jpg"),
  new SleepingCorgies("vertical", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-vert-3.jpg"),
  new SleepingCorgies("vertical", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-vert-4.jpg"),
  new SleepingCorgies("vertical", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-vert-5.jpg"),
  new SleepingCorgies("vertical", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-vert-6.jpg"),
  new SleepingCorgies("vertical", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-vert-8.jpg"),
  new SleepingCorgies("square", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-square-1.jpg"),
  new SleepingCorgies("square", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-square-2.jpg"),
  new SleepingCorgies("square", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-square-3.jpg"),
  new SleepingCorgies("square", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-square-4.jpg"),
  new SleepingCorgies("square", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-square-5.jpg"),
  new SleepingCorgies("square", "http://bkellgren.github.io/sleepingcorgies/the_sleeping_corgies/corgie-square-6.jpg")
]

function imageRatio(image) {
  var proportion = image.height/image.width;

  if(proportion > 1) {
    return "vertical";
  } else if(proportion === 1) {
    return "square";
  } else if(proportion < 1) {
    return "horizontal";
  }
}

(function (document) {

  getSleepingCorgies.init(mySleepingCorgies);
  var images = document.getElementsByTagName('img'), length = images.length

  for (var i = 0; i < length; i++) {
    var ratio = imageRatio(images[i]);
    var number = Randomize(getSleepingCorgies[ratio]());
    var img = getSleepingCorgies[ratio]()[number];
    images[i].src = img.imageurl
  }

})(document);
