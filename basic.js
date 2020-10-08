
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

//ecma6로 변환t
// const http = require('http');
// http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type':'text-html'});
//     response.end('<h1>Enots0514 Home Coding World</h1>');
// }).listen(3000, () => {
//     console.log('Server running at http://127.0.0.1:3000'); 
// });


/* 공식문서 자료p
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

/*2.문자열 자료형의 전역변수
console.log('filename:', __filename); 파일네임
console.log(`dirname:`, __dirname);   디렉토리네임
*/
//템플릿 문자로 변환t
// console.log(`filename: ${__filename}`);
// console.log(`dirname: ${__dirname}`);


/* 3. console 알아보기 t */
console.log("%d %s %j", 273, "a", {a:10});
// "숫자 문자 제이슨"  출력값 ==>   273 a {"a":10}
console.time("a");  //1
console.timeEnd("a"); //2
// a라는 문자가 출력되고 끝나는 시간을 체크 (1이 나오고 2가 나오는 시간을 의미함)

/* 4. console.time 활용하기 t*/
console.time("alpha"); 
 
    let output = 1;
    for (let i=1; i<=10; i++){
        output *= i;
    } 
    console.log(`Result: ${output}`);

 console.timeEnd("alpha"); //시작시와 끝에 같은 문자를 넣어줌

        /* console.timeEnd("alpha"); 응용 
        setTimeout(function(){
            console.timeEnd("alpha");
        }, 3000 );  */

  /* 5. process 객체 활용하기 t*/      
  // process는 자바스크립트에는 없고 nodejs에만 존재하는 객체이다
  // process에는 다양한 메서드가 있는데 이 중 
  // process.exit() 는 프로그램을 종료시킬 때 사용한다.

  /* 6. export 객체와 모듈 t*/
  
  