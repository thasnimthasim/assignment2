let i;
var readlineSync = require("readline-sync");
let num = readlineSync.question("Enter the number:");
num=parseInt(num);
for(i=1;i<=10;i++)
{
  console.log(num,"*",i,"=",num*i)
}