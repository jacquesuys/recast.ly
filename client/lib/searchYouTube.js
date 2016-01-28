var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method:'GET',
    data: options,
    type: 'video',
    success: function(data) {
      console.log(data);
      callback(data);
    },
    error: function(data) {
      console.log(data);
    }
  })
};

window.searchYouTube = searchYouTube;
