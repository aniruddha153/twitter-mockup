$(function() {
  prepareTweetCard(tweetData);

  function prepareTweetCard(tweetData){
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var result = template(tweetData);

    $('#tweetsContainer').append(result);
  }
});

var tweetData = [
  { "id": 1,
    "username": "@kerem",
    "fullname": "Kerem Suer",
    "avatar_url": "app/images/avatar2.jpg",
    "tweet": {
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non fringilla tortor. Phasellus nec posuere felis, vel lobortis lacus. Vestibulum volutpat est eu ligula pulvinar euismod. Quisque eu ornare augue, suscipit accumsan tellus.",
      "video_url": "",
      "tweet_time": "2m",
      "retweet_count": "20",
      "favorite": "isFav"
    }
  },
  { "id": 2,
    "username": "@julieb",
    "fullname": "Julie Bennett",
    "avatar_url": "app/images/avatar3.jpg",
    "tweet": {
      "text": "Nam scelerisque a nisi id posuere. Curabitur sodales est a dictum ultrices.",
      "video_url": "http://1x848d9mftq5g9wx3epiqa1d.wpengine.netdna-cdn.com/wp-content/uploads/2016/04/fpo-pond.mp4",
      "tweet_time": "12m",
      "retweet_count": "9",
      "favorite": ""
    }
  },
  { "id": 3,
    "username": "@alicia_wood",
    "fullname": "Alicia Wood",
    "avatar_url": "app/images/avatar4.jpg",
    "tweet": {
      "isRetweet": "isRetweet",
      "text": "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.",
      "video_url": "",
      "video_url": "",
      "tweet_time": "1h",
      "retweet_count": "",
      "favorite": "isFav"
    }
  },
  { "id": 4,
    "username": "@mrwhite",
    "fullname": "Aaron White",
    "avatar_url": "app/images/avatar5.jpg",
    "tweet": {
      "text": "Donec nisi eros, volutpat nec mauris a, lacinia faucibus velit. Nam nisl lectus, auctor a quam quis, sagittis ornare nunc.",
      "video_url": "",
      "tweet_time": "5h",
      "retweet_count": "5",
      "favorite": "isFav"
    }
  },
  { "id": 5,
    "username": "@vbhat",
    "fullname": "Vedanth Bhat",
    "avatar_url": "app/images/avatar8.jpg",
    "tweet": {
      "isRetweet": "isRetweet",
      "text": "Phasellus tristique tincidunt hendrerit. Morbi eget tellus nibh. Pellentesque facilisis nisl urna, sit amet consequat nibh consequat imperdiet. Nunc placerat suscipit odio id",
      "video_url": "",
      "tweet_time": "Yesterday",
      "retweet_count": "",
      "favorite": ""
    }
  },
  { "id": 6,
    "username": "@morgan_courtney",
    "fullname": "Courtney Morgan",
    "avatar_url": "app/images/avatar10.jpg",
    "tweet": {
      "text": "Curabitur vestibulum nisl ut ipsum posuere, eu consectetur elit faucibus. Aliquam sit amet bibendum sapien. Integer consequat eros ac metus dapibus auctor.",
      "video_url": "https://artsandculture.withgoogle.com/gcs/national-parks-service/en-us/9f885369-a52a-4a0b-8b2f-f3e5e41cdd54.mp4",
      "tweet_time": "Yesterday",
      "retweet_count": "1",
      "favorite": "isFav"
    }
  }
]
