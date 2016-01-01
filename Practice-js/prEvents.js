var usernode = document.getElementById('username');
var  msg = document.getElementById('feedback');

//load event
function setup(){
    var passwordText = document.getElementById('password');
    passwordText.focus();
}

window.addEventListener('load',setup,false);

function checkUsername(minLength) {
    if(usernode.value.length < minLength){

        msg.textContent = 'Username  must be 6 character or more';
    }
    else
    {
        msg.textContent='';
    }
    }
//chapter 13 to use a wrapper function solution
if(usernode.addEventListener){
    //if the browser support event listener ie 8 and below
    usernode.addEventListener('blur',function(){

        checkUsername(6);

    }, false);
}else{

    usernode.attachEvent('onblur',function(){

        checkUsername(6);
    });
}
//false = inside to outside event fire order
//true = outside to inside event fire  order

//******** blur and focus fire **********
function checkPassword(){

    var password = passEl.value;
    if(password.length < 7){
     msg.textContent = 'Warning...Not enough character';
    }else{
        msg.textContent = '';
    }
}

function tipPassword(){
    msg.textContent = 'Password must be 7 character long';
}

var passEl = document.getElementById('password');
var msg =document.getElementById('feedback2');

//set events
passEl.addEventListener('focus',function(){
    tipPassword();
},false);

passEl.addEventListener('blur',function(){
    checkPassword();
},false);


//****note msg
var msg =  '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'Our servers are being updated between 3 and 4 a.m. ';
msg += 'During this time, there may be minor disruptions to service.</div>';

//********* create note el
var noteEl = document.createElement('div');
noteEl.setAttribute('id','note');
noteEl.innerHTML = msg;
document.body.appendChild(noteEl);

function dissmissNote(){
    document.body.removeChild(noteEl);
}

//get the link button id
var closeBtn = document.getElementById('close');
//add event
closeBtn.addEventListener('click',function(){
    dissmissNote();
},false);

//****** text area part **********
var textareaEL;

function readChar(e){
    var textEntered, charDisplay, counter, lastKey;
    textEntered = document.getElementById('message').value;
    charDisplay = document.getElementById('letter-count');
    counter = (180 - (textEntered.length));
    charDisplay.textContent = counter;

    lastKey = document.getElementById('last-key');
    lastKey.textContent = 'Last key in ASCII code: ' + e.keyCode;

}
textareaEL = document.getElementById('message');
textareaEL.addEventListener('keypress',function(){
    readChar()
},false);

//form validation/events
var formEl,selectEl,packageHint,termsEl,termsHintEl;
 formEl = document.getElementById('formSignUp');
selectEl = document.getElementById('package');
packageHint = document.getElementById('packageHint');
termsEl = document.getElementById('terms');
termsHintEl = document.getElementById('termsHint');

function showHint(){

    var package = this.options[this.selectedIndex].value;
    if(package == 'monthly'){
        packageHint.textContent = 'Save $10 if you pay for 1 year!';
    }else{
        packageHint.textContent = 'Wise choice!';
    }
}

function checkTerms(event){
    if(!termsEl.checked){
        termsHintEl.innerHTML = 'You must agree to terms';
        event.preventDefault();
    }
}
//event listener
formEl.addEventListener('submit',function(){
    checkTerms(event);
},false);

selectEl.addEventListener('change',showHint,false);