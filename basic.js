
/* 1_nodejs 시작 기본
// 모듈을 추출한다.
const http = require('http');
// 웹 서버를 만들고 실행한다.
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text-html'});
    response.end('<h1>Hello World</h1>');
}).listen(3000, function(){
    console.log('Server running at http://127.0.0.1:3000'); 
});
*/

//ecma6로 변환
const http = require('http');
// 웹 서버를 만들고 실행한다.
http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text-html'});
    response.end('<h1>Enots0514 Home Coding World</h1>');
}).listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000'); 
});


/* 공식문서 자료
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
