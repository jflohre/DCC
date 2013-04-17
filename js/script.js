APP = {
  $borders: $('#past .border'),
  large: false,
  resizeMeetings: function(){

    if(APP.large === true){
      var maxHeight = -1;
      APP.$borders.each(function() {
        maxHeight = maxHeight > $(this).outerHeight() ? maxHeight : $(this).outerHeight();
      });
      APP.$borders.each(function() {
        $(this).height(maxHeight);
      });
    } else {
      APP.$borders.removeAttr("style");
    }
  },
  init: function(){
    // For numbers being converted to telephone operator in Opera
    $('a[href ^="tel:"]').removeAttr('href');
    // start jqtweet!
    getTweets();
  }

};

// Chirp.js on github
function getTweets(){
  var c = new Chirp({
    target: 'tweets',
    user:'DaytonCleanCode',
    max:4,
    templates: {
        base: '<ul class="chirp">{{tweets}}</ul>',
        tweet: '<li><p><a href="http://twitter.com/{{user.screen_name}}" title="{{user.name}} — {{user.description}}"><img src="{{user.profile_image_url}}"></a> {{html}}</p><span class="meta"><time><a href="http://twitter.com/{{user.screen_name}}/statuses/{{id_str}}">{{time_ago}}</a></time> &mdash; via <a href="http://twitter.com/{{user.screen_name}}" title="{{user.name}} — {{user.description}}">{{user.name}}</a></span></li>'
      }
  });
  c.show();
}


$(document).ready(APP.init);
// For media queries
$(window).load(function() {
  // for the pastMeetings
  mediaCheck({

    media: '(max-width: 57em)',
    entry: function() {
      APP.large = false;
      APP.resizeMeetings();
    },
    exit: function() {
      APP.large = true;
      APP.resizeMeetings();
    }
  });
});

