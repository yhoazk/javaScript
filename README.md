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

### Http services test server:
[http://httpbin.org/](http://httpbin.org/)


It echoes the data used in your request for any of these types:

* http://httpbin.org/ip 
	- Returns Origin IP.
* http://httpbin.org/user-agent 
	- Returns user-agent.
* http://httpbin.org/headers 
	- Returns header dict.
* http://httpbin.org/get
	- Returns GET data.
* http://httpbin.org/post 
	- Returns POST data.
* http://httpbin.org/put 
	- Returns PUT data.
* http://httpbin.org/delete Returns DELETE data
* http://httpbin.org/gzip Returns gzip-encoded data.
* http://httpbin.org/status/:code Returns given HTTP Status code.
* http://httpbin.org/response-headers?key=val Returns given response headers.
* http://httpbin.org/redirect/:n 302 Redirects n times.
* http://httpbin.org/relative-redirect/:n 302 Relative redirects n times.
* http://httpbin.org/cookies Returns cookie data.
* http://httpbin.org/cookies/set/:name/:value Sets a simple cookie.
* http://httpbin.org/basic-auth/:user/:passwd Challenges HTTPBasic Auth.
* http://httpbin.org/hidden-basic-auth/:user/:passwd 404'd BasicAuth.
* http://httpbin.org/digest-auth/:qop/:user/:passwd Challenges HTTP Digest Auth.
* http://httpbin.org/stream/:n Streams n–100 lines.
* http://httpbin.org/delay/:n Delays responding for n–10 seconds.


### Test http calls with curl:

```
curl -X POST -H "Content-Type: application/json" -d '{"name":"Test","lastName":"Tester","gender":"F","email":"tset@test.test","telephone":"12345678","municipality":"639","allowsContact":"0","allowData":false}' "http://httpbin.org/post"
```
