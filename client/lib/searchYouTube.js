var searchYouTube = (options, callback) => {
  var extendedOptions = _.extend(options,
                        {type:'video',
                        part: 'snippet',
                        videoEmbeddable: true});
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method:'GET',
    data: extendedOptions,
    success: function(data) {
      callback(data);
    },
    error: function(data) {
      console.log(data);
    }
  });
};

window.searchYouTube = searchYouTube;
