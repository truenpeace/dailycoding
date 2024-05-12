console.log("");  // 빈 문자열: 문자가 들어 있지 않음
console.log('testing');
console.log("3.14");
console.log('name="mySoul"');
console.log("Wouldn't you prefer O'Reilly's book?");
console.log("It is the ratio of a circle's circumference to its radius");
console.log(`"She said 'hi'", he said.`);
console.log("=========================================================");

// 두 행을 한 행으로 표현
console.log('two\nlines');
console.log();

// 한 행을 세 행으로 나눠쓰기
console.log("one\nlong\nline");
console.log();

// 두 행 문자열을 두 행에 나눠쓰기
console.log(`이 행의 마지막에 있는 줄바꿈 문자는
있는 그대로 문자열의 일부입니다`);
console.log("=========================================================");
console.log();
console.log();
console.log();

console.log("문자열 리터럴 안의 이스케이프 시퀀스>");
console.log("NUL문자=> \0");
console.log("백스페이스=> \b");
console.log("탭=> \t탭");
console.log("뉴라인=> \n뉴라인");
console.log("세로 탭=> \v세로 탭");
console.log("폼 피드=> \f폼 피드");
console.log("캐리지 리턴=> \r캐리지 리턴");
console.log("큰따옴표=> \"");
console.log("작은따옴표(아포스트로피)=> \'");
console.log("역슬래시=> \\");
console.log("16진수 숫자 두 개 nn으로 표현하는 유니코드 문자=> \x75");
console.log("16진수 숫자 네 개 nnnn으로 표현하는 유니코드 문자=> \u1004");
console.log("코드 포인트 n으로 표현하는 유니코드 문자. 여기서 n은 0에서 10FFFF 범위에 있는 16진수 숫자=> \u{3929}");
console.log("=========================================================");
console.log();
console.log();
console.log();

console.log("문자열 다루기>");
let msg = "Hello, " + "world"       // 문자열 "Hello, world"
console.log(msg);
console.log();

let name = "David";
let greeting = "Welcome to my blog," + " " + name;
console.log(greeting);
console.log();

let s = "Hello, world";
console.log("s=> "+s);
console.log("s.substring(1,4)=> "+s.substring(1,4));    // => "ell": 두 번째, 세 번째, 네 번째 문자
console.log("s.slice(1,4)=> "+s.slice(1,4));            // => "rld": 마지막 세 문자
console.log("s.split(", ")=> "+s.split(", "));          // => ["Hello", "world"] 구분자를 기준으로 나눔
console.log();

// 문자열 검색
console.log('s.indexOf("l")=> '+s.indexOf("l"));        // => 2: l이 처음 나타나는 위치
console.log('s.indexOf("l", 3)=> '+s.indexOf("l", 3));  // => 3: 3번 문자부터 시작해 l이 처음 나타나는 위치
console.log('s.indexOf("zz")=> '+s.indexOf("zz"));      // => -1: s에는 zz라는 문자열이 들어 있지 x
console.log('s.lastIndexOf("l")=>'+s.lastIndexOf("l")); // => 10: l이 마지막으로 나타나는 위치
console.log();

// 불을 반환하는 검색 함수는 ES6에서 추가됨
console.log('s.startsWith("Hell")=> '+s.startsWith("Hell"));    // => true: s는 Hell로 시작
console.log('s.endsWith("!")=> '+s.endsWith("!"));              // => false: s는 !로 끝나지 x
console.log('s.includes("or")=> '+s.includes("or"));            // => true: s에는 or이 들어 있음
console.log();

// 문자열을 변경합니다.
console.log('s.replace("llo", "ya")=> '+s.replace("llo", "ya"));    // "Heya, world"
console.log("s.toLowerCase()=> "+s.toLowerCase());                  // "hello, world"
console.log("s.toUpperCase()=> "+s.toUpperCase());                  // "HELLO, WORLD"
console.log("s.normalize()=> "+s.normalize());                      // 유니코드 NFC 정규화는 ES6에서 추가됨
console.log('s.normalize("NFD")=> '+s.normalize("NFD"));            // NFD 정규화, NFKC, NFKD도 있음
console.log();

// 무자열의 각 16비트 문자를 검사
console.log("s.charAt(0)=> "+s.charAt(0));                      // => "H": 첫 번째 문자
console.log("s.charAt(s.length-1)=> "+s.charAt(s.length-1));    // => "d": 마지막 문자
console.log("s.charCodeAt(0)=> "+s.charCodeAt(0));              // => 72: 주어진 위치의 16비트 숫자
console.log("s.codePointAt(0)=> "+s.codePointAt(0));            // => 72: 16비트보다 큰 코드 포인트에서 동작하는 ES6 기능
console.log();

// 패딩 함수는 ES2017에서 추가됨
console.log('"x".padStart(3)=> '+"x".padStart(3));              // => "  x": 왼쪽에 스페이스를 세 개 더함
console.log('"x".padEnd(3)=> '+"x".padEnd(3));                  // => "x  ": 오른쪽에 스페이스를 세 개 더함
console.log('"x".padStart(3, "*")=> '+"x".padStart(3, "*"));    // => "**x": *를 왼쪽에 붙여 길이를 3에 맞춤
console.log('"x".padEnd(3, "-")=> '+"x".padEnd(3, "-"));        // => "x--": -를 오른쪽에 붙여 길이를 3에 맞춤
console.log();

// 공백 제거. trim()은 ES5, 나머지는 ES2019 기능
console.log('" test ".trim()=> '+" test ".trim());                 // => "test": 앞뒤 공백을 제거
console.log('" test ".trimStart()=> '+" test ".trimStart());       // => "test ": 왼쪽 공백 제거. trimLeft도 있음
console.log('" test ".trimEnd()=> '+" test ".trimEnd());           // => " test": 오른쪽 공백 제거. trimRight도 있음
console.log();

// 그 외 문자열 메서드
console.log('s.concat("!")=> '+s.concat("!"));      // => "Hello, world!": + 연산자를 쓰는 게 더 간단
console.log('"<>".repeat(5)=> '+"<>".repeat(5));    // => "<><><><><>": n번 복사. ES6에서 추가

let name = "Bill";
let greeting = `hello ${ name }.`;
console.log(greeting);