/**
 * Created by Javy on 10/31/2015.
 */
$(function(){
/**
    $('h2').hide().slideDown();
    var $li = $('li');
    $li.hide().each(function(index){
       $(this).delay(700 * index).fadeIn(700);
    });

    $li.on('click',function(){
        $(this).fadeOut(700);
    });

*/
//************************** custom animation **************************
    $('li').on('click',function(){
       $(this).animate({
        //properties to change
           opacity: 0.0,
           paddingLeft: '+=80'
       }, 500, function(){
           $(this).remove();
       });
    });


//traversing navigating thu node

    var $h2 = $('h2');
    $h2.append('<a>' + 'show me' + '</a>');
    //hide ul
    $('ul').hide();
    $h2.on('click',function(){
       $h2.next().fadeIn(500).children('.cool').addClass('complete');
        //hide button
        $h2.find('a').fadeOut();

    });
    /**
     * $('li:lt(2)').removeClass('hot');
     $('li').eq(0).addClass('complete');
     $('li:gt(2)').addClass('cool');
     */

});