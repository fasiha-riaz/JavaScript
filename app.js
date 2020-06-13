//CHAPTER 1:

// 1-
alert("Welcome to My Website") 

// 2-
alert("Error! Please enter a valid password.")

//3-
alert("Welcome to JS Land...\n Happy Coding!")

//4-
alert("Welcome to JS Land...")
alert("Happy Coding")


//5-

alert("I can run through my browser's console...")

//CHAPTER 2:

//1-
var username;

//2-
var myName=("Fasiha Riaz")

//-3
    var message=("Hello World")
    alert(message)

//4-
var name=("Jhone Doe")
var age=("15 years old")
var course=("Certifie Mobile Application Development")

alert(name)
alert(age)
alert(course)

//5-
var pizza=("PIZZA\n PIZZ\n PIZ\n PI\n P")
alert(pizza)

//6-
var email=("My email address is"+" fasihariaz@gmail.com")
alert(email)

//7-
var book=("A smarter way to learn JavaScript")
alert("I am trying to learn from the book. " +book)

//8-
document.write("Yah! I can write HTML content through JavaScript<br/>")

//9-
var string=( " ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ")
alert(string)
document.write( string)


//CHAPTER 3:

//1-
var age=21;
alert("I am " +age +" years old")

//2-

//3-
var birthYear=1999;
document.write("<br/> My birth Year is " +birthYear  +   "<br/> Data type of my declared variable is number")

//4-



//CHAPTER 4:


//1-
var message="<br/> Hi!"
var name=" Fasiha"
var fname="Riaz"
document.write(message +  name + fname)

//2-
var legal=(" Name,"+ " Name123,"+" Name@35,"+" $NAME23,"+ " _NAME#4562")
var illegal=("!name,"+" 12name,"+" @#NAME,"+" keywords(else),"+ "123$")
document.write( "<br/> Legal Variables: "+ legal)
document.write( "<br/> Illegal Variables: "+ illegal)

//3-

//(a)
document.write("<h1>Rules for naming JS variables</h1>")

//(b)
var first="numbers"
var second="$(dollar)"
var third="letters"
var fourth="symbols."
document.write("<br/>a)Variables name can only contain "+first+" ,"+second+ "," +third+ " and " +fourth)

//(c)
var first="$(dollar)"
var second="letters"
var third="-(underscore)."
document.write("<br/>b)Variables must begin with a "+first+" ,"+second+ " or " +third)

//(d)
var first="sensitive."
document.write("<br/>c)Variable names are case " +first)

//(e)
var first="keywords."
document.write("<br/>c)Variable name should not be JS" +first)


//CHAPTER 5

//1 & 2
var x=prompt("Enter first value")
var z=prompt("Enter operator")
var y=prompt("Enter first value")
document.write("<br/>"+ x+z+y+" =")
if(z === '+'){
    document.write((+x)+(+y))
}
else if( z === '-'){
    document.write(x-y)
}
else if( z === '*'){
    document.write(x*y)
}
else if( z === '/'){
    document.write(x/y)
}
else if( z === '%'){
    document.write(x/y*100 +"%")
}

//3

var a=5
document.write("<br/>Value after variable declaration is undefined")
document.write("<br/>Initial Value:"+a)
var c= ++a
document.write("<br/>Value after increment:" +c)
var b= c +7
document.write(" <br/>Value after addition is:"+b)
var f= --b
document.write("<br/>Value after decrement is:" +b)
var y=b/3
document.write("<br/>The remainder is: 0")


//4
var ticket="600"
var c= ticket * 5
document.write("<br/> Total cost to buy a 5 movie tickets = " +c)

//5
var table=4
document.write("<br/><h1>Table of 4</h1>")
for(i=1;i<11;i++)
{
    var c= table*i
    document.write("<br/>"+table+"x" +i+ "="+c)
}

//6
document.write("<br/><h1>Temperature</h1>")
var cel=25
var conc= (cel * 9/5)+32
document.write("<br/>"+cel+ " is " +conc+ "F")

var fare=70
var conv= (fare -32)* 5/9
document.write("<br/>"+fare+ " is " +conv+ "F")


//7
document.write("<br/><h1>SHOPPING CART</h1>")
var item1 =450
document.write("<br/>Price of item 1 is:"+item1)
var quan1=prompt("Enter the quantity of item1")
document.write("<br/>Quantity of item1 is" +quan1)
var item2 =560
document.write("<br/>Price of item 1 is:"+item2)
var quan2=prompt("Enter the quantity of item2")
document.write("<br/>Quantity of item1 is" +quan2)
var ship=100
document.write("<br/>Shipping Charges:"+ship)
var q1= item1 * quan1
var q2= item2 * quan2
var f= q1+ q2 +ship
document.write("<br/>Total cost of your order is"+f)

//8
document.write("<br/><h1>Marks Sheet</h1>")
var total=800
document.write("<br/>Total Marks: " +total)
var obtain=569
document.write("<br/>Marks obtained: " +obtain)
var per= obtain/total * 100
document.write("<br/> Percentage: " +per + "%")

//9
document.write("<br/><h1>Currency in PKR </h1>")
var us=10
var ri=25
var currency= (us * 104.80) + ( ri * 28)
document.write("<br/>Total Currency in PKR: "+ currency)

//10
document.write("<br/><h1> Calculation</h1>")
var a=10
var call= ((a +5)*10)/2
document.write("<br/> The final answer is: "+ call)

//11(
document.write("<br/><h1> Age Calculator</h1>")
var current=2020
document.write("<br/>Current Year:" +current)
var birth=1999
document.write("<br/>Birth Year: "+birth)
var count= current-birth
document.write("<br/>Your age is:" +count)


//12
document.write("<br/><h1>The Geometrizer</h1>")
var radius= 20
document.write("<br/>Radius of circle:"+ radius)
var circ= 2* 3.142* radius
document.write("<br/>The circumference is:" +circ)
var area= 3.142*radius^2
document.write("<br/>The area of circle is:"+ area)


//13
document.write("<br/><h1>The Lifetime Supply Calculator</h1>")
var snack="lays"
document.write("<br/>Favourite Snack: " + snack)
var age=21
document.write("<br/>Current Age:"+ age)
var esti=60
document.write("<br/>Estimated Maximum Age:"+esti)
var per=3
document.write("<br/>Amount of Snacks per day:"+ per)
var calc=per * esti
document.write("<br/>You will need "+calc + " "+snack+" last you until the ripe old age of "+ esti)

//CHAPTER 6-9


//1-
document.write("<br/><h1>Result:</h1>")
var a = 10
document.write("<br/> The value of a is:" +a)
document.write("<br/>------------------------------")
var inc = ++a
document.write("<br/> The value of ++a is:" +inc)
document.write("<br/>Now the value of a is:" +inc)
document.write("<br/>------------------------------")
var post=a++
document.write("<br/>The value of a++ is:"+post)
document.write("<br/>Now the value of a is:12")
document.write("<br/>------------------------------")
var dec=--a
document.write("<br/>The value of --a is:" +dec)
document.write("<br/>Now the value of a is:"+dec)
document.write("<br/>------------------------------")
var postd=a--
document.write("<br/>The value of a-- is:"+postd)
document.write("<br/>Now the value of a is:"+a)


//2-
document.write("<br/><h1>Expression</h1>")
var a=2
document.write("<br/>a is:"+a)
var b=1
document.write("<br/>b is:"+b)

var result= (--a) - (--b) + (++b)+(b--)
document.write("<br/>result is:"+result)
var first=--a
document.write("<br/>--a:"+first)
var second=(--a)-(--b)
document.write("<br/>--a - --b:"+second)
var third=(--a)-(--b) +(++b)
document.write("<br/>--a - --b + ++b:"+third)
var fourth=(--a)-(--b) +(++b) +(b--)
document.write("<br/>--a - --b + ++b + b--"+fourth)


//3-
var name=prompt("Enter your name:")
document.write("<br/>Welcome"+ name+ "<br/>Assalam-o-Alaikum!")

//4-
document.write("<br/><h2>Table:</h2>")
var num=prompt("Enter a number")

 if(num === ''){
    for(i=1;i<11;i++)
{
    var c= 5*i
    document.write("<br/>"+5+"x" +i+ "="+c)
}
}else {
    for(i=1;i<11;i++)
{
    var c= num*i
    document.write("<br/>"+num+"x" +i+ "="+c)
}
}


//5-
var sub1=prompt("Enter the name of Subject1")
var sub2=prompt("Enter the name of Subject2")
var sub3=prompt("Enter the name of Subject3")
var total=100
var mark1=prompt("Enter the Obtain Marks of Subject1")
var per1= (mark1/total)*100
var mark2=prompt("Enter the Obtain Marks of Subject2")
var per2= (mark2/total)*100
var mark3=prompt("Enter the Obtain Marks of Subject3")
var per3= (mark3/total)*100
var total1= 100 * 3
var total2= (+mark1)+(+mark2)+(+mark3)
var ptot= per1+per2+per3 
document.write("<br/>Subject   Total Marks    Obtained Marks  Percentage ") 
document.write("<br/>"+sub1+ " &nbsp&nbsp&nbsp&nbsp&nbsp" +total+"  &nbsp&nbsp&nbsp&nbsp&nbsp  "+mark1+" &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    "+per1+"%")
document.write("<br/>"+sub2+ " &nbsp&nbsp&nbsp&nbsp&nbsp" +total+"  &nbsp&nbsp&nbsp&nbsp &nbsp "+mark2+" &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp     "+per2+"%")
document.write("<br/>"+sub3+ " &nbsp&nbsp&nbsp&nbsp&nbsp" +total+"  &nbsp&nbsp&nbsp&nbsp&nbsp  "+mark3+" &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp     "+per3+"%")
document.write("<br/> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+total1+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+total2+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ptot+"%")


//CHAPTER 9-11


//1-
var city = prompt("Enter name of the city:")
if(city === 'Karachi'|| 'karachi'){
    document.write("<br/>Welcome to city of lights")
}else{
    document.write("<br/>Incorrect city name")
}


//2-
var gender=prompt("Enter your gender")
if(gender === 'male'){
    document.write("<br/>Good Morning Sir")
}else if(gender === 'female'){
    document.write("<br/>Good Morning Ma'am")
}

//3-          
var traffic=prompt("Enter the color of road traffic signal ")   
if(traffic === 'red')    
{
    document.write("<br/>Must Stop")
}
if(traffic === 'yellow')    
{
    document.write("<br/>Ready to Move")
}
if(traffic === 'green')    
{
    document.write("<br/>Move now")
}

//4-
var fuel=prompt("Enter your remaining fuel in car (in litres)")
if(fuel <= ' 0.25litres'){
    document.write("<br/>Please refill the fuel in your car")
}else{
    document.write("<br/>")
}

//5-
//a)
var a=4;
if(++a ===5){
    alert("given condition for variable a is true");
}
document.write("<br/>a)True")

//b)

var b=82;
if(b++ ===83){
    alert("given condition for variable a is true");
}
document.write("<br/>b)False")

//c)

var c=12;
if(c++ ===13){
    alert("Condition 1 is true");
}
if(c ===13){
    alert("Condition 2 is true");
}
if(++c <14){
    alert("Condition 3 is true");
}
if(c ===14){
    alert("Condition 4 is true");
}
document.write("<br/>c) 2 & 4 is True")

//d)
var materialCost=20000;
var laborCost=2000;
var totalCost=materialCost + laborCost;
if(totalCost===laborCost+materialCost){
    alert("The cost equals");
}

document.write("<br/>d)True")

//e)
if(true){
    alert("True");
}
if(false){
    alert("False");
}

document.write("<br/>e)True")

//f)
if("car"<"cat"){
    alert("car is smaller than cat");
}

document.write("<br/>f)True")


//6-
document.write("<br/><h1>Marks Sheet</h1>")
var total=prompt("Enter total marks")
document.write("<br/>Total Marks:" +total)
var sub1=prompt("Enter marks obtained in Subject1")
var sub2=prompt("Enter marks obtained in Subject2")
var sub3=prompt("Enter marks obtained in Subject3")
var obtained=(+sub1)+(+sub2)+(+sub3)
document.write("<br/>Marks Obtained:" +obtained)
var percent= (obtained/total) * 100
document.write("<br/>Percentage:" +percent+ "%")
if(percent >=80){
    document.write("<br/>Grade:A-one")
    document.write("<br/>Remarks: Excellent")
}
else if(percent >=70){
    document.write("<br/>Grade:A")
    document.write("<br/>Remarks: Good")
}
else if(percent >=60){
    document.write("<br/>Grade:B")
    document.write("<br/>Remarks: You need to improve")
}
else if(percent < 60){
    document.write("<br/>Grade:F")
    document.write("<br/>Remarks: Sorry")
}


//7-
var array= [1,2,3,4,5,6,7,8,9,10];
var guess=prompt("Guess the secret number:")

if(array === guess){
    document.write("<br/>Bingo! Correct answer")
}
else{
    document.write("<br/>Close enough to the correct answer")
}

//8-
var number=9
var divi=9/3
document.write("<br/>Number is divisible by 3")


//9-
var num=prompt("Enter a number")
if(num%2==0){
    document.write("<br/>Even number")
}
else{
    document.write("<br/>Odd number")
}

//10-
var temp=prompt("Enter temperature")
if(temp>40){
    document.write("<br/>It is too hot outside.")
}
else if(temp>30){
    document.write("<br/>The Weather today is Normal.")
}
else if(temp>20){
    document.write("<br/>Today's Weather is cool.")
}
else if(temp>10){
    document.write("<br/>OMG! Today's weather is so Cool.")
}

//11
var first=prompt("Enter first value")
var operator=prompt("Enter operator")
var second=prompt("Enter second value")
document.write("<br/>"+ x+z+y+" =")
if(operator === '+'){
    document.write((+first)+(+second))
}
else if( operator === '-'){
    document.write(first-second)
}
else if( operator === '*'){
    document.write(first*second)
}
else if( operator === '/'){
    document.write(first/second)
}
else if( operator === '%'){
    document.write(first/second*100 +"%")
}


//CHAPTER 12-13
//1-
var chr=prompt("Enter any character")
if(chr>=65 && chr <=90){
    document.write("<br/>Character is Uppercase")
}
else if(chr>=97 && chr <=122){
    document.write("<br/>Character is Lowercase")
}
else if(chr>=48 && chr <=57){
    document.write("<br/>Character is Digit")
}
//2
var num1=prompt("Enter first number")
var num2=prompt("Enter second number")
if(num1>num2){
    document.write("<br/>" +num1+ "is Larger")
}
else if(num1<num2){
    document.write("<br/>"+num2+ "is Larger")
}
else if(num1 ==num2 ){
    document.write("<br/>"+num1+ "&" +num2+ "is equal")
}


//3-
var number=prompt("Enter a number")
if( number === -number){
    document.write("<br/>Number is negative")
}
else if( number === number){
    document.write("<br/>Number is positive")
}
if( number === 0){
    document.write("<br/>Zero")
}


//4-
var alp=prompt("Enter any alphabet")
var array=['a','e','i','o','u']
if(alp === array){
    document.write("<br/>True: it's a vowel")
}else{
    document.write("<br/>False : it's not a vowel")
}


//5-
var pass="pakistan"
var code=prompt("Enter your password")
if(pass=== code)
{
    document.write("<br/>Correct! The password you entered matches the original password")
}else if(code ===''){
    document.write("<br/>Please enter your password.")
}else{
    document.write("<br/>Incorrect Password")
}


//6-
var greeting;
var hour=13;
if(hour<18){
    greeting="Good day";
}else{
    greeting="Good Evening";
}

//7-
var time=prompt("Please enter the time in 24hours format")
if(time>=0000 && time<1200){
    document.write("<br/>Good morning!")
}
else if(time>=1200 && time<1700){
    document.write("<br/>Good afternoon!")
}
else if(time>=1700 && time<2100){
    document.write("<br/>Good evening!")
}
else if(time>=2100 && time<=2359){
    document.write("<br/>Good night!")
}



//CHAPTER 14-16

//1-
var arrayA=[]

//2-
var arrayA = []
var arrayB = new Array()

//3-
var string1=['stringOne', 'stringTwo', 'stringThree', 'StringFour', 'StringFive'];

//4-
var numb = [1,2,3,4,5,6,7,8,9,10];

//5-
var boolean = [0,1];

//6-
var mixVariable = [1, 'one', 2, 'two', 3, 'three', '$'];


//7-

var education = ['SSC', 'HSC', 'BSC', 'BS', 'BCOM', 'MS','M.PHIL', 'pHD'];
document.write('<h1> Qualification </h1>');
for (var i = 0; i<education.length; i++)
{
    document.write('<br/>' , education[i]);
}
//8-

var studentss = ['Michael', 'John', 'Tony'];
var markss = [320,230,480];
var totalss = 500;
for (var jk = 0; jk<3; jk++)
{
    document.write('<br/> The score of' + " " + studentss[jk] + ' ' + 'is' + " " + markss[jk] + "" + 
    'The percentage is' + " " + markss[jk]/totalss*100 + " " + '%');
}

//9-

var color = ['red', 'violet'];
//A
color.unshift(prompt('Enter your color'));
document.write('<br/>' ,color);
//B
color.push(prompt('Enter your color'));
document.write('<br/>' ,color);
//C
color.unshift(prompt('Enter your color'));
color.unshift(prompt('Enter your color'));
document.write('<br/>' ,color);
//D
color.shift();
document.write('<br/>' ,color);
//E
color.pop();
document.write('<br/>' ,color);
//F
var col = prompt ("enter color");
var position = +prompt ('enter position');
color.splice(position,1,col);
document.write('<br/>' ,color);
//G
var position = +prompt ('enter position');
var valuetobedelete = +prompt ('enter position');
color.splice(position,valuetobedelete);
document.write('<br/>' ,color);



//10-


var asc = [320, 230, 480, 120];
var sorted= asc.sort();
document.write(sorted);

//11-
var city = ['Karachi', 'Lahore', 'Islamad', 'Quetta', 'Peshawar'];
var selected = city.slice(2,4);
document.write(selected);

//12-
var cat = ['this', 'is', 'my', 'cat'];
var joining = cat.join();
document.write(joining);

//13-
var fifo = ['Keyboard', 'Mouse', 'Printer', 'Monitor'];
var pop1 = fifo.shift();
document.write('<br/> OUT:');
document.write('<br/>', pop1);
var pop1 = fifo.shift();
document.write('<br/> OUT:');
document.write('<br/>', pop1);
var pop1 = fifo.shift();
document.write('<br/> OUT:');
document.write('<br/>', pop1);
var pop1 = fifo.shift();
document.write('<br/> OUT:');
document.write('<br/>', pop1);

//14-
var lifo = ['Keyboard', 'Mouse', 'Printer', 'Monitor'];
var pop1 = lifo.pop();
document.write('<br/> OUT:');
document.write('<br/>', pop1);
var pop1 = lifo.pop();
document.write('<br/> OUT:');
document.write('<br/>', pop1);
var pop1 = lifo.pop();
document.write('<br/> OUT:');
document.write('<br/>', pop1);
var pop1 = lifo.pop();
document.write('<br/> OUT:');
document.write('<br/>', pop1);



   //CHAPTER 17-20

   //1-

   var multiarray4  = [ [],[]];
   
   //2-
   var multiarray2  = [
    [0,1, 2, 3], 
    [1,0,1,2], 
    [2,1,0,1]
   ];

//3-
for (var i = 1; i<=10; i++)
{
    document.write('<br/>' + i);
}

//4-
var x = +prompt("Enter a Number to show its multiplication table: ");
var len = +prompt("Enter the lenght for multiplication table: ");
if (x > 0) {
    for (var xa = 1; xa <= len; xa++) {
        document.write(' <br/>' + x + "" + 'x' + " " + xa + " " + '=' + " " + x * xa);
    }
}

//5-
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'] ;
for ( var fruit= 0; fruit < fruits.length; fruit ++)
{
document.write('<br/> Element at index' + fruit + 'is' + fruits[fruit]);
}

// //6-
// document.write('<br/> <h3> Counting: </h3>');
// var counting;
// for (counting = 1 ; counting <=15 ; counting++)
// {
//     document.write( counting + ',');
// }
// document.write('<br/> <h3> Reverse Counting: </h3>');
// for (counting = 15 ; counting >=1 ; counting++)
// {
//     document.write( counting + ',');
// }
// document.write('<br/> <h3> Even: </h3>');
// for (counting = 0 ; counting <=20 ; counting+2)
// {
//     document.write(counting + ',');
// }
// document.write('<br/> <h3> Odd: </h3>');
// for (counting = 1 ; counting <=19 ; counting+1)
// {
//     document.write( counting + ',');
// }
// document.write('<br/> <h3> Series: </h3>');
// for (counting = 2 ; counting <=20 ; counting+2)
// {
//     document.write(counting + 'K');
// }
//7-
var user = prompt ('Welcome to ABC bakery, what do you want to order sir/ maam');
var Arrr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var bakery;
for (bakery= 0; bakery< Arrr.length; bakery ++) 
{
if ( Arrr[bakery]=== user )
{
    alert(user +" " +  'available at index' + " " + bakery + 'in our bakery');
} 
else
{
    alert('we are sorry!' + " " + user + " " + 'is not available in our bakery');
} 
}

//8-
var array =[24, 53, 78, 91, 12];
var largest= 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];}}
console.log(largest);

//9-
const arr=[24, 53, 78, 91, 12];
const min = Math.min(...arr)
console.log(min)

//10-
for ( var i=5; i<=100; i=i+5)
{
    document.write(i + " ");
}