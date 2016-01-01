/**
 * Created by Javy on 10/17/2015.
 */
var num1, num2, name;
num1 = 2;
//variable are case sensitive
num2 = 5;
var total = num1 + num2;
name = 'javier';
//array constructor
var color = new Array('white','black','yellow');
//array
var colors = ['blue', 'red', 'green'];
var p = document.getElementById('para');
//text content replace the content of the element
p.textContent = colors[0] ;

//**************function and object ***********
function updateName(){
var n = document.getElementById('name');
    //n.textContent = 'Javier'
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDay();
    var year = date.getYear();
    n.textContent = month +'/'+ day +'/'+ year;

    //display random number
    var ran  = Math.floor((Math.random() * 10) + 1);
    var r = document.getElementById('random');
    r.textContent = ran;
}
//call the function
updateName();

//***********object-literal*********
var store = {
    name : 'metric',
    inventory : 20,
    sold_this_month: 10,
    //method
    inStock : function(){
        return this.inventory - this.sold_this_month;
    }
};
store.name = 'waltmat';
var s = document.getElementById('stock');
s.textContent = store.inStock();

//creating an empty object
var store2 = new object();

store2.name = 'Ralf';
store2.stock = 49;
store2.sold = 30;
store2.inStock = function(){
};

//**** multiple object ****
function Car(name,make,color){
    this.name = name;
    this.make = make;
    this.color = color;
    this.showCar = function() {
        return this.name + this.make + this.color;
    };
}
var MyCar = new Car('Kia','Rio','red');
var yourCar = new Car('BMW','m3','black');