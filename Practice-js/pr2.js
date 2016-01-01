/**
 * Created by Javy on 10/17/2015.
 */

    //get the first node
/*var hot = document.getElementsByTagName('li');
if(hot.length > 0){
 var el = hot[0];
 el.className = 'cool';
}
    */

var element = document.getElementsByTagName('li');
for(var i = 0; i < element.length; i++){
 element[i].className = 'hot';
}

//Replacing the text node
var oneList = document.getElementById('one');
var textOne = oneList.textContent;
textOne = textOne.replace('Home','MyHome');
oneList.textContent = textOne;

var twoList = document.getElementById('two');
var textTwo = twoList.firstChild.nodeValue;
textTwo = textTwo.replace('Contact','MyContacts');
twoList.firstChild.nodeValue = textTwo;

//******* adding and removing html using dom
var newEl =  document.createElement('li');
var  newText = document.createTextNode('Help');
newEl.appendChild(newText);
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newEl);

//remove element of a dom tree
var ElementRe = document.getElementsByTagName('li')[3];
var container = ElementRe.parentNode;
container.removeChild(ElementRe);

