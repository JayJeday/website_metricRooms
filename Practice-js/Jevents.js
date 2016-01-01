/**
 * Created by Javy on 10/31/2015.
 */
$(function(){
    var ids = '';
    var $listItems = $('li');

    $listItems.on('mouseover click', function(){
        ids = this.id;
        $listItems.children('span').remove();
        $(this).append('<span>' + ids + '</span>');
    });

    $listItems.on('mouseout',function(){
       $listItems.children('span').remove();
    });
});

