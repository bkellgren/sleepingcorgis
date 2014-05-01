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
new SleepingCorgies("horizontal", "http://heygirl.io/img/gosling-horiz-1.png"),
new SleepingCorgies("horizontal", "http://heygirl.io/img/gosling-horiz-2.gif"),
new SleepingCorgies("horizontal", "http://heygirl.io/img/gosling-horiz-3.jpg"),
new SleepingCorgies("horizontal", "http://heygirl.io/img/gosling-horiz-4.gif"),
new SleepingCorgies("vertical", "http://heygirl.io/img/gosling-vert-1.jpg"),
new SleepingCorgies("vertical", "http://heygirl.io/img/gosling-vert-3.jpg"),
new SleepingCorgies("vertical", "http://heygirl.io/img/gosling-vert-4.jpg"),
new SleepingCorgies("vertical", "http://heygirl.io/img/gosling-vert-5.gif"),
new SleepingCorgies("vertical", "http://heygirl.io/img/gosling-vert-6.jpg"),
new SleepingCorgies("vertical", "http://heygirl.io/img/gosling-vert-7.jpg"),
new SleepingCorgies("vertical", "http://heygirl.io/img/gosling-vert-8.jpg"),
new SleepingCorgies("vertical", "http://heygirl.io/img/gosling-vert-9.jpg"),
new SleepingCorgies("square", "http://heygirl.io/img/gosling-square-1.jpg"),
new SleepingCorgies("square", "http://heygirl.io/img/gosling-square-2.jpg"),
new SleepingCorgies("square", "http://heygirl.io/img/gosling-square-3.jpg")
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
