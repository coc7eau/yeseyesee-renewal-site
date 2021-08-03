$(function(){

    const $mainmnu = $('header>.bar>.gnb');
    const $pagination = $('header>.bar>.pagination');
    const $close =$('header>.bar>.gnb>.close');

    const $hashtag =$('.cont-3>.hashItems>ul>li:nth-child(1),.cont-3>.hashItems>ul>li:nth-child(2)')
    const $nothash = $('.cont-3>.hashItems>ul>li:nth-child(3),.cont-3>.hashItems>ul>li:nth-child(4),.cont-3>.hashItems>ul>li:nth-child(5),.cont-3>.hash,.cont-3>.tag')
    const $insta =$('.cont-3>.hashItems>ul>li:nth-child(6)')

   
    $pagination.on('click', function () {
        $mainmnu.fadeIn(700, function () {
        
        });
    });
$close.on('click', function(){
        $mainmnu.fadeOut(700,function(){

        });
    });

   $hashtag.on('click', function(evt){
        evt.preventDefault();
    });

    $hashtag.on('click', function () {
        $insta.fadeIn(700, function () {
        
        });
    });
    $hashtag.on('mouseleave', function () {
        $insta.fadeOut(700, function () {
        
        });
    });

    $hashtag.on('click', function(){
        $nothash.css({
            filter: 'saturate(0%)' 
            ,animation: 'stop'
        })
    });



  });