/**
 * Created by Javy on 10/29/2015.
 */

  $(':header').addClass('headline');
 $('li:lt(3)').hide().fadeIn(1500);
 $('li').on('click',function()   {
       $(this).remove();
    });


$('li em').addClass('seasonal');
$('.cool').addClass('favorite');

$('li[id!="one"]').hide().delay(500).fadeIn(1400);

