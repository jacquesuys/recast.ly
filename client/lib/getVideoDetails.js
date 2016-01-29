const getVideoDetails = (id, callback) => {
  const options = {part: 'statistics',
                         id: id,
                         key: YOUTUBE_API_KEY};
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/videos',
    method:'GET',
    data: options,
    success: function(data) {
      callback(data);
      console.log(data);
    },
    error: function(data) {
      console.log(data);
    }
  });
};

window.getVideoDetails = getVideoDetails;
