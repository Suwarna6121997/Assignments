var digi = [ " ", "one", "two ", "three ", "four ", 
                 "five ", "six ", "seven ", "eight ", 
                 "nine ", "ten ", "eleven ", "twelve ", 
                 "thirteen ", "fourteen ", "fifteen ", 
                 "sixteen ", "seventeen ", "eighteen ", 
                 "nineteen "]

var ten = [ " ", " ", "twenty ", "thirty ", "forty ", 
                 "fifty ", "sixty ", "seventy ", "eighty ", 
                 "ninety "] 

var all  = {0:" ",1:"Thousand ",2:"Million",3:"Billion",2:"Million",3:"Billion",4:"Trillion",5:"Quadrillion",6:"Quintillion",7:"Sextillion",8:"Septillion",9:"Octillion",10:"Nonillion",11:"Decillion",12:"Undecillion",13:"Duodecillion",14:"Tredecillion",15:"Quattuordecillion",16:"Quindecillion",17:"Sexdecillion",18:"Septendecillion",19:"Octodecillion",20:"Novemdecillion",21:"Vigintillion",22:"Centillion"}


var input = "171737635553"
if(input == 0)
{
    console.log("zero")
}
length = input.length
var arr =[]
var x = 0
var i = 0
while(x < length)
{
arr.push(input.toString().slice(x,x+3))
//x = Math.max(x-3,0)
hundred(parseInt(arr[i]))
console.log(all[i])
x = x+3;
i++;
}
console.log(arr)


function hundred(arr)
{
var h = parseInt(arr/100)
var H = digi[parseInt(h)]
console.log(H+"Hundred");
var Ts = parseInt(arr%100)          //100 val
if(Ts<=19)
{
    console.log(digi[parseInt(Ts)])
}
else
{
    tt = parseInt(Ts/10)
    dd = Ts%10
    console.log(ten[parseInt(tt)]+digi[parseInt(dd)])
}
}
