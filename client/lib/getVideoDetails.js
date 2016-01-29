const getVideoDetails = (id, callback) => {
  const key = YOUTUBE_API_KEY;
  const URL = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${key}`

  fetch(URL).then(function(response) {
    return response.json();
  }).then(function(json) {
      callback(json);
  }).catch(function(response){
      console.log(response);
  });

};


window.getVideoDetails = getVideoDetails;
