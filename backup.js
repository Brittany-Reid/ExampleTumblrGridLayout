        //UNRELATED THEME CODE
        
        //set up double clicks for mobile
        $(function () {
            $('a:has(.dclick)').doubleTapToGo();
        });
    
        //menu button
        function showMenu(obj) {
            var el = $(obj);
            el.nextAll(".menu").first().toggleClass('show');
        }
        $( window ).scroll(function() {
            $('.menu').removeClass('show');
        });
        
        //smlinks
        $('#socialm').imagesLoaded( function() {
            setTimeout(function() {
                $('#socialm').removeClass('hidden');
            }, 500);
        });
        
        //background-image
        var img = new Image();
        function imgLoaded() {
            $('#background').css("background-image", "url(" + img.src + ")");
            setTimeout(function() {
                $('#background').removeClass('hidden');
            }, 500);
            //body backgrounds scale differently in ff so to get
            //the blur vs loosing pixels we do this:
            setTimeout(function() {
                $('body').css("background-image", "url(" + img.src + ")");
                setTimeout(function() {
                $('#background').addClass('hidden');
                }, 500);
            }, 1000);
        }
        img.onload = imgLoaded;
        img.src = "http://static.tumblr.com/8115902adc08b0bc406e6889d5c95abb/g0zo3qh/Nknobwoao/tumblr_static_mto43ese34gcgc0w4gcs4sok.png";
        if (img.complete || img.readystate === 4) {
          imgLoaded();
        };
        
        //define hide loading function
        function hideLoading() {
            //hide loading
            $('.infinite-scroll-request').css({'opacity' : '0'});
            //wait
            setTimeout(function() {
                $('.infinite-scroll-request').css({'display' : 'none'});
            }, 300);
        };
        
        //show loading
        $('.infinite-scroll-request').css({'display' : 'block', 'opacity' : '1'});
        
        //GRID CODE
        
        var isGrid = 0;
        var bigFade = 1;
        
        //{block:ifGrid}
        isGrid = 1;
        bigFade = 0;
        //{/block:ifGrid}
        
        
        
        //Masonry Code
        if (isGrid == 1){
            //initialize masonry
            var $grid = $('.gridcont').masonry({
                itemSelector: '.grid',
                gutter: 10,
                
                horizontalOrder: true,
                
                
                fitWidth: true,
                transitionDuration: '0',
                //want to trigger layout on our own
                initLayout: false
            });
            
            //layout code for first page once images load
            $grid.imagesLoaded( function() {
                //reveal once layout complete
                $grid.masonry( 'once', 'layoutComplete', function() {
                    hideLoading();
                    $('.grid').removeClass('hidden');
                });
                $('.photoset').photosetGrid({
                    gutter: '5px',
                    onComplete: function(){msnry.layout();} //layout
                });
                //layout again
                $grid.masonry('layout');
            });
            
            // get Masonry instance
            var msnry = $grid.data('masonry');
            
            
            //initialize infinitescroll
            $grid.infiniteScroll({
                path: '#pagination a#nextPage',
                hideNav: '#pagination',
                history: false
                //no outlayer or append options, we'll do this manually
                //no status, again manually
            });
            
            //display load on request
            $grid.on( 'request.infiniteScroll', function( event, path ) {
                $('.infinite-scroll-request').css({'display' : 'block', 'opacity' : '1'});
            });
            
            //append and layout code for when infinite scroll loads
            $grid.on( 'load.infiniteScroll', function( event, response, path ) {
                //get items from response
                var $items = $(response).find('.grid');
                //add to page
                $grid.append($items);
                //want to keep items hidden even if hidden class removed
                $items.css({"opacity" : "0"});
                //wait for images to load
                $grid.imagesLoaded( function() {
                    //add items to masonry
                    $grid.masonry( 'addItems', $items );
                    //photoset code
                    $('.photoset').photosetGrid({
                        gutter: '5px',
                        onComplete: function(){msnry.layout();} //layout
                    });
                    //doubleclicks for new content
                    $(function () {
                        $('.posts a:has(.dclick)').doubleTapToGo();
                    });
                    //layout again
                    $grid.masonry('layout');
                    //hide loading now
                    hideLoading();
                    //show
                    $items.css({"opacity" : "1"});
                });
            });
            
            //other statuses
            $grid.on( 'last.infiniteScroll', function( event, response, path ) {
              $('.infinite-scroll-last').css({'display' : 'block', 'opacity' : '1'});
            });
            
            $grid.on( 'error.infiniteScroll', function( event, error, path ) {
              $('.infinite-scroll-error').css({'display' : 'block', 'opacity' : '1'});
    })
            
        }
        else{
            //PhotosetGrid
            $('.photoset').photosetGrid({
                gutter: '5px',
                onComplete: function(){}
            });
            
                $('#content').infiniteScroll({
                    path: '#pagination a#nextPage',
                    append: '.posts',
                    hideNav: '#pagination',
                    history: false
                });
            
        }
        //Fade in all posts at once if no masonry
        if (bigFade == 1){
            $('#content').imagesLoaded(function() {
                setTimeout(function() {
                    hideLoading();
                    $('#content').removeClass('hidden');
                    $('#relatedcontainer').removeClass('hidden');
                }, 2000);
            });
        }
