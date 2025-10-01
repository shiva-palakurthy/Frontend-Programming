var n = 1;
var x = 2;
var sum = n + x;  
console.log(sum);

//..string 
var mystr = "hello";
console.log(mystr);

//.. adding double quoted text in string by using back slash
var mystr1 = "i am from \"wgl\" nice to meet you";
console.log(mystr1);

//.. adding double quoted text in string by using single quotes
var mystr2 = 'hello "welcome" to the party';
console.log(mystr2);

/**
 * ! escape sequence characters
 *  writing muilple lines in one string
 * \' single quote, 
 * \" double,
 * \\ backslash,
 * \n new line,
 * \r carriage return,
 * \t tab,
 * \b backspace,
 * \f form feed.
 * */ 
let mystr3 = 'let take\n "a\rbreak" as we\tare playing from past 45\\mins\b';
console.log(mystr3);

// adding to text in string
let  mystr4 = "Mrrockline "+"Shiva";
console.log(mystr4);
// adding to sences by using '+='
let mystr5 = "hello world ";
mystr5 += "this is wildfire";
console.log(mystr5);
// finding the length of the string
var mystr6 = "hello world";
mystr6length = mystr6.length;
console.log(mystr6.length);

// example of array 
var myarray = [50,60,30];
console.log(myarray);

var myarray1 = ["shiva",39];
var mydata = myarray1[1];
console.log(mydata);
// chaing the datatype in the array
var myarray3 = [23,24,26];
myarray3[1] = 27;
console.log(myarray3);

//access muti dimensional array with the Indexes
var myarray4 =[[1,2],[3,4],2] ; // array with mutiple arrays
console.log(myarray4);
var myarray6 = [[1], [2,3],[[7,8], 9]];
var mydata6 = myarray6[2][0][1]; // for geting "8"
console.log(mydata6);
// adding the text to an array 
var myarray7 = ["hello ","everyone"];
myarray7.push (["to the party"]); //added to the about text
console.log(myarray7);
// removing the string from the array
var myarray8 = ["hello ","mr ","rockline"];
myarray8.pop(); //pop fuction is only used for the removing of the last element from the array
console.log(myarray8);
 
// shift() and unshift()
var myary = [["shiva ",1] , ["vishal ",2]];
myary.shift(); // here the out will be ["vishal " , 2]
myary.unshift(["vishnu ",3]);// here ["shiva " 1] will be replaced with ["vishnu " 3]
console.log(myary);

// for using text more than one time 

function reusabletext(){
    console.log("hello world");
}
/** 
 * NOTE: Here we can call the function for n times
   without writing the same text again and again
 * */ 
const reusableCount = 5;
for(let i=0; i<reusableCount; i++){
    reusabletext();
}
/**
 * getting output of  difference between  @param a and @param b
 * @param {let} a it is an integer
 * @param {let} b it is an integer 
 */ 
function functionWithArray(a,b) {
    console.log(a-b);// here we can use any of the opration like % * +etc...
}
functionWithArray(10,5);

  




