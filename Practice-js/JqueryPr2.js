/**
 * Created by Javy on 10/31/2015.
 */
//ready page
/**
$(function(){
    //get the list in html code
    var $listHtml = $('ul').html();
    add to the list
    $('ul').append($listHtml);


    //get the list in text
    var $listText = $('ul').text();
    $('ul').append('<p>' + $listText + '</p>');

    //this return only the first child of the ul/ the text return all the text
    var $listHtml = $('li').html();
    $('li').append('<i>' + $listHtml + '</i>');
});
*/
//update and change content in element***************
$(function(){
    $('li:contains("Home")').text('Road');

    // all that that have class cool
    $('li.cool').html(function(){
        //wrap content into em
       return '<b>' + $(this).text() + '<b>';
    });

    $('li#four').remove();

    //adding element and content **************
    $('ul').before('<p>' + "this is a test" + '</p>');
    //after the opening tag
    $('.cool').prepend('+');
    //new li element
    var $newItem = '<li>' + "Rent" + '</li>';
    $('li:last').after($newItem);

    //add and delete attr/classes
    $('li.cool').removeClass();
    $('li').addClass('red');
    $('ul').attr('id','group');
    $('ul').removeAttr('id');

    // using css() to get/set properties*** is better to change jist the class attribute than doing this
    //get color
    var color = $('li').css('color');
    //set
    $('li').css('color','yellow');
    $('li').css('padding-left','+=20');
    //alternative way using object literal
    $('li').css({
        'background-color': '#c5a996',
        'padding-left': '+=75'
    });
});

