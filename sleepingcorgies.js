function SleepingCorgis(ratio, imageurl){
  this.ratio = ratio;
  this.imageurl = imageurl;
}

 var getSleepingCorgis = {
  init: function(mySleepingCorgis){
    this.mySleepingCorgis = mySleepingCorgis;
  },

  horizontal: function(){
    return this.mySleepingCorgis.filter(function(mySleepingCorgis){
      return mySleepingCorgis.ratio === "horizontal";
    });
  },

  vertical: function(){
    return this.mySleepingCorgis.filter(function(mySleepingCorgis){
      return mySleepingCorgis.ratio === "vertical";
    });
  },

  square: function (){
    return this.mySleepingCorgis.filter(function(mySleepingCorgis){
      return mySleepingCorgis.ratio === "square";
    });
  }
 };

 function Randomize(images){
    return Math.floor(Math.random() * images.length)
 }

var mySleepingCorgis = [
  new SleepingCorgis("horizontal", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-horiz-1.jpg"),
  new SleepingCorgis("horizontal", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-horiz-2.jpg"),
  new SleepingCorgis("horizontal", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-horiz-3.jpg"),
  new SleepingCorgis("horizontal", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-horiz-4.jpg"),
  new SleepingCorgis("horizontal", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-horiz-5.jpg"),
  new SleepingCorgis("horizontal", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-horiz-6.jpg"),
  new SleepingCorgis("horizontal", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-horiz-7.jpg"),
  new SleepingCorgis("horizontal", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-horiz-8.jpg"),
  new SleepingCorgis("horizontal", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-horiz-9.jpg"),
  new SleepingCorgis("vertical", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-vert-1.jpg"),
  new SleepingCorgis("vertical", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-vert-2.jpg"),
  new SleepingCorgis("vertical", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-vert-3.jpg"),
  new SleepingCorgis("vertical", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-vert-4.jpg"),
  new SleepingCorgis("vertical", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-vert-5.jpg"),
  new SleepingCorgis("vertical", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-vert-6.jpg"),
  new SleepingCorgis("square", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-square-1.jpg"),
  new SleepingCorgis("square", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-square-2.jpg"),
  new SleepingCorgis("square", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-square-3.jpg"),
  new SleepingCorgis("square", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-square-4.jpg"),
  new SleepingCorgis("square", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-square-5.jpg"),
  new SleepingCorgis("square", "http://bkellgren.github.io/sleepingcorgis/the_sleeping_corgies/corgie-square-6.jpg")
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

  getSleepingCorgis.init(mySleepingCorgis);
  var images = document.getElementsByTagName('img'), length = images.length

  for (var i = 0; i < length; i++) {
    var ratio = imageRatio(images[i]);
    var number = Randomize(getSleepingCorgis[ratio]());
    var img = getSleepingCorgis[ratio]()[number];
    images[i].src = img.imageurl
  }

})(document);
