// import React, { useEffect } from 'react'

// function News() {
//   const [newsPosts,setNews]=useState([])
//   useEffect(() => {
//     var url =
//       "https://newsapi.org/v2/everything?" +
//       "q=Apple&" +
//       "from=2021-07-15&" +
//       "sortBy=popularity&" +
//       "apiKey=b76b397e259d45a9b10df1c14c70c013";

//     var req = new Request(url);

//     fetch(req).then(function (response) {
//       console.log(response.json());
//     });
//   },[])
//  return (
   
//      <div className="container">
      
//          <div className="col-12">
//            <div className="title-wraper bold video-title-wrapper">
//              Latest News
//            </div>
//          </div>
//          {newsPosts.map((singleVideo, keyid) => {
//            let vidId = singleVideo.id.videoId;
//            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
//            let videoWrapper = (
//              <div key={keyid} className="col-sm-12 col-md-4">
//                <div className="singleVideoWrapper">
//                  <div className="videoThumbnail">
//                    <a href={vidLink} target="_blank">
//                      <img src={singleVideo.snippet.thumbnails.high.url} />
//                    </a>
//                  </div>
//                  <div className="videoInfoWrapper">
//                    <div className="videoTitle">
//                      <a href={vidLink} target="_blank">
//                        {singleVideo.snippet.title}
//                      </a>
//                    </div>
//                    <div className="videoDesc">
//                      {singleVideo.snippet.description}
//                    </div>
//                  </div>
//                </div>
//              </div>
//            );
//            return videoWrapper;
//          })}

//          {this.videoWrapper}
//        </div>
     
   
//  );
// }
// export default News;