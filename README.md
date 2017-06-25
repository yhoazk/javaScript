# javaScript_player
Toca una lista de canciones consecutivamente


Code snippets:

Print a comment frame:
```js
c = function( mess ){
	var s = '/';
	s+='*'.repeat(mess.length + 8) + '\n';
	s+='**  ' + mess + '  ***\n';
	s+='*'.repeat(mess.length + 8) + '/\n';
	console.log(s);
}
```


Print the tree periodically and in increments_
```js
repeat = function(c,n){ var s =''; while(n--){s+=c;}return s;  }

t = function(x){
	var y=0;
    while(x--){
       console.log( repeat(' ',x) + repeat('*',++y));
		y++;

    }
}

var n = 1;d = setInterval(function(){t(n++)}, 1000);
```

To stop the printing:
```js
clearInterval(d);
```


## Sin print

```js
var seno = function(n)
{
    s = "#".repeat(1+ 98/2+ 98/4*(Math.sin(((n%360)*3.141560)/180))) +
    	" ".repeat(70+ 70/4*(Math.sin(((5.5*n%360)*3.141560)/180))) +
	"#".repeat(1+ 98/2+98/4*(Math.sin(((n%360)*3.141560)/180)));
    console.log(s);
}
```


http://httpbin.org/
