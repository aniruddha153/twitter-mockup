$(function() {
  var requri = 'app/js/tweetData.json';
  var tweetData;
  $.getJSON(requri, function(returnData){
      tweetData = returnData;
      prepareTweetCard(tweetData);
  });

  function prepareTweetCard(tweetData){
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var result = template(tweetData);

    $('#tweetsContainer').append(result);
  }
});
