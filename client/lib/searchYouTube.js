const searchYouTube = (q, callback) => {
  const key = YOUTUBE_API_KEY;
  const URL = `https://www.googleapis.com/youtube/v3/search?q=${q}&part=snippet&type=video&key=${key}`

  fetch(URL).then(function(response) {
    return response.json();
  }).then(function(json) {
      callback(json);
  }).catch(function(response){
      console.log(response);
  });

};


window.searchYouTube = searchYouTube;
