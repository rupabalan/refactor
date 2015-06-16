$(document).ready (function(){

var a =prompt("enter a number");

//check to see if string is valid
var c=parseInt(a) ;


if (isNaN(c))
{

alert("string supplied. You must supply a number\n")
}
else
{
	
var b= +c;
decidefizzbuzz(b);

}

});

function decidefizzbuzz(n)
{
var printfizz="";
for (var i=1; i<=n;i++)
{
	printfizz="";

	if(i%3==0 && i%5==0)
	{
      printfizz="fizz buzz";
	}
	else if (i%3==0)
	{
		printfizz="fizz";
	}
	else if (i%5==0)
	{
		printfizz="buzz";
	}
	else 
	{
		printfizz=i;
	}

	var html = '<p>' + printfizz + '</p>';
	 $('body').append(html);
}

}