             var playerObj;

                                            $(document).ready(function () {
                                                // 2. This code loads the IFrame Player API code asynchronously.
                                                var tag = document.createElement('script');

                                                tag.src = "https://www.youtube.com/iframe_api";
                                                var firstScriptTag = document.getElementsByTagName('script')[0];
                                                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                                            });

                                            // 3. This function creates an <iframe> (and YouTube player)
                                            //    after the API code downloads.
                                            function onYouTubeIframeAPIReady() {
                                                playerObj = new YT.Player('player', {
                                                    height: '312',
                                                    width: '541',
                                                    videoId: 't1JTuQiD4G0',
                                                    playerVars: {'controls': 0, 'showinfo': 0},
                                                    events: {
                                                        'onReady': onPlayerReady,
                                                        'onStateChange': onPlayerStateChange
                                                    }
                                                });
                                            }

                                            // 4. The API will call this function when the video player is ready.
                                            function onPlayerReady(event) {
                                                //        event.target.playVideo();
                                            }

                                            // 5. The API calls this function when the player's state changes.
                                            //    The function indicates that when playing a video (state=1),
                                            //    the player should play for six seconds and then stop.
                                            var done = false;
                                            function onPlayerStateChange(event) {
//        if (event.data == YT.PlayerState.PLAYING && !done) {
//          setTimeout(stopVideo, 6000);
//          done = true;
//        }
                                            }



                                            function startVideoEvent() {
                                                thevid = document.getElementById('player');
                                                thevid.style.display = 'block';
                                                document.getElementById('playerThumb').style.display = 'none';
                                                playerObj.playVideo();
                                                $(".robot_things").animate({
                                                    right: '+=1330px',
                                                    bottom: '+=950px'

//        width:'-=50px',
//        height:'-=150px'
                                                });

                                            }
                                            function stopVideo() {
                                                playerObj.stopVideo();
                                            }