/* 1내장모듈 사용법(모듈 추출)  */

const os = require('os');
const url = require('url');

// 이렇게 불러와서 변수에 담아 사용하면 됨.(모듈 추출)
// 내장모듈과 관련한 메서드는 공식문서에 나와있음

/* 2 file system 모듈  */
//  file system 불러와 변수에 담아 사용함(모듈 추출)
const fs = require('fs');


/*2 nodejs는 대부분 비동기메서드를 사용한다.
     동기메서드는 입력 순서대로, 비동기메서드는 순서 상관없이 작업물 결과대로 출력함.
     즉, 비동기메서드에서는 입력 순서에 상관없이 
     쉬운 작업은 빨리 출력되고 복잡한 작업은 늑게 출력된다.
     비동기메서드는 경로 이외에 콜백함수(error를 받는)가 추가된다.
     */

// 3동기 메서드 - fs.readFileSync(),  fs.writeFileSync() 
    // fs.readFileSync(path[, options])

    // const file = fs.readFileSync('inmodule.js');
    // console.log(file.toString('utf-8'));
    // 아래처험 간단히 사용 가능함
    // const file = fs.readFileSync('inmodule.js', 'utf-8');

    /* 동기메서드 정리 
    console.log('A');
     const file = fs.readFileSync('inmodule.js', 'utf-8');
    console.log(file);
    console.log('B');
    이러면 A file B 순서대로 출력됨.
   */

  // fs.writeFileSync(file, data[, options])
   /*
    try{
    fs.writeFileSync("a.txt" , "hello World...!");
    } catch(e){
        
    }
   */

// 4. 비동기 메서드 -  fs.readFile(),  fs.writeFile()
//    fs.readFile(path[, options], callback)
    /*
    console.log('A');
   fs.readFile('inmodule.js', 'utf-8', (error, result)=>{
           console.log(error);
           console.log(result);
    });
    console.log('B'); 
    // 이러면 A B 다음에 file이 출력됨/
    */

    // fs.writeFile(file, data[, options], callback)

    fs.writeFile("ttt/ddd/bbb/aaa/b.txt", "enots0514", (error)=>{  
        if(error) {
            console.log(error);
            return;
        }

        console.log("글자가 추가되었습니다");
    });
  

